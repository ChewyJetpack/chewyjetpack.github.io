<template>
  <div class="slider">
    <g-image class="slider__img" :src="data.images[parsedSelectedIndex].url" />
    <div class="slider__controls u-top-spacer-m">
      <Button ico-left icon="arrow-left" label="Previous" :callback="prevImg" />
      <Button :callback="nextImg" label="Next" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";

export default {
  components: {
    Button
  },
  props: ["data"],
  data: () => ({
    rawSelectedIndex: 0
  }),
  computed: {
    parsedSelectedIndex() {
      // Ensure we don't go beyond the amount of images
      return this.rawSelectedIndex % this.data.images.length;
    }
  },
  methods: {
    prevImg() {
      this.rawSelectedIndex -= 1;
    },
    nextImg() {
      this.rawSelectedIndex += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__img {
    max-height: 100vw;
    margin: 0 auto;
  }
}
</style>
