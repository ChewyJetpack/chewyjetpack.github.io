<template>
    <ul :class="{'nav-list': true, 'nav-list--mini': navFormat === 'mini', 'nav-list--slide': navFormat === 'slide' }">
        <li :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__link-active': currentRouteName == '/'}" to="/">Home</g-link>
        </li>
        <li :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__link-active': currentRouteName == '/projects/'}" to="/projects/">Projects</g-link>
        </li>
        <li :class="{ 'nav-list__item': true,  'u-right-spacer-m': navFormat == 'mini', 'u-right-spacer-l': navFormat == 'full', 'u-bottom-spacer-m': navFormat == 'slide' }">
            <g-link :class="{ 'u-hover-anim nav-list__link': true, 'nav-list__link-active': currentRouteName == '/blog/'}" to="/blog/">Blog</g-link>
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

<style lang="scss" scoped>
    .nav-list {
        display: none;

        @include breakpoint_l {
          display: flex;
        }

        &__item {
            @include font-heading;
            display: flex;
            align-items: flex-end;
            font-weight: 700;
            font-size: $txt_xs;
        }

        &__link {
            color: var(--c-bg);
            text-decoration: none;
            position: relative;
            padding-bottom: $unit_xxxs;

            &:focus {
                outline: none;
            }

            &:after {
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--c-accent-4);
                transform: scaleX(0);
                transition: transform 0.3s;
            }

            &-active, &:hover, &:focus {

                &:after {
                    transform: scaleX(1);
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
                    color: var(--c-sl-a);
                }
            }
        }

    }

</style>