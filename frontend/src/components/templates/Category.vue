<template>
    <div class="page u-top-spacer-xl">
      <div class="grid">
        <div class="grid__a-d">
            <h1 v-if="$page.strapi.categories[0].heading">
              {{ $page.strapi.categories[0].heading }}
            </h1>
            <p v-if="$page.strapi.categories[0].description">{{ $page.strapi.categories[0].description }}</p>
            <Content v-if="$page.strapi.categories[0].content" :content="$page.strapi.categories[0].content" />
        </div>
      </div>

      <PostCard
        v-for="(project, index) in $page.strapi.categories[0].projects"
        :key="project.id"
        :i="index"
        :content="project"
        :cat="$page.strapi.categories[0].slug"
        type="project"
      />
    </div>
</template>

<page-query>
query ($slug: String, $catid: String) {
  strapi {
    categories(where: { slug: $slug }) {
      id
      title
      slug
      description
      heading
      projects(where: {id: $catid}) {
        slug
        id
        title
        date
        content {
          __typename
          ... on strapiTypes_ComponentSectionsRichText {
            id
            content
          }
        }
        description
        coverImage {
          url
          id
          formats
        }
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
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Content from '~/components/molecules/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'
import PostCard from '~/components/organisms/PostCard'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    Content,
    PostCard
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.categories[0].seo;
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>