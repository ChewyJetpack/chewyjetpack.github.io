<template>
  <div class="social u-top-spacer-s">
    <span class="u-right-spacer-xs">Share:</span>
    <facebook-button
      class="share-btn u-right-spacer-xxs"
      :description="title"
      btnText
    />
    <twitter-button
      class="share-btn u-right-spacer-xxs"
      :description="title"
      btnText
    />
    <reddit-button
      class="share-btn u-right-spacer-xxs"
      :description="title"
      btnText
    />
    <linked-in-button
      class="share-btn u-right-spacer-xxs"
      :description="title"
      btnText
    />
    <whats-app-button
      class="share-btn u-right-spacer-xxs"
      :description="title"
      btnText
    />
  </div>
</template>

<script>
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import RedditButton from "vue-share-buttons/src/components/RedditButton";
import WhatsAppButton from "vue-share-buttons/src/components/WhatsAppButton";
import LinkedInButton from "vue-share-buttons/src/components/LinkedInButton";

export default {
  props: {
    url: {
      type: String
    },
    title: {
      type: String
    }
  },
  components: {
    FacebookButton,
    TwitterButton,
    RedditButton,
    WhatsAppButton,
    LinkedInButton
  }
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  font-size: $txt_xs;
  color: var(--c-main-alt);
}

.share-btn {
  border-radius: 0;
  padding: 0 $unit_xs;
  display: inline-flex;
  align-items: center;
  background: transparent;
}
</style>
