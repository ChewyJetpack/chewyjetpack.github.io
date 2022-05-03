<template>
  <div class="cv wrap u-top-spacer-xxl">
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
        <h2 class="u-top-spacer-m">Skills</h2>
        <ul class="cv__skills">
          <li class="cv__skill" v-for="(skill, index) in cv.skills" :key="index">
            {{ skill }}
          </li>
        </ul>
        <h2 class="u-top-spacer-xl">Education</h2>
        <h3 class="u-bottom-spacer-xxs">BA(Hons) Digital Media Design</h3>
        <div class="cv__uni">
          <span class="cv__uni-name">UAL London College of Communication:</span>
          <span class="cv__uni-date">2009 - 2012</span>
        </div>
        <div class="cv__outro u-top-spacer-xl">
          <h2>Interests</h2>
          <div v-html="$md.render(cv.outro)" />
        </div>
    </aside>
    <div class="cv__main">
      <section class="cv__intro">
        <div class="cv__intro-body">
          <div class="cv__intro-content u-bottom-spacer-l" v-html="$md.render(cv.intro)" />
        </div>
      </section>
      <section class="cv__jobs">
        <h2 class="u-bottom-spacer-l">Career history</h2>
        <div class="cv__jobs-list u-bottom-spacer-l" v-for="(job, index) in cv.jobs" :key="index">
          <div class="cv__job">
            <div class="cv__job-info u-left-spacer-s">
              <h3 class="cv__job-title u-bottom-spacer-xxs">{{ job.title }}</h3>
              <div class="cv__job-meta">
                <span class="cv__job-co">{{ job.company }}:</span>
                <span class="cv__job-date">{{ job.startYear }} - {{ job.endYear ? job.endYear : 'Present' }}</span>
              </div>
            </div>
            <div class="cv__job-description">{{ job.description }}</div>
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
    const cv = await $content('cv').fetch();

    return {
      cv,
    };
  }
}
</script>

<style lang="scss" scoped>
  .cv {
    &__grid {
      display: grid;
      grid-template: 'contact main' auto
                     'aside main' 1fr / 1fr 2fr;
      grid-gap: $unit_l;

      aside {
        color: var(--c-main-alt);
        grid-area: aside;
      }
    }

    &__contact {
      grid-area: contact;
      align-self: start;
    }

    &__main {
      grid-area: main;
    }

    &__intro {
      &-content {
        position: relative;
        padding: $unit_l;
        background: var(--c-bg-2);
      }
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
        top: $unit_s;
        background: var(--c-accent-2);
        height: $unit_xs;
        width: $unit_xs;
        border-radius: 50%;
      }
    }

    &__job {
      &-info {
        background: var(--c-art-heading);
        padding: $unit_s $unit_m;
        position: relative;
        z-index: 3;
        display: inline-block;
      }

      &-title {
        color: var(--c-bg);
      }

      &-co {
        font-weight: 700;
        color: var(--c-bg-3);
      }

      &-date {
        color: var(--c-bg-3);
        font-weight: 600;
      }

      &-description {
        position: relative;
        padding: $unit_xxl $unit_l $unit_l;
        background: var(--c-bg-2);
        top: -#{$unit_l};
      }
    }

    &__jobs-outro {
      @extend .e-grid-2-1;
    }
  }
</style>