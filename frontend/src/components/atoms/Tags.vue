<template>
<ul class="tags">
    <li 
        v-for="tag in tags" 
        :key="tag.id" 
    >
        <g-link 
            :to="`/blog/tags/${tag.slug}`" 
            class="tags__tag u-right-spacer-xs"
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
        padding-top: $unit_m;

        &__tag {
            font-size: $txt_xxs;
            padding: $unit_xxs $unit_s;
            line-height: 1;
            font-weight: 400;
            background: var(--c-accent-4);
            border-radius: $unit_xxxs;
            color: var(--c-main);

            &:hover {
                background: var(--c-accent-3);
            }
        }
    }
</style>