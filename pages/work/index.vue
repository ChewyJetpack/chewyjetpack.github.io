<template>
  <div>
    <section class="work">
      <HeadingStrip :heading="work.title" shape="triangle"/>
      <div class="wrap work__content">
        <div class="work__intro">
          <h3 class="u-visually-hidden">How I work</h3>
          <nuxt-content :document="work" />
          <div class="work__btn">
            <Button
                label="Download my CV"
                href="/EmilSmithCV.pdf"
                :external="true"
            />
          </div>
        </div>
        <aside class="work__skills" aria-label="Skills">
          <h3 class="u-visually-hidden">Skills</h3>
          <ul class="skills-list">
            <li>Product design & UX strategy</li>
            <li>Design systems at scale</li>
            <li>User research & testing</li>
            <li>Interaction design & prototyping</li>
            <li>Information architecture</li>
            <li>Accessibility (WCAG)</li>
            <li>UI engineering (HTML/CSS/JS)</li>
          </ul>
        </aside>
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
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: $unit_xxl;

      @include breakpoint_m {
        grid-template-columns: 2fr 1fr;
        align-items: start;
      }
    }

    .work__intro {
      // no overrides; exists for clarity in layout
      // using non-empty to satisfy linter
      margin: 0;
    }

    .work__skills {
      @extend .u-bm-xs;
      position: relative;
    }

    .skills-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: $unit_xs;

      @include breakpoint_m {
        grid-template-columns: 1fr;
      }

      li {
        position: relative;
        padding-left: $unit_s;

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: var(--c-accent-2);
          border-radius: 6px;
        }
      }
    }
  }
</style>
