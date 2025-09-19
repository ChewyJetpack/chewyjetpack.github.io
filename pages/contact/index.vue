<template>
  <div>
    <section class="contact">
      <HeadingStrip :heading="contact.title" shape="pentagon"/>
      <div class="wrap contact__content">
        <nuxt-content :document="contact" />
      </div>
      <div class="wrap">
        <Button
          href="/CV.pdf"
          label="Download my CV"
          target="_blank"
        />
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
        content: "I'm a Creative Technologist, and I'm into tech and art. At the intersection of the two is design, so that's where I've spent most of my career."
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