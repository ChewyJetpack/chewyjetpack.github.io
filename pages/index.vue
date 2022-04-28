<template>
  <div class="wrap">
    <h1>{{home.title}}</h1>
    <section class="homepage u-bottom-spacer-xxl">
      <img class="homepage__avatar" :src="home.avatar" alt="home.title"/>
      <nuxt-content :document="home" />
    </section>
    <h1>Latest Articles</h1>
    <ArticleList 
      :articles="articles"
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

    return {
      home, articles
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
  grid-template-columns: 1fr 3fr;
  grid-gap: $unit_m;
}
</style>