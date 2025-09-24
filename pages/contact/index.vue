<template>
  <div>
    <section class="contact">
      <HeadingStrip :heading="contact.title" shape="hexagon"/>
      <div class="wrap contact__content">
        <nuxt-content :document="contact" />
      </div>
      <div class="wrap">
        <Button
          href="/EmilSmithCV.pdf"
          label="Download my CV"
          target="_blank"
        />
      </div>
      <div class="wrap u-tm-m">
        <Button
          href="mailto:hi@emilsmith.pro"
          label="Send me an email"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeadingStrip from '~/components/molecules/HeadingStrip'
import Button from '~/components/atoms/Button'

export default {
  name: 'ContactPage',
  layout: 'DefaultLayout',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const contact = await $content('contact/contact').fetch();

    return {
      contact
    };
  },
  components: {
    HeadingStrip,
    Button
  },
  head: {
    title: 'Emil Smith | Contact',
    meta: [
      {
        hid: 'workdescription',
        name: 'description',
        content: "I'm a senior product designer with 15+ years building scalable digital products. I've led design teams with 100% retention rates, established user research programs, and built design systems serving 200+ brands. My approach combines systematic design thinking with technical implementation - I can code the solutions I design when needed."
      }
    ],
  },
}
</script>

<style lang="scss" scoped>
  .contact {
    @extend .u-bm-xxl;

    &__content {
      @extend .u-tm-xxl;
      @extend .u-bm-xxl;
    }
  }
</style>