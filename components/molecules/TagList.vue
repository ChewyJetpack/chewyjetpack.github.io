<template>
    <ul class="tag-list">
        <li class="tag-list__item u-right-spacer-s u-bottom-spacer-s" v-for="(tag, index) of tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink class="tag-list__link" :to="`articles/tags/${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
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
        background: var(--c-bg-2);
        padding: 0 $unit_xs;
        border-radius: $unit_xxs;
        color: var(--c-accent-3);

        span {
            color: var(--c-main);
            font-weight: 600;
            font-size: $txt_xs;
        }

        &:hover {
            background: var(--c-accent-3);
            color: $darkest;

            span {
                color: $darkest;
            }
        }
    }
}
</style>