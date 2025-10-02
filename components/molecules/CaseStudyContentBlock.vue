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

<style lang="scss">
    .cs-block {
        @extend .u-bm-xl;
        
        h2 {
            color: var(--c-main);
            position: relative;
            display: inline-block;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: var(--c-accent-2);
            }
        }

        // Apply border-radius to markdown images in case study content
        &__content {
            img {
                border-radius: $unit_xs;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.5);
            }

            h3 {
                color: var(--c-main);
                position: relative;
                display: inline-block;
                font-weight: 500;
                
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: var(--c-accent-2);
                }
            }
        }
    }
</style>