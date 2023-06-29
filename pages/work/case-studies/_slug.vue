<template>
  <Article :content="caseStudy" :caseStudy="true" />
</template>

<script>
import Article from '~/components/organisms/Article';

export default {
  name: 'CaseStudyPage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params, error }) {
    let caseStudy;
    try {
      caseStudy = await $content("work/case-studies", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Case Study not found" });
    }

    return {
      caseStudy,
    };
  },
  components: {
    Article
  },
  head() {
    return {
      title: 'Emil Smith | ' + this.caseStudy.title,
      meta: [
        {
          hid: this.caseStudy.description,
          name: 'description',
          content: this.caseStudy.description
        },
        {
          hid: this.caseStudy.title + ': img',
          name: 'og:image',
          content: 'https://emilsmith.pro' + this.caseStudy.hero
        }
      ],
    }
  },
};
</script>