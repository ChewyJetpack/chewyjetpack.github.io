<template>
  <div class="content">
    <div
      v-for="contentSection in content"
      :key="contentSection.__typename + contentSection.id"
    >
      <!-- Display the right component based on type name -->
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsRichText'">
        <RichText :data="contentSection.content" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsLargeMedia'">
        <LargeMedia :data="contentSection" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsImagesSlider'">
        <Slider :data="contentSection" />
      </div>
    </div>
  </div>
</template>

<script>
import RichText from '~/components/atoms/RichText'
import LargeMedia from '~/components/atoms/LargeMedia'
import Slider from '~/components/organisms/Slider'

export default {
  props: ["content"],
  components: {
    RichText,
    LargeMedia,
    Slider,
  }
}
</script>
