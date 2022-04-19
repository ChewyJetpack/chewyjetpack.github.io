<template>
  <div>
    <Nav />
    <img :src="post.hero" :alt="post.title">
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'PostPage',
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("posts", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
  components: {
    Nav
  }
};
</script>