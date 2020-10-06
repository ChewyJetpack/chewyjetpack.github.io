<template>
<div class="page">
  <div class="grid">
    <div class="grid__a-d">
      <h1 class="u-bottom-spacer-s u-top-spacer-xl">
          <g-link to="/blog" class="u-c-accent-2">
            <font-awesome class="back-icon u-bottom-spacer-xxs" icon="arrow-left" /> Blog
          </g-link>
      </h1>
      <h2 class="subheading u-bottom-spacer-xs">Posts about: {{ $page.strapi.tags[0].name }}</h2>
    </div>
    </div>
    <!-- List of project preview cards -->

    <PostCard
        v-for="(post, index) in $page.strapi.tags[0].posts"
        :key="post.id"
        :i="index"
        :content="post"
        type="post"
    />
  </div>
</template>

<page-query>
query ($slug: String!) {
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
    # List posts by tag
    tags (where: { slug: $slug }) {
        name
        slug
        id
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
            coverImage {
                id
                url
                formats
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
  .back-icon {
      font-size: $txt_l;
  }
</style>