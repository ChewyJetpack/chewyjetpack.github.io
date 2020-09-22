<template>
  <Layout>
    <div class="container">
      <div>
        <h1>
          {{ $page.strapi.categories[0].title }}
        </h1>
        <p>{{ $page.strapi.categories[0].description }}</p>
      </div>
    </div>
    <Content :content="$page.strapi.categories[0].content" />
  </Layout>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    categories(where: { slug: $slug }) {
      id
      title
      slug
      description
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
import Content from '~/components/Content'
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