<template>
<div>
  <div :class="[ 'richtext ck-content u-bottom-spacer-xxxl u-top-spacer-s', accentElems(false, true) ]" v-html="data" />
  </div>
</template>

<script>
import { accentElems } from '~/utils/accentElems'

export default {
  props: ["data", 'i'],
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