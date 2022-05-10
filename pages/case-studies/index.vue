<template>
  <div class="wrap u-tm-xxl">
    <h1>Case Studies</h1>
    <ArticleList 
      :articles="caseStudies"
      :caseStudies="true"
    />
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'

export default {
  name: 'caseStudiesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params }) {
    const caseStudies = await $content('case-studies').fetch()

    return {
      caseStudies
    };
  },
  components: {
    ArticleList
  }
}
</script>
