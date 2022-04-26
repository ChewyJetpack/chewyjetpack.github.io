<template>
    <div>
        <div v-if="images.length > 1">
            This will be a gallery
            <div v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.caption">
            </div>
        </div>
        <div v-else>
            <figure v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.caption">
                <figcaption>{{ image.caption }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleImages',
    props: {
        images: {
            type: Array
        }
    }
}
</script>