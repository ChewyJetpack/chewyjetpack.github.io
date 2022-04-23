<template>
  <div>
    <Nav />
    <img :src="caseStudy.hero" :alt="caseStudy.title">
    <h1>{{ caseStudy.title }}</h1>
    <nuxt-content :document="caseStudy" />
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'CaseStudyPage',
  async asyncData({ $content, params, error }) {
    let caseStudy;
    try {
      caseStudy = await $content("case-studies", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Case Study not found" });
    }

    return {
      caseStudy,
    };
  },
  components: {
    Nav
  }
};
</script>