<template>
<div class="page">
  <div class="grid">
    <div class="grid__a-d">
      <h1 class="u-top-spacer-xxxl">{{ $page.strapi.tags[0].name }}</h1>
        <Button 
          class="back-btn u-top-spacer-m"
          label="Back to blog"
          href="/blog"
          icon="arrow-left"
          ico-left
        />        
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
import PostCard from '~/components/organisms/PostCard'
import Content from '~/components/molecules/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'
import Button from '~/components/atoms/Button'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    PostCard,
    Content,
    Button
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
  .back-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
</style>