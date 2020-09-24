<template>
    <div class="grid">
      <div class="grid__centre-left">
        <h1>
          {{ $page.strapi.categories[0].heading }}
        </h1>
        <p>{{ $page.strapi.categories[0].description }}</p>
      </div>
      <Content :content="$page.strapi.categories[0].content" />
    </div>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    categories(where: { slug: $slug }) {
      id
      title
      slug
      description
      heading
      projects {
        id
        title
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
      seo {
        title
        description
        shareImage {
          id
          url
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
    const { title, description, shareImage } = this.$page.strapi.categories[0].seo;
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>