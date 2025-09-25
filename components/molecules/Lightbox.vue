  <template>
    <div 
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      @keydown.esc="closeLightbox"
      @keydown.left="prevImg"
      @keydown.right="nextImg"
      tabindex="-1"
      ref="lightbox"
    >
      <!-- Close button in top right -->
      <button 
        class="lightbox__close" 
        @click="closeLightbox"
        aria-label="Close lightbox"
        title="Close (ESC)"
      >
        <font-awesome icon="times" />
      </button>
      
      <div class="lightbox__inner">
        <div v-if="args.gallery">
          <img
            :src="args.gallery[args.index].src"
            :alt="args.gallery[args.index].alt"
            @click="nextImg($event)"
          />
          <p v-if="args.gallery[args.index].caption" id="lightbox-title">{{ args.gallery[args.index].caption }}</p>
        </div>
        <div v-else>
        <img :src="args.src" :alt="args.alt" />
            <p v-if="args.caption" id="lightbox-title">{{ args.caption }}</p>
        </div>
      </div>
      <div v-if="args.gallery" class="lightbox__controls u-top-spacer-m">
            <Button
              ico-left
              icon="arrow-left"
              label="Prev"
              @clicked="prevImg($event)"
              isLarge
            />
            <div class="lightbox__count" v-if="args.gallery">
                {{ (args.index + 1) }}/{{ args.gallery.length }}
            </div>
            <Button 
                @clicked="nextImg($event)" 
                label="Next" 
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
      },
      closeMethod: {
        type: Function
      }
    },
    // computed: {
    //   parsedSelectedIndex() {
    //     // Ensure we don't go beyond the amount of images
    //     return this.index % this.args.gallery.length;
    //   }
    // },
    mounted() {
      // Focus the lightbox when it opens
      this.$nextTick(() => {
        this.$refs.lightbox.focus();
      });
    },
    methods: {
      prevImg(e) {
        if (e) {
          e.preventDefault();
        }
        this.args.index - 1 == -1
          ? (this.args.index = this.args.gallery.length - 1)
          : (this.args.index -= 1);
      },
      nextImg(e) {
        if (e) {
          e.preventDefault();
        }
        this.args.index + 1 > this.args.gallery.length - 1
          ? (this.args.index = 0)
          : (this.args.index += 1);
      },
      closeLightbox() {
        if (this.closeMethod) {
          this.closeMethod();
        }
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
  
    &__close {
      position: fixed;
      top: $unit_m;
      right: $unit_m;
      z-index: 30;
      background: var(--c-bg);
      border: 2px solid var(--c-main-alt);
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: all;
      color: var(--c-main);
      font-size: 18px;
      transition: all 0.2s ease;

      &:hover {
        background: var(--c-main-alt);
        color: var(--c-bg);
        transform: scale(1.1);
      }

      &:focus {
        outline: 2px solid var(--c-accent-1);
        outline-offset: 2px;
      }

      @include breakpoint_m {
        top: $unit_l;
        right: $unit_l;
      }
    }
  
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
      border-top: solid 3px var(--c-accent-2);
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