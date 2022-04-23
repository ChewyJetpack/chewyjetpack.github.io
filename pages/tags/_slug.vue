<template>
  <div>
    <Nav/>  
    <h1>{{tag.title}}</h1>
    <ul>
      <li v-for="article of filteredArticles" :key="article.slug">
        <NuxtLink :to="`articles/${article.slug}`">
          {{ article.title }}
          <img :src="article.hero" :alt="article.title">
        </NuxtLink>
        <ul>
          <li v-for="(tag, index) of article.tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <!-- TODO: abstract this regex -->
            <NuxtLink :to="`${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'TagPage',
  async asyncData({ $content, params, error }) {
    // get current tag by page slug
    let tag;
    try {
      tag = await $content('tags', params.slug).fetch();
    } catch (e) {
      error({ message: 'Tag not found' });
    }

    // get all articles
    const articles = await $content('articles').fetch()

    // filter articles by current tag
    const filteredArticles = articles.filter(function(article) {
      return article.tags.includes(tag.title)
    })

    return {
      filteredArticles, tag
    };
  },
  components: {
    Nav
  }
}
</script>
