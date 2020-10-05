<template>
  <article :class="[ 'post grid grid--inner u-top-spacer-xxxl', accents]">

    <!-- feed image -->
    <g-link
        v-if="!fullPost"
        :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`"
        :class="[{ 'hovered': hoverToggle }, 'post__img grid__a-b']"
        ref="img_link"
        @mouseover.native="hoverAll"
        @mouseleave.native="leaveAll"
        :style="`background: url(${content.coverImage.formats ? getStrapiMedia(content.coverImage.formats.large.url) : getStrapiMedia(content.coverImage.url)}) center center / cover no-repeat`"
    />

    <!-- post page image -->
    <div 
        v-if="fullPost"
        class="post__full-img grid__a-f"
    >
        <img :src="content.coverImage.formats ? getStrapiMedia(content.coverImage.formats.large.url) : getStrapiMedia(content.coverImage.url)" :alt="`${content.title} by Emil Smith`">
    </div>

    <div :class="{'post__content': true, 'grid__c-f': !fullPost, 'grid__b-e': fullPost, 'u-top-spacer-s': fullPost }">
      <h2 class="post__heading">
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
        <p v-if="type == 'post'" class="post__date u-top-spacer-xs">
            <font-awesome :icon="['far', 'calendar']" class="u-right-spacer-xxs" />
            {{ content.date | moment("MMM Do, YYYY") }}
        </p>
        <p 
            v-if="fullPost"
            class="post__full-description"
        >
            {{ content.description }}
        </p>
        <p 
            v-else
            class="post__description u-top-spacer-s"
        >
            {{ content.description | truncate(150) }}
        </p>

        <Content v-if="fullPost" :content="content.content" class="u-top-spacer-xxl" />

        <Tags 
            :tags="content.tags" 
        />

        <g-link
            v-if="!fullPost"
            :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`"
            :title="content.title"
            :class="{ 'post__link u-top-spacer-s': true, 'hovered': hoverToggle }"
            ref="cta_link"
            @mouseover.native="hoverAll"
            @mouseleave.native="leaveAll"
        >
            {{ type == 'post' ? 'Read post' : 'View project' }}
            <font-awesome icon="arrow-right" class="u-left-spacer-xxs" />
        </g-link>
    </div>
  </article>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'
import Content from '~/components/molecules/Content'
import Tags from '~/components/atoms/Tags'

export default {
  props: {
        content: {
            type: Object
        }, 
        cat: {
            type: String
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
        Tags
    },
    data() {
        return {
        hoverToggle: false,
        accents: ''
        }
    },
    mounted() {
        if (this.i % 2 == 0) {
            this.accents = this.chooseThemeElems()   
        }
    },
    methods: {
        getStrapiMedia,
        hoverAll() {
        this.hoverToggle = true
        },
        leaveAll() {
        this.hoverToggle = false
        },
        getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
        },
        chooseThemeElems() {
            const alignment = ['left', 'right'];
            const vals = [
                (this.getRandomInt(4) + 1), // corner accent
                (this.getRandomInt(2) + 3), // triangle accent
                alignment[this.getRandomInt(2)] // alignment
            ]
            const result = `u-tri-${vals[2]}-accent-${vals[1].toString()} u-tri-${vals[2]}-full u-cnr-${vals[2]}-accent-${vals[0].toString()}`;
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>
  .post {
      align-items: start;
      position: relative;
      z-index: 1;

      &:first-child {
          margin: 0;
      }

    &__heading {
        font-size: $txt_l;
    }
        
    &__date {
        font-size: $txt_xs;
        color: var(--c-main-alt);
    }

    &__full-description {
        font-size: $txt_xs;
    }

    &__img {
      padding-bottom: 75%;
      overflow: hidden;
      display: block;
      position: relative;
      border-radius: $unit_xs;

        &:after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            height: $unit_xs;
            background: var(--c-accent-4);
            width: 100%;
            transform: translateY(100%);
            transition: transform 0.2s;
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
        color: var(--c-accent-2);
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