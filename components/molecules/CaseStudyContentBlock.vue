<template>
    <section class="cs-block" v-if="content || images">
        <h2 v-if="heading">{{ heading }}</h2>
        <div v-if="content" class="cs-block__content" v-html="$md.render(content)" />
        <ArticleImages v-if="images" :images="images" />
      </section>
</template>

<script>
import ArticleImages from '~/components/molecules/ArticleImages'

export default {
    name: 'CaseStudyContentBlock',
    props: {
        heading: {
            type: String
        },
        content: {
            type: String
        },
        images: {
            type: Array
        }
    },
    components: {
        ArticleImages
    }
}
</script>

<style lang="scss" scoped>
    .cs-block {
        @extend .u-bm-xl;
    }
</style>