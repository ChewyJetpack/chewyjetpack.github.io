<template>
  <div>
    <Nav/>  
    <h1>Blog</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="`posts/${post.slug}`">
          {{ post.title }}
          <img :src="post.hero" :alt="post.title">
        </NuxtLink>
        <ul>
          <li v-for="(tag, index) of post.tags" :key="index">
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
  name: 'BlogPage',
  async asyncData({ $content }) {
    const posts = await $content('posts').fetch()

    return {
      posts
    };
  },
  components: {
    Nav
  }
}
</script>
