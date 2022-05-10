<template>
  <div class="wrap u-tm-xxl">
    <h1>Articles</h1>
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
