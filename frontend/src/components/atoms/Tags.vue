<template>
<div class="tags">
    <span v-if="fullPost" class="u-right-spacer-s">Tags:</span> 
    <span 
        v-for="tag in tags" 
        :key="tag.id" 
        class="u-right-spacer-xs u-bottom-spacer-xs"
    >
        <g-link 
            :to="`/blog/tags/${tag.slug}`" 
            class="tags__tag"
        >
            {{ tag.name }}
        </g-link>
    </span>
</div>
</template>

<script>
export default {
    name: 'tags',
    props: {
        tags: {
            type: Array
        },
        fullPost: {
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
    .tags {
        display: flex;
        flex-wrap: wrap;

        &__tag {
            font-size: $txt_xxs;
            padding: $unit_xxxs $unit_xs;
            line-height: 1;
            font-weight: 400;
            background: var(--c-accent-4);
            color: var(--c-main-alt);
            transition: all 0.2s;

            &:hover {
                background: var(--c-accent-1);
                color: var(--c-bg);
                text-decoration: none;
            }
        }
    }
</style>