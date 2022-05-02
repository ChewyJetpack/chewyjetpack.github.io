<template>
  <div class="wrap u-top-spacer-xxl">
    <h1 class="u-bottom-spacer-xxl">Case Studies</h1>
    <ul>
      <li v-for="caseStudy of caseStudies" :key="caseStudy.slug">
        <NuxtLink :to="`${caseStudy.slug}`">
          {{ caseStudy.title }}
          <img :src="caseStudy.hero" :alt="caseStudy.title">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'caseStudiesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params }) {
    const caseStudies = await $content('case-studies').fetch()

    return {
      caseStudies
    };
  },
}
</script>
