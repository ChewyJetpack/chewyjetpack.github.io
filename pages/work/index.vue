<template>
  <div class="wrap u-tm-xxl">
    <section class="work">
      <div>
        <h1 class="work__heading">{{work.title}}</h1>
        <div class="work__content">
          <nuxt-content :document="work" />
        </div>
      </div>
    </section>
    <section class="work__case-studies">
      <h2>Case Studies</h2>
      <ArticleList 
        :articles="caseStudies"
        :caseStudies="true"
      />
    </section>
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'

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
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
  .work {
    @extend .e-grid-2-1;
    @extend .u-bm-xxl;

    &__heading {
      margin-bottom: $unit_l;
    }
  }

.nuxt-content-container {
  padding: $unit_s;
  @include accentContent(var(--c-accent-1), left);
  background: var(--c-bg-2);
  font-size: $txt_xs;

  @include breakpoint_m {
    font-size: $txt_s;
    padding: $unit_l;
  }

}
</style>
