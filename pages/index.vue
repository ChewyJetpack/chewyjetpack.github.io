<template>
  <div class="wrap u-tm-xxl">
    <section class="homepage">
      <h1 class="homepage__heading">{{home.title}}</h1>
      <div class="homepage__content">
        <nuxt-content :document="home" />
      </div>
      <span class="homepage__avatar u-img-accent--right--1">
        <nuxt-img preset="avatar" :src="home.avatar" :alt="home.title"/>
      </span>
    </section>
    <h1>Latest Articles</h1>
    <ArticleList 
      :articles="articles"
      :tags="tags"
    />
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'

export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const home = await $content('home').fetch();
    const articles = await $content('articles').fetch();
    const tags = await $content('tags').fetch();

    return {
      home, articles, tags
    };
  },
  components: {
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  @extend .e-grid-2-1;
  @extend .u-bm-xxl;
  align-items: start;

  &__heading {
    order: 0;
    grid-column: 1 / span 2;
    margin-bottom: 0;

    @include breakpoint_m {
      margin-bottom: $unit_m;
    }
  }

  &__avatar {
    order: 1;
    max-width: 60%;

    @include breakpoint_m {
      max-width: 100%;
      order: 2;
      position: relative;
      top: $unit_l;
    }
  }

  &__content {
    order: 2;

    @include breakpoint_m {
      order: 1;
    }
  }
}

.nuxt-content-container {
  padding: $unit_s;
  @include accentContent(var(--c-accent-3), left);
  background: var(--c-bg-2);
  font-size: $txt_xs;

  @include breakpoint_m {
    font-size: $txt_s;
    padding: $unit_l;
    background: transparent;
    &:after {
      display: block;
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      height: 100%;
      width: calc(100% + (#{$unit_xxl}));
      background: var(--c-bg-2);
    }
  }

}
</style>