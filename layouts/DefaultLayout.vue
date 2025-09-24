<template>
    <div :class="`layout layout--${currentMode}`" ref="layout">
        <!-- Content anchored to top -->
         <div>
          <Header :currentMode="currentMode" />
          <main class="layout__content u-bm-xxl">
              <Nuxt />
          </main>

          <transition name="fade">
            <div class="shade" @click="closeShade" v-if="shadeVisible" />
          </transition>
          <Lightbox :args="lightboxArgs" v-if="lightboxVisible" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/molecules/Header'
import Footer from '~/components/molecules/Footer'
import Lightbox from "~/components/molecules/Lightbox";


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
    methods: {
      closeLightbox() {
        this.$nuxt.$emit("lightbox:close", false);
        this.shadeVisible = false;
        this.lightboxVisible = false;
        this.lightboxArgs = {};
      },
      closeShade() {
        this.closeLightbox();
      },
      openLightbox(args) {
        this.shadeVisible = true;
        this.lightboxVisible = true;
        this.lightboxArgs = args;
      }
    },
    components: {
        Header,
        Footer,
        Lightbox
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
  justify-content: space-between;

  .shade {
    position: fixed;
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