<template>
  <div class="wrap u-top-spacer-xxl">
    <h1 class="u-bottom-spacer-xxl">Curriculum Vitae</h1>
    <div class="u-bottom-spacer-l" v-html="$md.render(cv.intro)" />
    <div class="u-bottom-spacer-l" v-for="(job, index) in cv.jobs" :key="index">
      <h3>{{ job.title }}: {{ job.company }}</h3>
      <div>
        {{ job.startYear }} - {{ job.endYear }}
      </div>
      {{ job.description }}
    </div>
    <div v-html="$md.render(cv.outro)" />
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
