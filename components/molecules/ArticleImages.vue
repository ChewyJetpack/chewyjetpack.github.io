<template>
    <div :class="images.length > 1 ? 'images images--grid' : 'images'">
        <figure v-for="(image, index) in images" :key="index">
            <div v-if="images.length == 1" class="img-wrap img-wrap--single">
                <img @click="lightBox(images, index, $event)" class="image" :src="image.src" :alt="image.alt"/>
            </div>
            <div v-else class="img-wrap">
                <nuxt-img preset="thumbSq" class="image image--hidden" :src="image.src" :alt="image.alt"/>
                <span @click="lightBox(images, index, $event)" class="image-tile" :style="'background: url(' + image.src + ') center center / cover no-repeat;'"></span>
            </div>
            <caption v-if="image.caption && images.length < 2" :class="images.length > 1 ? 'caption' : 'caption caption--single'">{{ image.caption }}</caption>
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
        lightBox(img, index, e) {
            e.preventDefault();
            img.length > 1 ? this.$nuxt.$emit("lightbox:open", { gallery: img, index: index }) : this.$nuxt.$emit("lightbox:open", { src: img[0].src, alt: img[0].alt });
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
            
            &::after {
                display: block;
                content: "";
                padding-top: 80%;
            }
            
            .image {
                position: absolute;
                top: 50%;
                left: 50%;
                max-height: 100%;
                max-width: 100%;
                transform: translate(-50%, -50%);
                cursor: pointer;

                &--hidden {
                    display: none;
                }
            }

            .image-tile {
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height: 100%;
                display: block;
                cursor: pointer;
            }

            &--single {     
                display: flex;
                justify-content: center;

                &::after {
                    display: none;
                }
            
                .image {
                    position: static;
                    transform: translate(-0%, -0%);
                }
            }
        }
    }
    .images {
            @extend .u-tm-l;
            @extend .u-bm-l;

            &--grid {
                @extend .e-grid-1-1;
            }

            caption {
                display: block;
                width: 100%;
                padding: $unit-s;
                font-size: $txt_xs;
                border-bottom: solid 2px var(--c-main-alt-2);
            }
        }
</style>