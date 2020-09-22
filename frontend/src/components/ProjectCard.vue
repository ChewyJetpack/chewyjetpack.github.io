<template>
  <div>
    <g-link
      :to="`${project.categories[0].slug}/${project.slug}`"
    >
    <g-image
      :alt="project.title"
      :src="getStrapiMedia(project.coverImage.url)"
    />
    </g-link>
    <div>
      <div>
        <g-link :to="`${project.categories[0].slug}/${project.slug}`">
          <h3>
            {{ project.title }}
          </h3>
        </g-link>
        <div>
          <div
            v-for="category in project.categories"
            :key="category.id"
          >
            {{ category.title }}
          </div>
        </div>
        <p>
          {{ project.description }}
        </p>
      </div>
      <g-link
        :to="`${project.categories[0].slug}/${project.slug}`"
        :title="project.title"
      >
        View project 👉
      </g-link>
    </div>
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