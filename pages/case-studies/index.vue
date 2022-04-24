<template>
  <div>
    <Nav/>  
    <h1>Case Studies</h1>
    <ul>
      <li v-for="caseStudy of caseStudies" :key="caseStudy.slug">
        <NuxtLink :to="`${caseStudy.slug}`">
          {{ caseStudy.title }}
          <img :src="caseStudy.hero" :alt="caseStudy.title">
        </NuxtLink>
        {{ caseStudy.tags }}
        <ul>
          <li v-for="(tag, index) of caseStudy.tags" :key="index">
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
  name: 'caseStudysPage',
  async asyncData({ $content, params }) {
    const caseStudies = await $content('caseStudies').fetch()

    return {
      caseStudies
    };
  },
  components: {
    Nav
  }
}
</script>
