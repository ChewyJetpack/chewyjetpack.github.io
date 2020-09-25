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
        projects {
          slug
          categories {
            slug
          }
        }
        categories {
          slug
        }
      }
    }`)

    // Create a home page
    createPage({
      path: `/`,
      component: './src/components/pages/Index.vue'
    })

    // Create a page for each project
    data.strapi.projects.forEach((project) => {
      createPage({
        path: `/${project.categories[0].slug}/${project.slug}`,
        component: './src/components/templates/Project.vue',
        context: {
          slug: project.slug
        }
      })
    })

    // Create a page for each category
    data.strapi.categories.forEach((category) => {
      createPage({
        path: `/${category.slug}`,
        component: `./src/components/templates/Category.vue`,
        queryVariables: {
          slug: category.slug
        }
      })
    })
  })
}
