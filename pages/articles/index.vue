<template>
  <div class="wrap u-top-spacer-xxl">
    <h1 class="u-bottom-spacer-xxl">Articles</h1>
    <ArticleList 
      :articles="articles"
      :tags="tags"
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
    const tags = await $content('tags').fetch()

    return {
      articles, tags
    };
  },
  components: {
    ArticleList
  }
}
</script>
