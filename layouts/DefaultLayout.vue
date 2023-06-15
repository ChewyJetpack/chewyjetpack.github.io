<template>
    <div :class="`layout layout--${currentMode}`" ref="layout">
        <!-- Content anchored to top -->
        <Header :currentMode="currentMode" />
        <main class="layout__content u-bm-xxl">
            <Nuxt />
        </main>

        <!-- <transition name="fade">
            <div class="shade" @click="closeShade" v-if="shadeVisible" />
        </transition> -->
    
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/molecules/Header'
import Footer from '~/components/molecules/Footer'

export default {
    name: 'DefaultLayout',
    data() {
        return {
            currentMode: "init",
            shadeVisible: false,
            lightboxVisible: false,
            lightboxArgs: {}
        };
    },
    mounted() {
        // Night mode
        const layout = this.$refs.layout;

        if (layout.classList.contains("layout--init")) {
            const initMode = getComputedStyle(layout).getPropertyValue("--mode");
            this.currentMode = initMode;
        }

        this.$nuxt.$on("updatemode", mode => {
            this.currentMode = mode;
        });

        this.$nuxt.$on("lightbox:open", args => {
            this.openLightbox(args);
        });
    },
    components: {
        Header,
        Footer
    },
}
</script>

<style lang="scss">
.layout {
  background: var(--c-bg);
  transition: all 0.5s;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  .shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--c-shade-bg);
    cursor: pointer;
    z-index: 10;
    transform: translate(0, 0);

    @include breakpoint_xl {
      position: fixed;
    }
  }

  &--init {
    @include light;
    @media (prefers-color-scheme: dark) {
      @include dark;
    }
  }

  &__content {
    position: relative;
  }
}
</style>