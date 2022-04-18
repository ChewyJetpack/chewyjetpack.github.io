<template>
  <div>
    <Nav/>  
    <h1>Blog</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'hero', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      posts
    }
  },
  components: {
    Nav
  },
};
