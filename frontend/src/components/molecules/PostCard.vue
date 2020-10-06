<template>
    <article :class="[ 'post', { 'u-top-spacer-xxxl': i > 0, 'u-top-spacer-xxl': i == 0 }, accents]">

        <!-- post page image -->
        <div 
            v-if="fullPost"
            class="post__full-img u-bottom-spacer-m"
            :style="`background:url(${getStrapiMedia(content.coverImage.url)}) center center / cover no-repeat;`"
        />

        <div class="grid">
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

        <div :class="{'post__content': true, 'grid__c-f': !fullPost, 'grid__b-e': fullPost, 'u-top-spacer-s': fullPost }">
            <h2 :class="[ 'post__heading', { 'u-bottom-spacer-s': fullPost }]">
                <g-link 
                v-if="!fullPost"
                :to="type === 'post' ? `blog/${content.slug}` : `${cat}/${content.slug}`" 
                ref="h-_ink"
                :class="{ 'hovered': hoverToggle }"
                @mouseover.native="hoverAll"
                @mouseleave.native="leaveAll"
                >
                    {{ content.title }}
                </g-link>
                <span v-else>
                    {{ content.title }}
                </span>
            </h2>
            <p v-if="content.date" :class="[ 'post__date', { 'post__date--full': fullPost }]">
                <font-awesome :icon="type == 'post' ? ['far', 'calendar'] : 'history'" class="u-right-spacer-xxs" />
                <span v-if="type == 'post'">{{ content.date | moment("MMM Do, YYYY") }}</span>
                <span v-else>From: {{ content.date | moment("YYYY") }}</span>

                <span class="post_read-time u-left-spacer-m">
                    <font-awesome icon="hourglass-half" class="u-right-spacer-xxs" />
                    {{ $readingTime(content.content).text }}
                </span>
            </p>
            <p 
                v-if="!fullPost"
                class="post__description u-top-spacer-xs u-bottom-spacer-s"
            >
                {{ content.description | truncate(150) }}
            </p>
            <div 
                v-if="fullPost"
                class="u-top-spacer-xxl post__full-description grid__b-e u-cnr-right-accent-1 u-tri-right-accent-3 u-tri-right-full"
            >
                {{ content.description }}
            </div>

            <Content v-if="fullPost" :content="content.content" class="u-top-spacer-xxl u-bottom-spacer-xxl grid__b-e" />

            <Tags 
                v-if="type == 'post'"
                :tags="content.tags" 
                :class="{ 'u-top-spacer-xxl': fullPost }"
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
      width: 100%;

      &:first-child {
          margin: 0;
      }

    &__heading {
        font-size: $txt_l;

        span {
            @include breakpoint_xl {
                font-size: $txt_xl;
            }
        }

        a {
            display: block;
            position: relative;
            overflow: hidden;
            padding-bottom: $unit_s;

            &:after {
                position: absolute;
                content: "";
                height: $unit_xxxs;
                bottom: $unit_xxxs;
                left: 0;
                background: var(--c-main);
                width: 20%;
                transform: translateX(-100%);
                transition: transform 0.2s;
            }

            &:hover, &.hovered {
                text-decoration: none;

                &:after {
                    transform: translateX(0);
                }
            }
        }
    }
        
    &__date {
        font-size: $txt_xs;
        color: var(--c-main-alt);

        &--full {
            color: var(--c-main);
        }
    }

    &__full-description {
        font-size: $txt_xs;
        background: var(--c-accent-4);
        padding: $unit_l;

        @include breakpoint_xl {
            margin-left: -#{$unit_l};
            margin-right: -#{$unit_l};
        }
    }

    &__img {
      //padding-bottom: 75%;
      height: 100%;
      width: 100%;
      min-height:70vw;
      overflow: hidden;
      display: block;
      position: relative;
      border-radius: $unit_xs;

      @include breakpoint_m {
        min-height:30vw;
      }

      @include breakpoint_l {
        min-height:0;
        padding-bottom: 75%;
      }

        &:after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            height: $unit_xs;
            background: var(--c-accent-3);
            width: 100%;
            transform: translateY(100%);
            transition: transform 0.2s;
            z-index:2;
        }

        &:hover, &.hovered {
            &:after {
                transform: translateY(0%);
            }
        }
    }

    &__full-img {
        align-items: center;
        height: 40vh;
        max-height: 80vw;

        @include breakpoint_xl {
            height: 50vh;
        }
    }

    &__description, &__link {
      font-size: $txt_xs;
    }

    &__link {
        color: var(--c-accent-2);
        display: inline-block;

      svg {
        transform: translate(0);
        transition: all 0.2s;
      }

      &:hover, &.hovered {
          text-decoration: none;
        svg {
          transform: translateX($unit_xxs);
        }
      }
    }
  }
</style>