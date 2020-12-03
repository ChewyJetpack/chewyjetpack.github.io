// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource((store) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // Fetch all Strapi projects
  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      strapi {
        posts {
          slug
        }
        tags {
          slug
        }
        projects {
          slug
        }
      }
    }`)

    // Create a home page
    createPage({
      path: `/`,
      component: './src/components/pages/Index.vue'
    })

    // Create a blog page
    createPage({
      path: `/blog/`,
      component: './src/components/pages/Blog.vue'
    })

    // Create a projects page
    createPage({
      path: `/projects/`,
      component: './src/components/pages/Projects.vue'
    })

    // Create a page for each post
    data.strapi.posts.forEach((post) => {
      createPage({
        path: `/blog/${post.slug}`,
        component: './src/components/templates/Post.vue',
        context: {
          slug: post.slug
        }
      })
    })

    // Create a page for each tag
    data.strapi.tags.forEach((tag) => {
      createPage({
        path: `/blog/tags/${tag.slug}`,
        component: './src/components/pages/TagPage.vue',
        context: {
          slug: tag.slug
        }
      })
    })

    // Create a page for each project
    data.strapi.projects.forEach((project) => {
      createPage({
        path: `/projects/${project.slug}`,
        component: `./src/components/templates/Project.vue`,
        context: {
          slug: project.slug
        }
      })
    })
  })
}
