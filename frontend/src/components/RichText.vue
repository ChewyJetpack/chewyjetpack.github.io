<template>
  <div>
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