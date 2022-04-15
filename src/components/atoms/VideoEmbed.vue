<template>
  <iframe
    class="video u-bottom-spacer-xxxl"
    type="text/html"
    :src="url"
    frameborder="0"
  ></iframe>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.video {
  width: 100%;
  height: 60vw;
  max-height: 480px;
  border: none;
}
</style>
