<template>
    <section class="cs-block" v-if="content || images">
        <h2 v-if="heading">{{ heading }}</h2>
        <div v-if="content" class="cs-block__content" v-html="$md.render(content)" />
        <div v-if="images" class="cs-block__images">
            <div v-for="(image, index) in images" :key="index">
                <nuxt-img class="cs-block__image" :src="image.src" :alt="image.caption" />
            </div>
        </div>
      </section>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
    .cs-block {
        @extend .u-bm-xl;

        &__image {
            @extend .u-tm-l;
        }
    }
</style>