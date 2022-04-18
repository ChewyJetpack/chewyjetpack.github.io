<template>
  <div>
    <Nav/>
    {{ home.title }}
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'IndexPage',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const home = await $content("home").fetch();

    return {
      home,
    };
  },
  components: {
    Nav
  }
}
</script>
