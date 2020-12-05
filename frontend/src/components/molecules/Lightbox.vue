<template>
  <div class="lightbox">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "lightbox",
  props: {
    src: {
      type: String
    },
    alt: {
      type: String,
      default: "Emil Smith - Creative Technologist"
    }
  }
};
</script>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
