<template>
  <div class="cv">
    <h1>{{ cv.title }}</h1>
    <div v-html="$md.render(cv.intro)" />
    <div v-for="(job, index) in cv.jobs" :key="index">
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
