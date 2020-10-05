<template>
  <div class="page">
    <div class="grid">
        <div class="grid__a-d">
            <h1 class="u-top-spacer-xxl">
                <g-link to="/blog">
                    Blog    
                </g-link>
            </h1>
            <h2>Posts about: {{ $page.strapi.tags[0].name }}</h2>
        </div>
        
        <div class="grid__two-thirds">
        <Content :content="$page.strapi.blog.content" />
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