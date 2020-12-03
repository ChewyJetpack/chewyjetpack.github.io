<template>
    <div class="page u-top-spacer-xxxl">
      <div class="wrap">
        <h1>{{ title }}</h1>

        <Button 
            v-if="backTo"
          class="back-btn u-top-spacer-m"
          :label="backLabel"
          :href="backTo"
          icon="arrow-left"
          ico-left
        />        

    <!-- List of project preview cards -->
        <PostCard
            v-for="(item, index) in items"
            :key="item.id"
            :content="item"
            :i="index"
            :type="type"
            img="large"
        />
      </div>
    </div>
</template>

<script>
import PostCard from '~/components/organisms/PostCard'
import Content from '~/components/molecules/Content'
import Button from '~/components/atoms/Button'

export default {
    props: {
        title: {
            type: String
        },
        items: {
            type: Array
        },
        type: {
            type: String
        },
        backTo: {
            type: [String, Boolean],
            default: false
        },
        backLabel: {
            type: String,
            default: 'Go back'
        }
    },
  components: {
    PostCard,
    Content,
    Button
  }
}
</script>

<style lang="scss" scoped>
  
</style>