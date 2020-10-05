<template>
<div class="page u-top-spacer-xl">
  <div class="grid">
    <div class="grid__a-d">
      <h1 class="u-bottom-spacer-s">
          <g-link to="/blog" class="u-c-accent-2">
            <font-awesome icon="arrow-left" /> Blog
          </g-link>
      </h1>
      <h2 class="subheading u-bottom-spacer-xs">Posts about: {{ $page.strapi.tags[0].name }}</h2>
    </div>
    <!-- List of project preview cards -->

    <div class="grid__a-f u-top-spacer-xl">
        <PostCard
          v-for="(post, index) in $page.strapi.tags[0].posts"
          :key="post.id"
          :i="index"
          :content="post"
            type="post"
        />
    </div>
  </div>
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
  
</style>