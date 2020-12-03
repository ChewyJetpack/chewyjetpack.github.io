<template>
  <div class="slider">
    <g-image
      class="slider__img"
      :src="getStrapiMedia(data.images[parsedSelectedIndex].url)"
    />
    <div class="slider__controls u-top-spacer-m">
      <Button 
        ico-left  
        icon="arrow-left" 
        label="Previous"
        :callback="switchImg(0)"
      />
      <Button 
        :callback="switchImg(1)"
        label="Next"
      />
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'
import Button from '~/components/atoms/Button'

export default {
  components: {
    Button
  },
  props: ['data'],
  data: () => ({
    rawSelectedIndex: 0,
  }),
  computed: {
    parsedSelectedIndex() {
      // Ensure we don't go beyond the amount of images
      return this.rawSelectedIndex % this.data.images.length
    },
  },
  methods: {
    getStrapiMedia,
    switchImg(direction) {
      if (!direction) {
        this.rawSelectedIndex -= 1;
      } else {
        this.rawSelectedIndex += 1;
      }
    }
  },
}
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