<template>
    <ul class="tag-list u-pm-reset">
        <li class="tag-list__item" v-for="(tag, index) of tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink class="tag-list__link" :to="tag.path">
            {{ tag.title }}
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
        line-height: 100%;
        margin-bottom: $unit_xxs;
        @extend  .u-rm-s;

        @include breakpoint_m {
            margin-bottom: $unit_s;
        }
    }
    
    &__link {
        padding: 0;
        color: var(--c-accent-2);
        font-size: $txt_xs;
        font-weight: 700;
        text-decoration: none;

        @include breakpoint_m {
            font-size: $txt_s;
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