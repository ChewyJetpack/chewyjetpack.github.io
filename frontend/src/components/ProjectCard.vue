<template>
  <div class="project-card">
    <g-link
      :to="`${project.categories[0].slug}/${project.slug}`"
      class="project-card__img-link"
    >
      <g-image
        :alt="project.title"
        :src="getStrapiMedia(project.coverImage.url)"
        class="project-card__img"
      />
    </g-link>
    <div class="project-card__content u-top-spacer-xs">
      <h2 class="project-card__heading u-bottom-spacer-s">
        <g-link :to="`${project.categories[0].slug}/${project.slug}`">
          {{ project.title }}
        </g-link>
      </h2>
      <p class="project-card__description">
        {{ project.description }}
      </p>
    </div>
    <g-link
      :to="`${project.categories[0].slug}/${project.slug}`"
      :title="project.title"
      class="project-card__link"
    >
      View project
    </g-link>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['project'],
  methods: {
    getStrapiMedia,
  }
}
</script>

<style lang="scss" scoped>
  .project-card {
    &__heading {
      a {
        color: $c_h2;

        &:hover, &:focus {
          color: $c_link;
        }
      }
    }
  }
</style>