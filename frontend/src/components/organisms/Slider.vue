<template>
  <div class="slider">
    <div class="slider__gallery">
      <div
        v-for="image in data.images"
        :key="image.id"
        class="slider__img"
        :style="`background: url(${image.url}) center center / cover no-repeat`"
        @click="lightBox"
      />
    </div>
  </div>
</template>

<script>
import { EventBus } from "~/App";

export default {
  props: ["data"],
  methods: {
    lightBox() {
      EventBus.$emit("lightbox:open", {
        gallery: this.data.images
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  &__gallery {
    display: grid;
    grid-gap: $unit_m;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-template-rows: auto;
  }

  &__img {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
