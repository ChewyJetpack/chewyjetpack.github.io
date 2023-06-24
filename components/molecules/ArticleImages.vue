<template>
    <div :class="images.length > 2 ? 'images images--grid' : 'images'">
        <figure v-for="(image, index) in images" :key="index">
            <img @click="lightBox(images.length > 2 ? images : image.src)" class="image" :src="image.src" :alt="image.caption" />
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
        lightBox(src) {
            src.length > 2 ? this.$nuxt.$emit("lightbox:open", { gallery: src }) : this.$nuxt.$emit("lightbox:open", { src: src });
        }
    }
}
</script>

<style lang="scss" scoped>
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

        .image {
            cursor: pointer;
        }
</style>