<template>
  <div 
    :class="`layout layout--${currentMode}`"
    ref="layout"
  >
    <SlideNav>
      <!-- Content anchored to top -->
      <transition name="slide">
        <Header :currentMode="currentMode" navFormat="mini" v-if="lowKeyHeader" />
      </transition>
      <Header :currentMode="currentMode" />
      
      <main class="layout__content u-bottom-spacer-xxxl">
        <transition name="fade-in-right" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </main>
      <!-- Content anchored to bottom -->
      <Footer />

      <transition name="fade">
        <div class="shade" @click="closeNav" v-if="shadeVisible" />
      </transition>
    </SlideNav>
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
import Footer from '~/components/organisms/Footer'
import SlideNav from '~/components/organisms/SlideNav'
import { getStrapiMedia } from '~/utils/medias'

export const EventBus = new Vue();

export default {
  components: {
    Header,
    Footer,
    SlideNav
  },
  data() {
      return {
          lowKeyHeader: false,
          currentMode: 'init',
          shadeVisible: false
      }
  },
  mounted() {

      // Night mode
      const layout = this.$refs.layout;

      if (layout.classList.contains('layout--init')) {
        const initMode = getComputedStyle(layout).getPropertyValue('--mode');
        this.currentMode = initMode;
      }

      EventBus.$on('updatemode', (mode) => { this.currentMode = mode });
      EventBus.$on('slidenav', (status) => { this.shadeVisible = status });

      // Header scroll handler
      window.addEventListener('scroll', _.throttle(this.headerResize, 10));
  },
  methods: {
      headerResize() {
          const position = window.scrollY;
          position > 800 ? this.lowKeyHeader = true : this.lowKeyHeader = false;
      },
      closeNav() {
        EventBus.$emit('slidenav', false);
      }
  },
  watch:{
    $route (to, from){
        this.closeNav();
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
    transition: all 0.5s;
    width: 100%;
    display: flex;
    flex-direction: column;
    //padding-top: $unit_9001;

    .shade {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($carbon, 0.8);
      cursor: pointer;
      z-index: 10;
    }

    &--light {
      @include light;

      .shade {
        background: rgba($crest, 0.7);
      }
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
