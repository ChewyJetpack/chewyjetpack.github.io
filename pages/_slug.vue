<template>
  <div>
    <Nav />
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
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