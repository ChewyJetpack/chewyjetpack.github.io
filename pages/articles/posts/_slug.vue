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
  },
  head() {
    return {
      title: this.article.title + ' | Emil Smith',
      meta: [
        {
          hid: this.article.description,
          name: 'description',
          content: this.article.description
        },
        { 
          hid: 'og-title', 
          property: 'og:title', 
          content: this.article.title
        },
        { 
          hid: 'og-desc', 
          property: 'og:description', 
          content: this.article.description 
        },
        {
          hid: this.article.title + ': img',
          name: 'og:image',
          content: 'https://emilsmith.pro' + this.article.hero
        },
        { hid: 'og-image', property: 'og:image',
          content: 'https://emilsmith.pro' + this.article.hero
        },
        { hid: 'twitter-image', property: 'twitter:image',
          content: 'https://emilsmith.pro' + this.article.hero
        },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
};
</script>