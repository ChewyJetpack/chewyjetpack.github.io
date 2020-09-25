<template>
  <div class="richtext">
    <Markdown :source="data.content" />
  </div>
</template>

<script>
import Markdown from 'vue-markdown'

export default {
  props: ["data"],
  components: {
    Markdown,
  }
}
</script>

<style lang="scss" scoped>
.richtext {
  max-width: 680px;
  margin: 0 auto;
}
</style>