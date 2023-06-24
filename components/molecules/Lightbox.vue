<template>
    <div class="lightbox">
      <div class="lightbox__inner">
        <div v-if="args.gallery">
          <img
            :src="args.gallery[args.index].src"
            :alt="args.gallery[args.index].alt"
            @click="nextImg($event)"
          />
          <p v-if="args.gallery[args.index].caption">{{ args.gallery[args.index].caption }}</p>
        </div>
        <div v-else>
        <img :src="args.src" :alt="args.alt" />
            <p v-if="args.caption">{{ args.caption }}</p>
        </div>
      </div>
      <div v-if="args.gallery" class="lightbox__controls u-top-spacer-m">
            <Button
              ico-left
              icon="arrow-left"
              label="Prev"
              @clicked="prevImg($event)"
              frameless
              isLarge
            />
            <div class="lightbox__count" v-if="args.gallery">
                {{ (args.index + 1) }}/{{ args.gallery.length }}
            </div>
            <Button 
                @clicked="nextImg($event)" 
                label="Next" 
                frameless 
                isLarge
            />
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
      prevImg(e) {
        this.args.index - 1 == -1
          ? (this.args.index = this.args.gallery.length - 1)
          : (this.args.index -= 1);
      },
      nextImg(e) {
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
      border-top: solid 2px var(--c-main-alt-2);
      grid-gap: $unit_m;
    }

    &__count {
        min-width:30%;
        text-align: center;
    }
  
    img {
      max-width: 100%;
      max-height: 80vh;
      pointer-events: all;
      box-shadow: 0 0 $unit_l rgba($darkest, 0.2);
      @extend .u-bm-m;
    }
  }
  </style>