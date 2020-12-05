<template>
  <ListingPage
    :title="$page.strapi.blog.title"
    :items="$page.strapi.posts"
    type="post"
  />
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
        slug
        id
        name
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
        ... on strapiTypes_ComponentSectionsVideoEmbed {
          url
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

<style lang="scss" scoped></style>
