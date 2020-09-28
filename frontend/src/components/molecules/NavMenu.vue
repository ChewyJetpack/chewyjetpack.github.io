<template>
    <ul :class="{'nav-list': true, 'nav-list--mini': navFormat === 'mini', 'nav-list--slide': navFormat === 'slide' }">
        <li :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__active': currentRouteName == '/'}" to="/">Home</g-link>
        </li>
        <li v-for="category in $static.strapi.categories" :key="category.id" :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__active': currentRouteName == `/${category.slug}/`}" :to="`/${category.slug}/`">{{ category.title }}</g-link>
        </li>
        <li :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__active': currentRouteName == '/blog/'}" to="/blog/">Blog</g-link>
        </li>
    </ul>
</template>

<script>
import { EventBus } from '@/App'

export default {
    props: {
        navFormat: String
    },
    computed: {
        currentRouteName() {
            return this.$route.path;
        }
    }
}
</script>

<static-query>
query {
  strapi {
    categories {
      title
      slug
      id
    }
  }
}
</static-query>

<style lang="scss" scoped>
    .nav-list {
        display: none;

        @include breakpoint_m {
          display: flex;
        }

        &__item {
            display: flex;
            align-items: flex-end;
            font-weight: 700;
            font-size: $txt_s;
            line-height: 1;
        }

        &--mini {
            .nav-list {
                &__item {
                    font-size: $txt_s;
                    line-height: 1;
                }
            }
        }

        &--slide {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: flex-end;

            .nav-list {

                &__link {
                    text-align: right;
                    font-size: $txt_m;
                    line-height: 1;
                    color: var(--c-bg);
                }

                &__active {
                    color: var(--c-h1);
                }
            }
        }

    }

</style>