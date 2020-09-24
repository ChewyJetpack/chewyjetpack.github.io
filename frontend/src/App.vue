<template>
  <div 
    :class="`layout layout--${currentMode}`"
    ref="layout"
  >
    <!-- Content anchored to top -->
    <Header :currentMode="currentMode" :lowKeyHeader="lowKeyHeader" />
    
    <main class="layout__content u-bottom-spacer-xxxl">
        <router-view />
    </main>
    <!-- Content anchored to bottom -->
    <Footer />
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
import Vue from 'vue';
import Header from '~/components/molecules/Header'
import Footer from '~/components/molecules/Footer'
import { getStrapiMedia } from '~/utils/medias'

export const EventBus = new Vue();

export default {
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          lowKeyHeader: false,
          currentMode: 'init'
      }
  },
  mounted() {

      // Night mode
      const layout = this.$refs.layout;

      if (layout.classList.contains('layout--init')) {
        const initMode = getComputedStyle(layout).getPropertyValue('--mode');
        console.log(initMode);
        this.currentMode = initMode;
      }

      EventBus.$on('updatemode', (mode) => { this.currentMode = mode });

      // Header scroll handler
      window.addEventListener('scroll', _.throttle(this.headerResize, 500));
  },
  methods: {
      headerResize() {
          const position = window.scrollY;
          position > 0 ? this.lowKeyHeader = true : this.lowKeyHeader = false;
      }
  },
  metaInfo() {
    const globalConfig = this.$static.strapi.global
    return {
      titleTemplate: `%s | ${globalConfig.siteName}`,
      htmlAttrs: {
        lang: globalConfig.siteLanguage,
      },
      link: [
        {
          rel: 'icon',
          href: getStrapiMedia(globalConfig.favicon.url),
        },
      ],
    }
  }
}
</script>

<style lang="scss">
    // Global styles
    @import '@/assets/scss/global.scss';
</style>

<style lang="scss" scoped>
  .layout {
    background: var(--c-bg);
    font-family: $body-font;
    font-size: $txt_s;
    line-height: 1.6;
    color: var(--c-txt);
    font-weight: 300;
    transition: all 0.5s;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: $unit_9001;

    &--light {
      @include light;
    }

    &--dark {
      @include dark;
    }

    &--init {
      @include light;
      @media (prefers-color-scheme: dark) {
        @include dark;
      }
    }

    &__content {
      position: relative;
      z-index: 1;
    }

}
</style>
