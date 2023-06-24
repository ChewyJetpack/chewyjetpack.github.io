<template>
    <div class="article-content">
        <div 
            v-for="(block, index) in content.contentBlocks" 
            :key="index"
        >
            <div
                v-if="block.content" 
                v-html="$md.render(block.content)"
            />
        <div 
            v-if="block.youtube" 
            v-html="block.youtube"
            class="youtube-embed u-bm-m"
        />
        <ArticleImages 
            v-if="block.images" 
            :images="block.images" />
        </div>
    </div>
</template>

<script>
import ArticleImages from '~/components/molecules/ArticleImages';

export default {
    name: 'ArticleContentBlock',
    props: {
        content: {
            type: Object
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
    .youtube-embed {
        position: relative;
        overflow: hidden;
        width: 100%;
        
        &::after {
            display: block;
            content: "";
            padding-top: 56.25%;
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>