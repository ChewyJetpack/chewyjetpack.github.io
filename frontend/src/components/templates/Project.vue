<template>
    <div class="container">
      <div>
        <h1>
          {{ $page.strapi.projects[0].title }}
        </h1>
        <p>{{ $page.strapi.projects[0].description }}</p>
        <g-image
          :alt="$page.strapi.projects[0].title"
          :src="getStrapiMedia($page.strapi.projects[0].coverImage.url)"
        />
      </div>
    <Content :content="$page.strapi.projects[0].content" />
    </div>
    
</template>

<page-query>
query ($slug: String!) {
  strapi {
    projects(where: { slug: $slug }) {
      id
      title
      slug
      description
      categories {
        id
        title
      }
      coverImage {
        id
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
    }
  }
}
</page-query>

<script>
import Content from '~/components/molecules/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    Content,
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.projects[0]
    const image = getStrapiMedia(coverImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>