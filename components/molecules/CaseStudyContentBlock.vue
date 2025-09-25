<template>
    <section class="cs-block" v-if="content || images || youtube">
        <h2 v-if="heading">{{ heading }}</h2>
        <div v-if="content" class="cs-block__content" v-html="$md.render(content)" />  
        <div 
            v-if="youtube" 
            v-html="youtube"
            class="youtube-embed u-bm-m"
        />
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
        youtube: {
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
        
        h2 {
            color: var(--c-main);
        }
    }
</style>