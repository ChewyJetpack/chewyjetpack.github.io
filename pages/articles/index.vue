<template>
  <div class="articles">
    <HeadingStrip :heading="articlesPage.title" shape="hexagon"/>
    <div class="wrap articles__content">
        <nuxt-content :document="articlesPage" />
    </div>
    <div class="wrap u-tm-xxl">
      <ArticleList 
        :articles="articles"
        :tags="tags"
      />
    </div>
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'
import HeadingStrip from '~/components/molecules/HeadingStrip'

export default {
  name: 'ArticlesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content }) {
    const articlesPage = await $content('articles/articles').fetch()
    const articles = await $content('articles/posts').fetch()
    const tags = await $content('tags').fetch()

    return {
      articles, tags, articlesPage
    };
  },
  components: {
    ArticleList,
    HeadingStrip
  }
}
</script>

<style lang="scss" scoped>
  .articles {
    @extend .u-bm-xxl;

    &__content {
      @extend .u-tm-xxl;
      @extend .u-bm-xxl;
    }
  }
</style>
