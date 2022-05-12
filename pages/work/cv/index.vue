<template>
  <div class="cv wrap">
    <h1>Curriculum Vitae</h1>
    <div class="cv__grid">
        <div class="cv__contact">
          <h2>Emil Smith</h2>
          <ul class="cv__contact-info">
            <li>
              <a :href="`mailto:${cv.email}`">{{ cv.email }}</a>
            </li>
            <li>
              <a :href="`tel:${cv.phone}`">{{ cv.phone }}</a>
            </li>
          </ul>
        </div>
      <aside>
        <div class="cv__skills-wrap">
          <h2>Skills</h2>
          <ul class="cv__skills">
            <li class="cv__skill" v-for="(skill, index) in cv.skills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="cv__skills-wrap">
          <h2>Education</h2>
          <h3>BA(Hons) Digital Media Design</h3>
          <div class="cv__uni">
            <span class="cv__uni-name">UAL London College of Communication:</span>
            <span class="cv__uni-date">2009 - 2012</span>
          </div>
        </div>
        <div class="cv__skills-wrap">
          <div class="cv__outro">
            <h2>Interests</h2>
            <div class="u-accent-content" v-html="$md.render(cv.outro)" />
          </div>
        </div>
    </aside>
    <div class="cv__main">
      <section class="cv__intro">
        <div class="cv__intro-body">
          <div class="cv__intro-content u-accent-content" v-html="$md.render(cv.intro)" />
        </div>
      </section>
      <section class="cv__jobs">
        <h2 class="cv__jobs-heading">Career history</h2>
        <div class="cv__jobs-list">
          <div class="cv__job" v-for="(job, index) in cv.jobs" :key="index">
            <div class="cv__job-info">
              <h3 class="cv__job-title">{{ job.title }}</h3>
              <div class="cv__job-meta">
                <span class="cv__job-co">{{ job.company }}:</span>
                <span class="cv__job-date">{{ job.startYear }} - {{ job.endYear ? job.endYear : 'Present' }}</span>
              </div>
            </div>
            <div class="cv__job-description u-accent-content" v-html="$md.render(job.description)" />
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cvPage',
  layout: 'DefaultLayout',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const cv = await $content('work/cv').fetch();

    return {
      cv,
    };
  }
}
</script>

<style lang="scss" scoped>
  .cv {
    @extend .u-tm-xxl;

    &__grid {
      display: grid;
      grid-template: 'contact main' auto
                     'aside main' 1fr / 1fr 2fr;
      grid-gap: $unit_l;

      aside {
        color: var(--c-main);
        grid-area: aside;
        padding-top: $unit_xxl;
      }
    }

    &__contact {
      grid-area: contact;
      align-self: start;
      font-size: $txt_m;
    }

    &__main {
      grid-area: main;
    }

    &__intro {
      &-content {
        position: relative;
        padding: $unit_l;
        background: var(--c-bg-3);
        @extend .u-bm-xxl;
        @extend .u-img-accent--right--1;
      }
    }

    &__skills-wrap {
      @extend .u-bm-xl;
    }

    &__skill {
      display: block;
      padding-left: $unit_m;
      position: relative;

      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: calc(1em / 1.8);
        background: var(--c-accent-2);
        height: $unit_xs;
        width: $unit_xs;
        border-radius: 50%;
      }
    }

    &__jobs-heading {
      @extend .u-bm-l;
    }

    &__jobs-list {
      @extend .u-bm-l;
    }

    &__job {
      @extend .u-bm-l;

      &-description {
        @include accentContent(var(--c-accent-3), left);
      }
      // TODO remove this? Maybe not? IDK.
      // &:nth-child(2n+1) {
      //   .cv__job-description {
      //     @include accentContent(var(--c-accent-1), left);
      //   }
      // }
      // &:nth-child(2n) {
      //   .cv__job-description {
      //     @include accentContent(var(--c-accent-3), right);
      //   }
      // }

      &-info {
        background: var(--c-art-heading);
        padding: $unit_s $unit_m;
        position: relative;
        z-index: 3;
        display: inline-block;
        @extend .u-lm-s;
      }

      &-title {
        color: var(--c-bg);
        @extend .u-bm-xxs;
      }

      &-co {
        font-weight: 700;
        color: var(--c-bg-2);
      }

      &-date {
        color: var(--c-bg-2);
        font-weight: 600;
      }

      &-description {
        position: relative;
        padding: $unit_xl $unit_l $unit_l;
        background: var(--c-bg-2);
        top: -#{$unit_l};

        > *:first-child {
          margin-top: 0;
        }

        > *:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__jobs-outro {
      @extend .e-grid-2-1;
    }
  }
</style>