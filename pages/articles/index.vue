<template>
  <div>
    <Nav/>  
    <h1>Blog</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="`${article.slug}`">
          {{ article.title }}
          <img :src="article.hero" :alt="article.title">
        </NuxtLink>
        <ul>
          <li v-for="(tag, index) of article.tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink :to="`tags/${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
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
  name: 'ArticlesPage',
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles
    };
  },
  components: {
    Nav
  }
}
</script>
