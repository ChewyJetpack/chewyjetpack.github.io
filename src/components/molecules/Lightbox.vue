<template>
  <div class="lightbox">
    <div class="lightbox__inner">
      <div v-if="args.gallery">
        <img
          :src="args.gallery[parsedSelectedIndex].url"
          :alt="args.gallery[parsedSelectedIndex].id"
          @click="nextImg"
        />
        <div class="lightbox__controls u-top-spacer-m">
          <Button
            ico-left
            icon="arrow-left"
            label="Previous"
            :callback="prevImg"
          />
          <Button :callback="nextImg" label="Next" />
        </div>
      </div>
      <img v-else :src="args.src" :alt="args.alt" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";

export default {
  name: "lightbox",
  components: {
    Button
  },
  props: {
    args: {
      type: Object
    }
  },
  data: () => ({
    rawSelectedIndex: 0
  }),
  computed: {
    parsedSelectedIndex() {
      // Ensure we don't go beyond the amount of images
      return this.rawSelectedIndex % this.args.gallery.length;
    }
  },
  methods: {
    prevImg() {
      this.rawSelectedIndex - 1 == -1
        ? (this.rawSelectedIndex = this.args.gallery.length - 1)
        : (this.rawSelectedIndex -= 1);
    },
    nextImg() {
      this.rawSelectedIndex + 1 > this.args.gallery.length - 1
        ? (this.rawSelectedIndex = 0)
        : (this.rawSelectedIndex += 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.lightbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: none;
  z-index: 10;

  &__inner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: all;
  }

  img {
    max-width: 100%;
    max-height: 80vh;
    pointer-events: all;
  }
}
</style>
