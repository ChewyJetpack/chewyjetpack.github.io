<template>
  <article>
    <img :src="article.hero" :alt="article.title">
    <h1>{{ article.title }}</h1>

    <div v-for="(block, index) in article.contentBlocks" :key="index">
      <div v-if="block.content" v-html="$md.render(block.content)"/>
      <div v-if="block.youtube" v-html="block.youtube"/>
      <ArticleImages v-if="block.images" :images="block.images" />
    </div>
  </article>
</template>

<script>
import ArticleImages from '~/components/organisms/ArticleImages';

export default {
  name: 'ArticlePage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params, error }) {
    let article;
    try {
      article = await $content("articles", params.slug).fetch();
    } catch (e) {
      error({ message: "Article not found" });
    }

    return {
      article,
    };
  },
  components: {
    ArticleImages
  }
};
</script>