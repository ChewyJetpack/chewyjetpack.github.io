<template>
  <div class="articles">
    <HeadingStrip heading="Cultural Entropy" shape="hexagon"/>
    <div class="wrap u-tm-xxl">
      <h3>Articles related to:</h3>
      <h1 class="u-bm-xxl">{{tag.title}}</h1>
      <ArticleList 
        :articles="filteredArticles(articles, tag.title)"
        :tags="tags"
      />
    </div>
  </div>
</template>

<script>
import HeadingStrip from '~/components/molecules/HeadingStrip'
import ArticleList from '~/components/organisms/ArticleList'

export default {
  name: 'TagPage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params, error }) {
    // get current tag by page slug
    let tag;
    try {
      tag = await $content('tags', params.slug).fetch();
    } catch (e) {
      error({ message: 'Tag not found' });
    }
    // get all articles
    const articles = await $content('articles/posts').fetch()
    // get all tags
    const tags = await $content('tags').fetch()

    return {
      articles, tag, tags
    };
  },
  methods: {
    filteredArticles: function(articles, tag) {
      let arr = [];
      for (let i = 0; i < articles.length; i++) {
        for (let x = 0; x < articles[i].tags.length; x++) {
          if (articles[i].tags[x] == tag) {
            arr.push(articles[i]);
          }
        }
      }
      return arr;
    }
  },
  components: {
    ArticleList,
    HeadingStrip
  }
}
</script>
