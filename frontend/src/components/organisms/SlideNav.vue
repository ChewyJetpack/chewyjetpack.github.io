<template>
    <div :class="{ 'slide-nav': true, 'slide-nav--open': open }">
        <div class="slide-nav__slot">
            <slot />
        </div>
        <nav class="slide-nav__menu">
            <IconBtn icon="times" :callback="closeNav" invert />
            <NavMenu navFormat="slide" />
            <FooterMenu navFormat="slide" />
        </nav>
    </div>
</template>

<script>
import NavMenu from '~/components/molecules/NavMenu'
import IconBtn from '~/components/atoms/IconBtn'
import FooterMenu from '~/components/molecules/FooterMenu'
import { EventBus } from '@/App'

export default {
    components: {
        NavMenu,
        FooterMenu,
        IconBtn
    },
    data() {
        return {
            open: false
        }
    },
    mounted(){
        EventBus.$on('slidenav', (status) => { this.open = status })
    },
    methods: {
        closeNav() {
            EventBus.$emit('slidenav', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide-nav {
        --nav-width: 300px;

        &__menu {
            position: fixed;
            background: var(--c-link);
            top: 0;
            right: 0;
            height: 100%;
            width: var(--nav-width);
            z-index: 10;
            padding: $unit_l;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            transform: translateX(100%);
        }

        &__menu, &__slot {
            transition: transform 0.6s;
        }

        &--open {
            .slide-nav {
                &__menu {
                    transform: translateX(0);
                }

                &__slot {
                    transform: translateX(calc(-1 * var(--nav-width)));
                }
            }
        }
    }
</style>