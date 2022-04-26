<template>
  <div class="wrap">
    <h1>Articles</h1>
    <ArticleList 
      :articles="articles"
    />
  </div>
</template>

<script>

import ArticleList from '~/components/organisms/ArticleList'

export default {
  name: 'ArticlesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles
    };
  },
  components: {
    ArticleList
  }
}
</script>
