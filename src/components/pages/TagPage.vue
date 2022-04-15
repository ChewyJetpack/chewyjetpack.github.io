<template>
  <ListingPage
    :title="$page.strapi.tags[0].name"
    :items="$page.strapi.tags[0].posts"
    type="post"
    back-to="/blog"
    :back-label="`All posts`"
  />
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
import ListingPage from "~/components/templates/ListingPage";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    ListingPage
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.blog.seo;
    const image = shareImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
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
