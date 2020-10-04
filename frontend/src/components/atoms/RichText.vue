<template>
  <div class="richtext">
    <vue-markdown :source="data" />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: ["data"],
  components: {
    VueMarkdown,
  }
}
</script>

<style lang="scss" scoped>
.richtext {
  //max-width: 680px;
  margin: 0 auto;
}
</style>