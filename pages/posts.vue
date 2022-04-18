<template>
  <div>
    <Nav/>  
    <h1>Blog</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post.slug">
          {{ post.title }}
          <img :src="post.hero" :alt="post.title">
        </NuxtLink>
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
