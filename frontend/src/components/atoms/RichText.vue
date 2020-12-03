<template>
<div>
  <div ref="richtext" class="richtext ck-content u-bottom-spacer-xxxl u-top-spacer-s" v-html="data" />
  </div>
</template>

<script>
import { EventBus } from '~/App';

export default {
  props: ["data", 'i'],
  mounted() {
    const images = this.$refs.richtext.querySelectorAll('img')
    
    images.forEach(element => {
      element.addEventListener('click', () => {
        EventBus.$emit('lightbox:open', element.attributes.src.value);
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.richtext {
  position: relative;
}
</style>