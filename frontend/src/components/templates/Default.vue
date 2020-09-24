<template>
  <div 
    :class="`layout layout--${currentMode}`"
    ref="layout"
  >
    <!-- Content anchored to top -->
    <Header :currentMode="currentMode" />
    
    <main class="layout__content">
      <slot />
    </main>
    <!-- Content anchored to bottom -->
    <Footer />
  </div>
</template>

<static-query>
query {
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
import Header from '~/components/molecules/Header'
import Footer from '~/components/molecules/Footer'
import { getStrapiMedia } from '~/utils/medias'
import { EventBus } from '@/App'

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentMode: 'init'
    }
  },
  mounted() {
    const layout = this.$refs.layout;
    if (layout.classList.contains('layout--init')) {
      const initMode = getComputedStyle(layout).getPropertyValue('--mode');
      console.log(initMode);
      this.currentMode = initMode;
    }
    EventBus.$on('updatemode', (mode) => { this.currentMode = mode });
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

<style lang="scss" scoped>
    @mixin dark {
        --mode:dark;
        --c-bg:              #{$carbon};
        --c-hbg:             #{$coral};
        --c-txt:             #{$midrange};
        --c-h1:              #{$crest};
        --c-h2:              #{$crest};
        --c-sh:              #{$horizon};
        --c-h0:              #{$slate_2};
        --c-link:            #{$coral};
        --c-linkh:           #{$coral};
        --c-fine:            #{$slate_2};
    }

    @mixin light {
        --mode:light;
        --c-bg:              #{$crest};
        --c-hbg:             #{$coral};
        --c-txt:             #{$carbon};
        --c-h1:              #{$carbon};
        --c-h2:              #{$carbon};
        --c-sh:              #{$slate_1};
        --c-h0:              #{$slate_1};
        --c-link:            #{$coral};
        --c-linkh:           #{$coral};
        --c-fine:            #{$slate_1};
    }

  .layout {
    background: var(--c-bg);
    font-family: $body-font;
    font-size: $txt_s;
    line-height: 1.6;
    color: var(--c-txt);
    font-weight: 300;
    transition: all 0.5s;

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
