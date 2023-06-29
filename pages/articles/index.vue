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
  head() {
    return {
      title: 'Emil Smith | Articles',
      meta: [
        {
          hid: 'articlesdescription',
          name: 'description',
          content: "As an e-musician, tech nerd, design chad, AI enthusiast/opponent, Miles Dyson fanboy, and neuro-piquant all-trades jack, there’s a lot for me to keep track of. This is a captain’s log of my adventures through various different worlds."
        }
      ],
    }
  },
  name: 'ArticlesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content }) {
    const articlesPage = await $content('articles/articles').fetch()
    const articles = await $content('articles/posts').sortBy('slug', 'desc').fetch()
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
