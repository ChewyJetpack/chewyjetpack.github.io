<template>
  <div>
    <section class="work">
      <HeadingStrip :heading="work.title" shape="triangle"/>
      <div class="wrap work__content">
        <nuxt-content :document="work" />
        <div class="work__btn">
          <Button
              label="Download my CV"
              href="/EmilSmithCV.pdf"
              :external="true"
          />
        </div>
      </div>
      <section class="wrap work__case-studies">
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
    const caseStudies = await $content('work/case-studies').sortBy('year', 'desc').fetch()
    const work = await $content('work/work').fetch()

    return {
      caseStudies, work
    };
  },
  components: {
    ArticleList,
    HeadingStrip,
    Button
  },
  head: {
    title: 'Emil Smith | Work',
    meta: [
      {
        hid: 'workdescription',
        name: 'description',
        content: "I enjoy complex challenges where I can employ systematic thinking and hands-on execution. Whether that's building design systems at scale, establishing research programs, or modernizing legacy platforms, I focus on scalable designs that actually work in context."
      }
    ],
  }
}
</script>

<style lang="scss" scoped>
  .work {
    @extend .u-bm-xxl;
    

    &__content {
      //@extend .e-grid-2-1;
      @extend .u-tm-xxl;
      @extend .u-bm-xxl;
    }
  }
</style>
