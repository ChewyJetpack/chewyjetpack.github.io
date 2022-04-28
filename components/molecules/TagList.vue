<template>
    <ul class="tag-list">
        <li class="tag-list__item u-right-spacer-xs" v-for="(tag, index) of tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink :to="`articles/tags/${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
            # <span>{{ tag }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TagList',
    props: {
        tags: {
            type: Array
        }
    }
}
</script>


<style lang="scss" scoped>
.tag-list {
    list-style: none;
    display: flex;

    &__item {
        background: var(--c-bg-2);
        padding: $unit_xxxs $unit_xs;
        border-radius: $unit_xxxs;
        font-size: $unit_s;
        font-weight: 900;
        line-height: 120%;

        span {
            color: var(--c-main);
            font-weight: 400;
        }

    }
}
</style>