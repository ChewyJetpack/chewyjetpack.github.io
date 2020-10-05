<template>
  <div class="richtext ck-content" v-html="data" />
</template>

<script>

export default {
  props: ["data"]
}
</script>

<style lang="scss" scoped>
.richtext {
  margin: 0 auto;
}
</style>