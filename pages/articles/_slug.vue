<template>
  <Article :content="article" />
</template>

<script>
import Article from '~/components/organisms/Article';

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
    Article
  }
};
</script>