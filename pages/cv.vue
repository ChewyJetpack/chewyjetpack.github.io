<template>
  <h1>{{ cv.title }}</h1>
</template>

<script>

export default {
  name: 'cvPage',
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
