<template>
  <div class="grid">
    <div class="grid__two-thirds">
      <h1 class="u-bottom-spacer-s">{{ $page.strapi.home.title }}</h1>
      <h2 class="subheading u-bottom-spacer-xl">{{ $page.strapi.home.subheading }}</h2>
    </div>

    <div class="grid__third grid-offset--0">
      <div class="selfie">
        <g-image
            :alt="$page.strapi.home.title"
            :src="getStrapiMedia($page.strapi.home.selfie.url)"
            class="selfie__img"
          />
      </div>
    </div>
    
    <div class="grid__two-thirds">
      <Content :content="$page.strapi.home.content" />
    </div>
    <!-- List of project preview cards -->

    <div class="grid__full">
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
    global {
      siteName
    }
    # Get homepage data
    home {
      title
      subheading
      selfie {
        formats
        url
      }
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

<style lang="scss" scoped>
  .selfie {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    width: 200px;
    height: 200px;
    margin-left: auto;

    &__img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 120%;
    }
  }
</style>