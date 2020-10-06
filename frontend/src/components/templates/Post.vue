<template>
    <div class="page">
        <PostCard
            :content="$page.strapi.posts[0]"
            type="post"
            img="large"
            fullPost
        />
    </div>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      date
      description
      tags {
        id
        name
        slug
      }
      coverImage {
        id
        url
        formats
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
import PostCard from '~/components/molecules/PostCard'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    PostCard,
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.posts[0]
    const image = getStrapiMedia(coverImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>