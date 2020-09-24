<template>
  <div class="project-card">
    <g-link
      :to="`${project.categories[0].slug}/${project.slug}`"
      :class="{ 'project-card__img': true, 'hovered': hoverToggle }"
      ref="img_link"
      @mouseover.native="hoverAll"
      @mouseleave.native="leaveAll"
    >
      <span class="project-card__img-crop">
        <g-image
          :alt="project.title"
          :src="getStrapiMedia(project.coverImage.formats.small.url)"
          class="project-card__img-src"
        />
      </span>
    </g-link>
    <div class="project-card__content u-top-spacer-s">
      <h2 class="project-card__heading u-bottom-spacer-s">
        <g-link 
          :to="`${project.categories[0].slug}/${project.slug}`" 
          ref="h-_ink"
          :class="{ 'hovered': hoverToggle }"
          @mouseover.native="hoverAll"
          @mouseleave.native="leaveAll"
        >
          {{ project.title }}
        </g-link>
      </h2>
      <p class="project-card__description">
        {{ project.description | truncate(130) }}
      </p>
    </div>
    <g-link
      :to="`${project.categories[0].slug}/${project.slug}`"
      :title="project.title"
      :class="{ 'project-card__link u-top-spacer-s u-hover-anim': true, 'hovered': hoverToggle }"
      ref="cta_link"
      @mouseover.native="hoverAll"
      @mouseleave.native="leaveAll"
    >
      View project <font-awesome icon="arrow-right" class="u-left-spacer-xxs" />
    </g-link>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['project'],
  data() {
    return {
      hoverToggle: false
    }
  },
  methods: {
    getStrapiMedia,
    hoverAll() {
      this.hoverToggle = true
    },
    leaveAll() {
      this.hoverToggle = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-card {
    &__heading {
      a {
        color: var(--c-h2);

        &:hover, &:focus, &.hovered {
          color: var(--c-link);
        }
      }
    }

    &__img {
      padding-bottom: 50%;
      overflow: hidden;
      display: block;
      position: relative;
      transform: scale(1);
      transition: transform 0.2s;

      &-crop {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: block;
        transform: translate(-50%, -50%) scale(1.01);
        transition: transform 0.2s;
      }

      &-src {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover, &.hovered {
        background: var(--c-link);

        .project-card__img-crop {
          transform: translate(-50%, -54%) scale(1.01);
        }
      }
    }

    &__description, &__link {
      font-size: $txt_xs;
    }

    &__link {
      svg {
        transform: translate(0);
        transition: all 0.2s;
      }

      &:hover, &.hovered {
        svg {
          transform: translateX($unit_xxs);
        }
      }
    }
  }
</style>