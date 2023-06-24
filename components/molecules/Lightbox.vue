<template>
    <div class="lightbox">
      <div class="lightbox__inner">
        <div v-if="args.gallery">
          <img
            :src="args.gallery[args.index].src"
            :alt="args.gallery[args.index].caption"
            @click="nextImg"
          />
        </div>
        <img v-else :src="args.src" :alt="args.alt" />
      </div>
      <div class="lightbox__controls u-top-spacer-m">
            <Button
              ico-left
              icon="arrow-left"
              label="Prev"
              :callback="prevImg"
              :frameless="true"
            />
            <Button :callback="nextImg" label="Next" :frameless="true" />
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
    // computed: {
    //   parsedSelectedIndex() {
    //     // Ensure we don't go beyond the amount of images
    //     return this.index % this.args.gallery.length;
    //   }
    // },
    methods: {
      prevImg() {
        this.args.index - 1 == -1
          ? (this.args.index = this.args.gallery.length - 1)
          : (this.args.index -= 1);
      },
      nextImg() {
        this.args.index + 1 > this.args.gallery.length - 1
          ? (this.args.index = 0)
          : (this.args.index += 1);
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
      padding-bottom: $unit_xxl;
    }
  
    &__controls {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: all;
      position: fixed;
      bottom: 0;
      background: var(--c-bg);
      width: 100%;
      padding: $unit_s;
    }
  
    img {
      max-width: 100%;
      max-height: 80vh;
      pointer-events: all;
      box-shadow: 0 0 $unit_l rgba($darkest, 0.2);
    }
  }
  </style>