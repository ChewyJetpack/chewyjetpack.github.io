<template>
  <div>
    <section class="work">
      <HeadingStrip :heading="work.title" shape="triangle"/>
      <div class="wrap work__content">
        <nuxt-content :document="work" />
        <Button
            label="Download my CV"
            href="CV.pdf"
            class="u-tm-l"
            :external="true"
        />
      </div>
      <section class="wrap work__case-studies">
        <h2>Case Studies</h2>
        <ArticleList 
          :articles="caseStudies"
          :caseStudies="true"
        />
      </section>
    </section>
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'
import HeadingStrip from '~/components/molecules/HeadingStrip'
import Button from '~/components/atoms/Button'

export default {
  name: 'caseStudiesPage',
  layout: 'DefaultLayout',
  async asyncData({ $content, params }) {
    const caseStudies = await $content('work/case-studies').fetch()
    const work = await $content('work/work').fetch()

    return {
      caseStudies, work
    };
  },
  components: {
    ArticleList,
    HeadingStrip,
    Button
  }
}
</script>

<style lang="scss" scoped>
  .work {
    @extend .u-bm-xxl;

    &__content {
      @extend .u-tm-xxl;
      @extend .u-bm-xxl;
    }
  }
</style>
