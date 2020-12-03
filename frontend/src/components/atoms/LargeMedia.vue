<template>
  <div ref="image">
    <g-image
      :alt="data.description"
      :src="getStrapiMedia(data.media.url)"
      v-if="data.media.mime.startsWith('image')"
    />
    <p class="text-center text-lg italic mt-2">{{ data.description }}</p>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'
import { EventBus } from '~/App'

export default {
  props: ['data'],
  mounted() {  
    this.$refs.image.addEventListener('click', () => {
      EventBus.$emit('lightbox:open', getStrapiMedia(this.data.media.url));
    });
  },
  methods: {
    getStrapiMedia,
  }
}
</script>
