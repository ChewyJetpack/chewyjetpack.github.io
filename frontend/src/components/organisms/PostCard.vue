<template>
  <article
    :class="[
      'post',
      'u-top-spacer-xxxl',
      { 'post--full': fullPost, 'post--project': type == 'project' }
    ]"
  >
    <!-- post page image -->
    <div
      v-if="fullPost"
      class="post__full-img u-bottom-spacer-m"
      :style="
        `background:url(${
          content.coverImage.url
        }) center center / cover no-repeat;`
      "
    />

    <div :class="fullPost ? 'wrap wrap--slim' : 'post__info'">
      <component
        :is="fullPost ? 'h1' : 'h2'"
        :class="[
          'post__heading',
          {
            'u-bottom-spacer-s': fullPost,
            'u-bottom-spacer-s': !fullPost && type != 'project'
          }
        ]"
      >
        <g-link
          v-if="!fullPost"
          :to="
            type === 'post'
              ? `blog/${content.slug}`
              : `projects/${content.slug}`
          "
          ref="h-_ink"
          :class="{ hovered: hoverToggle }"
          @mouseover.native="hoverAll"
          @mouseleave.native="leaveAll"
        >
          {{ content.title }}
        </g-link>
        <span v-else>
          {{ content.title }}
        </span>
      </component>

      <p v-if="!fullPost && type != 'project'" class="post__description">
        {{ content.description | truncate(150) }}
      </p>

      <PostMeta
        v-if="content.date"
        :reading-time="$readingTime(totalContent()).text"
        :full-Post="fullPost"
        :post-type="type"
        :date="content.date"
        :tags="content.tags"
      />

      <!-- TODO: Style this properly
			<Share v-if="fullPost" :title="`${content.title} - Emil Smith`" />      -->

      <Button
        v-if="!fullPost"
        :class="['post__link u-top-spacer-xs', { hovered: hoverToggle }]"
        :label="type == 'post' ? 'Read post' : 'View project'"
        ref="cta_link"
        :href="
          type === 'post' ? `blog/${content.slug}` : `projects/${content.slug}`
        "
        icon="arrow-right"
        @mouseover.native="hoverAll"
        @mouseleave.native="leaveAll"
      />

      <Content
        v-if="fullPost"
        :content="content.content"
        class="post__content-area u-top-spacer-xxl"
      />

      <!-- TODO: Style this properly
			<Share v-if="fullPost" :title="`${content.title} - Emil Smith`" />      -->
    </div>

    <!-- feed image -->
    <g-link
      v-if="!fullPost"
      :to="
        type === 'post' ? `blog/${content.slug}` : `projects/${content.slug}`
      "
      :class="[{ hovered: hoverToggle }, 'post__img grid__e-f']"
      ref="img_link"
      @mouseover.native="hoverAll"
      @mouseleave.native="leaveAll"
      :style="`background: url(${imgFormat()}) center center / cover no-repeat`"
    />
  </article>
</template>

<script>
import Content from "~/components/molecules/Content";
import Share from "~/components/molecules/Share";
import Button from "~/components/atoms/Button";
import PostMeta from "~/components/molecules/PostMeta";

export default {
  props: {
    content: {
      type: Object
    },
    type: {
      type: String
    },
    i: {
      type: Number
    },
    fullPost: {
      type: Boolean
    }
  },
  components: {
    Content,
    Share,
    Button,
    PostMeta
  },
  data() {
    return {
      hoverToggle: false,
      accents: "",
      currentUrl: ""
    };
  },
  mounted() {
    this.currentUrl = window.location.pathname;
  },
  methods: {
    hoverAll() {
      this.hoverToggle = true;
    },
    leaveAll() {
      this.hoverToggle = false;
    },
    totalContent() {
      let content = "";
      this.content.content.forEach(section => {
        content += section.content;
      });
      return content;
    },
    imgFormat() {
      const img = this.content.coverImage;

      if (img.formats.large) {
        return img.formats.large.url;
      } else if (img.formats.medium) {
        return img.formats.large.url;
      } else {
        return img.url;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  z-index: 1;
  display: grid;
  grid-gap: $unit_l;
  grid-template: "image" auto "info" auto / 1fr;

  @include breakpoint_l {
    grid-template: "info info image" auto / 1fr 1fr 1fr;

    &--project {
      grid-template: "info image" auto / 1fr 1fr;

      &:nth-of-type(2n + 1) {
        grid-template: "image info" auto / 1fr 1fr;
      }
    }
  }

  &:first-child {
    margin: 0;
  }

  &--full {
    display: flex;
    flex-direction: column;
  }

  &__content-area {
    grid-area: content;
  }

  &__info {
    grid-area: info;
  }

  &__heading {
    @include font-heading;

    span {
      @include breakpoint_xl {
        font-size: $txt_xl;
      }
    }

    a {
      display: block;
      transition: color 0.3s;

      &:hover,
      &.hovered {
        text-decoration: none;
        color: var(--c-accent-2);
      }
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    font-size: $txt_xxs;
    color: var(--c-main-alt);
  }

  &__date {
    display: block;

    &--full {
      color: var(--c-main);
    }
  }

  &__img {
    grid-area: image;
    height: 100%;
    width: 100%;
    min-height: 70vw;
    display: block;
    position: relative;
    transform: translateX(0);
    transition: transform 0.3s;
    z-index: 10;

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: $unit_s;
      height: 90%;
      top: 5%;
      left: 0;
      background: var(--c-accent-2);
      transform: scaleX(0) translateX(-100%);
      transition: transform 0.3s;
      transform-origin: left;
    }

    @include breakpoint_m {
      min-height: 30vw;
    }

    @include breakpoint_l {
      min-height: 0;
      padding-bottom: 75%;
    }

    &:hover,
    &.hovered {
      transform: translateX(#{$unit_s});

      &:before {
        transform: scaleX(1) translateX(-100%);
      }
    }
  }

  &__full-img {
    align-items: center;
    height: 40vh;
    max-height: 80vw;
    grid-area: image;

    @include breakpoint_xl {
      height: 50vh;
    }
  }

  &__description,
  &__link {
    font-size: $txt_xs;
  }
}
</style>
