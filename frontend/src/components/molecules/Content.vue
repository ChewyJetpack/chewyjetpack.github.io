<template>
  <div class="content">
    <div
      v-for="(contentSection, index) in content"
      :key="contentSection.__typename + contentSection.id"
    >
      <!-- Display the right component based on type name -->
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsRichText'">
        <RichText :data="contentSection.content" :i="index" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsLargeMedia'">
        <LargeMedia :data="contentSection" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsImagesSlider'">
        <Slider :data="contentSection" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsVideoEmbed'">
        <VideoEmbed :url="contentSection.url" />
      </div>
    </div>
  </div>
</template>

<script>
import RichText from '~/components/atoms/RichText'
import LargeMedia from '~/components/atoms/LargeMedia'
import VideoEmbed from '~/components/atoms/VideoEmbed'
import Slider from '~/components/organisms/Slider'

export default {
  props: ["content"],
  components: {
    RichText,
    LargeMedia,
    Slider,
    VideoEmbed
  }
}
</script>
