<template>
    <ul class="tag-list">
        <li class="tag-list__item u-right-spacer-s u-bottom-spacer-s" v-for="(tag, index) of tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink class="tag-list__link" :to="tag.path">
            # <span>{{ tag.title }}</span>
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
        },
        large: {
            type: Boolean,
            default: false
        }
    }
}
</script>


<style lang="scss" scoped>
.tag-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    &__item {
        font-size: $txt_s;
        font-weight: 900;
        line-height: 100%;
    }
    
    &__link {
        border-bottom: solid $unit_xxxs var(--c-main-alt-2);
        padding: 0;
        color: var(--c-accent-3);

        span {
            color: var(--c-main);
            font-weight: 600;
            font-size: $txt_xs;
        }

        &:hover, &:focus, &:active {
            border-color: var(--c-accent-3);
            text-decoration: none;

            span {
            color: var(--c-accent-3);
            }
        }
    }
}
</style>