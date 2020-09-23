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
</style>