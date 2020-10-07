<template>
<div>
  <div ref="richtext" :class="[ 'richtext ck-content u-bottom-spacer-xxxl u-top-spacer-s', accentElems(false, true) ]" v-html="data" />
  </div>
</template>

<script>
import { accentElems } from '~/utils/accentElems'
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
  },
  methods: {
    accentElems,
  }
}
</script>

<style lang="scss" scoped>
.richtext {
  position: relative;
}
</style>