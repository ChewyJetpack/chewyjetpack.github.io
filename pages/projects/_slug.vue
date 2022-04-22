<template>
  <div>
    <Nav />
    <img :src="project.hero" :alt="project.title">
    <h1>{{ project.title }}</h1>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'ProjectPage',
  async asyncData({ $content, params, error }) {
    let project;
    try {
      project = await $content("projects", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      project,
    };
  },
  components: {
    Nav
  }
};
</script>