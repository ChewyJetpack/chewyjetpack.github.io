<template>
  <div>
    <Nav/>
    {{ cv.title }}
  </div>
</template>

<script>
import Nav from '~/components/Nav';

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
  },
  components: {
    Nav
  }
}
</script>
