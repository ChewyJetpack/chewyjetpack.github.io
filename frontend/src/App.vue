<template>
  <div :class="`layout layout--${currentMode}`" ref="layout">
    <SlideNav>
      <!-- Content anchored to top -->
      <Header :currentMode="currentMode" />

      <main class="layout__content u-bottom-spacer-xxxl">
        <transition name="fade-in-right" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </main>
      <!-- Content anchored to bottom -->
      <Footer />

      <transition name="fade">
        <div class="shade" @click="closeShade" v-if="shadeVisible" />
      </transition>
    </SlideNav>
    <Lightbox :args="lightboxArgs" v-if="lightboxVisible" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
  strapi {
    global {
      siteName
      siteLanguage
      favicon {
        url
      }
    }
  }
}
</static-query>

<script>
import Vue from "vue";
import Header from "~/components/molecules/Header";
import Lightbox from "~/components/molecules/Lightbox";
import Footer from "~/components/organisms/Footer";
import SlideNav from "~/components/organisms/SlideNav";

export const EventBus = new Vue();

export default {
  components: {
    Header,
    Footer,
    SlideNav,
    Lightbox
  },
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

    EventBus.$on("updatemode", mode => {
      this.currentMode = mode;
    });

    EventBus.$on("slidenav", status => {
      this.shadeVisible = status;
    });

    EventBus.$on("lightbox:open", args => {
      this.openLightbox(args);
    });
  },
  methods: {
    closeNav() {
      EventBus.$emit("slidenav", false);
    },
    closeLightbox() {
      EventBus.$emit("lightbox:close", false);
      this.shadeVisible = false;
      this.lightboxVisible = false;
      this.lightboxArgs = {};
    },
    closeShade() {
      this.closeNav();
      this.closeLightbox();
    },
    openLightbox(args) {
      this.shadeVisible = true;
      this.lightboxVisible = true;
      this.lightboxArgs = args;
    }
  },
  watch: {
    $route() {
      this.closeNav();
    }
  },
  metaInfo() {
    const globalConfig = this.$static.strapi.global;
    return {
      titleTemplate: `%s | ${globalConfig.siteName}`,
      htmlAttrs: {
        lang: globalConfig.siteLanguage
      },
      link: [
        {
          rel: "icon",
          href: globalConfig.favicon.url
        }
      ]
    };
  }
};
</script>

<style lang="scss">
// Global styles
@import "@/assets/scss/global.scss";
</style>

<style lang="scss">
.layout {
  background: var(--c-bg);
  transition: all 0.5s;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;

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
