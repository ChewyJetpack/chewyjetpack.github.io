<template>
  <div class="page">
    <PostCard
      :content="$page.strapi.projects[0]"
      type="project"
      img="large"
      fullPost
    />
  </div>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    projects(where: { slug: $slug }) {
      id
      title
      slug
      date
      description
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
import PostCard from "~/components/organisms/PostCard";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    PostCard
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.projects[0];
    const image = coverImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>
