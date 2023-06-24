<template>
    <div :class="images.length > 2 ? 'images images--grid' : 'images'">
        <figure v-for="(image, index) in images" :key="index">
            <div class="img-wrap">
                <img @click="lightBox(images.length > 2 ? images : image.src, index)" class="image" :src="image.src" :alt="image.caption"/>
            </div>
            <caption class="caption">{{ image.caption }}</caption>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'ArticleImages',
    props: {
        images: {
            type: Array
        }
    },
    methods: {
        lightBox(src, index) {
            src.length > 2 ? this.$nuxt.$emit("lightbox:open", { gallery: src, index: index }) : this.$nuxt.$emit("lightbox:open", { src: src });
        }
    }
}
</script>

<style lang="scss" scoped>
    figure {

        .img-wrap {
            position: relative;
            overflow: hidden;
            width: 100%;
            background: var(--c-bg-2);
            
            &::after {
                display: block;
                content: "";
                padding-top: 80%;
            }
            
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                max-height: 100%;
                max-width: 100%;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
        }
    }
    .images {
            @extend .u-tm-l;

            &--grid {
                @extend .e-grid-1-1;
            }

            caption {
                display: block;
                width: 100%;
                padding: $unit-s;
                background: var(--c-bg-2);
                font-size: $txt_s;
            }
        }
</style>