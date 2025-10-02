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
            if (e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            
            // Just emit the lightbox event - let the parent Article component handle body locking
            img.length > 1 ? this.$nuxt.$emit("lightbox:open", { gallery: img, index: index }) : this.$nuxt.$emit("lightbox:open", { src: img[0].src, alt: img[0].alt });
            
            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
    figure {

        .img-wrap {
            position: relative;
            //overflow: hidden;
            width: 100%;
            border-radius: $unit_xxs;
            
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
                border: solid 3px var(--c-main-alt);
                border-radius: $unit_xs;
                transition: border-color 0.2s ease;

                &:hover {
                    border-color: var(--c-accent-1);
                }
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
                    box-shadow: 0 0 $unit_s 0 rgba(0, 0, 0, 0.1);
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