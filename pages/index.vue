<template>
  <div>
    <h1>{{home.title}}</h1>
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
