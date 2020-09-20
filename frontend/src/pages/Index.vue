<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.strapi.home.title }}</h1>
      <h2>{{ $page.strapi.home.subheading }}</h2>
      <div>
        <RichText :data="{ content: $page.strapi.home.bio }" />
      </div>
      <h2>
        My Work
      </h2>
    </div>
    <!-- List of project preview cards -->
    <div>
      <ProjectCard
        v-for="project in $page.strapi.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      subheading
      bio
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
    # List projects
    projects(sort: "date:desc") {
      title
      slug
      description
      categories {
        id
        title
      }
      coverImage {
        id
        url
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/ProjectCard'
import RichText from '~/components/RichText'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProjectCard,
    RichText,
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