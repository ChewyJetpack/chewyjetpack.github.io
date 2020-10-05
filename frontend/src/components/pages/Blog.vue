<template>
    <div class="page">
        <div class="grid">
            <div class="grid__a-d">
                <h1 class="u-top-spacer-xxl">{{ $page.strapi.blog.title }}</h1>
            </div>

            <!-- List of project preview cards -->
            <div class="grid__a-f u-top-spacer-xl">
                <PostCard
                    v-for="(post, index) in $page.strapi.posts"
                    :key="post.id"
                    :content="post"
                    :i="index"
                    type="post"
                    img="large"
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
    # Get blog data
    blog {
      title
      subheading
      description
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
    # List posts
    posts(sort: "date:desc") {
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
import Content from '~/components/molecules/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    PostCard,
    Content,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.blog.seo
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>