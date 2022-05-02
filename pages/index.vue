<template>
  <div class="wrap u-top-spacer-xxl">
    <h1 class="u-bottom-spacer-xxl">{{home.title}}</h1>
    <section class="homepage u-bottom-spacer-xxl">
      <nuxt-content :document="home" />
      <span class="u-img-accent--right--1 u-top-spacer-l">
        <nuxt-img preset="avatar" class="homepage__avatar" :src="home.avatar" :alt="home.title"/>
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: $unit_m;
  align-items: start;
}

.nuxt-content-container {
  padding: $unit_l;
  position: relative;

  &:before {
    box-shadow: -#{$unit_xs} $unit_xs var(--c-accent-3);
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 60%;
  }

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
</style>