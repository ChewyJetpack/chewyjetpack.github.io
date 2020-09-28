<template>
  <div :class="{ 'post-card': true, 'post-card--blog grid u-bottom-spacer-l': type == 'post' }">
    <g-link
      :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`"
      :class="{ 'post-card__img': true, 'hovered': hoverToggle, 'grid__third': type == 'post' }"
      ref="img_link"
      @mouseover.native="hoverAll"
      @mouseleave.native="leaveAll"
    >
      <span class="post-card__img-crop">
        <g-image
          :alt="content.title"
          :src="getStrapiMedia(content.coverImage.formats.large.url)"
          class="post-card__img-src"
        />
      </span>
    </g-link>
    <div :class="{'post-card__content': true, 'grid__two-thirds': type == 'post', 'u-top-spacer-s': type != 'post'}">
      <h2 class="post-card__heading u-bottom-spacer-s">
        <g-link 
          :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`" 
          ref="h-_ink"
          :class="{ 'hovered': hoverToggle }"
          @mouseover.native="hoverAll"
          @mouseleave.native="leaveAll"
        >
          {{ content.title }}
        </g-link>
      </h2>
      <p v-if="type == 'post'" class="post-card__date">
        {{ content.date }}
      </p>
      <p class="post-card__description">
        {{ content.description | truncate(130) }}
      </p>
        <g-link
        :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`"
        :title="content.title"
        :class="{ 'post-card__link u-top-spacer-s': true, 'hovered': hoverToggle }"
        ref="cta_link"
        @mouseover.native="hoverAll"
        @mouseleave.native="leaveAll"
        >
        View project <font-awesome icon="arrow-right" class="u-left-spacer-xxs" />
        </g-link>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['content', 'cat', 'type'],
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
  .post-card {
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

      &-crop {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: block;
        transform: translate(-50%, -50%);

        &:after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          height: $unit_xs;
          background: var(--c-link);
          width: 100%;
          transform: translateY(100%);
          transition: transform 0.2s;
        }
      }

      &-src {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover, &.hovered {

        .post-card__img-crop {

          &:after {
            transform: translateY(0%);
          }
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