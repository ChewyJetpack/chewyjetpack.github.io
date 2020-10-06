<template>
<ul class="tags">
    <li 
        v-for="tag in tags" 
        :key="tag.id" 
        class="u-right-spacer-xxxs u-bottom-spacer-xs"
    >
        <g-link 
            :to="`/blog/tags/${tag.slug}`" 
            class="tags__tag"
        >
            {{ tag.name }}
        </g-link>
    </li>
</ul>
</template>

<script>
export default {
    name: 'tags',
    props: {
        tags: {
            type: Object
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
            padding: $unit_xxxs $unit_s;
            line-height: 1;
            font-weight: 400;
            background: var(--c-accent-4);
            clip-path: polygon($unit_xxs 0%, 100% 0%, calc(100% - #{$unit_xxs}) 100%, 0% 100%);
            color: var(--c-main);
            transition: all 0.2s;

            &:hover {
                background: var(--c-accent-3);
            }
        }
    }
</style>