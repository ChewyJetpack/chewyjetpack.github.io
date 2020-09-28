<template>
    <div class="blog-page">
        <div class="grid">
            <div class="grid__two-thirds">
            <h1 class="u-bottom-spacer-s">{{ $page.strapi.blog.title }}</h1>
            <h2 class="subheading u-bottom-spacer-xs">{{ $page.strapi.blog.subheading }}</h2>
            </div>
            
            <div class="grid__two-thirds">
            <Content :content="$page.strapi.blog.description" />
            </div>
        </div>

    <!-- List of project preview cards -->

        <PostCard
            v-for="post in $page.strapi.posts"
            :key="post.id"
            :content="post"
            type="post"
            img="large"
        />
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