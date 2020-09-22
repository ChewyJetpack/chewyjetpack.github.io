<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.strapi.home.title }}</h1>
      <h2 class="u-bottom-spacer-xl">{{ $page.strapi.home.subheading }}</h2>
      <div>
        <Content :content="$page.strapi.home.content" />
      </div>
      <h2>
        My Work
      </h2>
    </div>
    <!-- List of project preview cards -->
    <div>
      <ProjectCard
        v-for="project in $page.strapi.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      subheading
      content {
        __typename
        ... on strapiTypes_ComponentSectionsRichText {
          id
          content
        }
        ... on strapiTypes_ComponentSectionsLargeMedia {
          id
          media {
            id
            url
            mime
          }
          description
        }
        ... on strapiTypes_ComponentSectionsImagesSlider {
          id
          title
          images {
            id
            url
          }
        }
      }
      # Metadata for SEO
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
    # List projects
    projects(sort: "date:desc") {
      title
      slug
      description
      categories {
        id
        title,
        slug
      }
      coverImage {
        id
        url
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/ProjectCard'
import Content from '~/components/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProjectCard,
    Content,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>