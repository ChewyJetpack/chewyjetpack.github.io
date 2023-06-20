<template>
  <Article :content="article" :tags="tags" />
</template>

<script>
import Article from '~/components/organisms/Article';

export default {
  name: 'ArticlePage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params, error }) {
    let article;
    try {
      article = await $content("articles/posts", params.slug).fetch();
    } catch (e) {
      error({ message: "Article not found" });
    }
    // get all tags
    const tags = await $content('tags').fetch()

    return {
      article, tags
    };
  },
  components: {
    Article
  }
};
</script>