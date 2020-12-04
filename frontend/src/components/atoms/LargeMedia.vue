<template>
  <div>
    <g-image
    class="u-bottom-spacer-xxl"
      :alt="data.description"
      :src="getStrapiMedia(data.media.url)"
      v-if="data.media.mime.startsWith('image')"
      @click="lightBox"
    />
    <p class="text-center text-lg italic mt-2">{{ data.description }}</p>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'
import { EventBus } from '~/App'

export default {
  props: ['data'],
  methods: {
    getStrapiMedia,
    lightBox() {
      EventBus.$emit('lightbox:open', getStrapiMedia(this.data.media.url));
    }
  }
}
</script>
