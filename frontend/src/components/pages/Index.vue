<template>
  <div class="grid">
    <div class="grid__centre-left">
      <h1 class="u-bottom-spacer-s">{{ $page.strapi.home.title }}</h1>
      <h2 class="subheading u-bottom-spacer-xl">{{ $page.strapi.home.subheading }}</h2>
      <div>
        <Content :content="$page.strapi.home.content" />
      </div>
    </div>
    <!-- List of project preview cards -->

    <div class="grid__centre">
      <div class="story-grid">
        <ProjectCard
          v-for="project in $page.strapi.projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
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
        formats
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/molecules/ProjectCard'
import Content from '~/components/molecules/Content'
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