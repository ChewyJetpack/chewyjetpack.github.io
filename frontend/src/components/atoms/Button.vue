<template>
    <component
        :is="href ? 'a' : 'button'"
        class="button"
        :href="href"
        :rel="{ 'nofollow': external }"
        :target="{ '_blank': external }"
        :style="`color: var(${cText}); background: var(${cBg});`"
    >
        {{ label }}
        <font-awesome class="u-left-spacer-xs" :icon="icon" />
    </component>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        href: {
            type: String
        },
        external: {
            type: Boolean
        },
        cText: {
            type: String
        },
        cBg: {
            type: String
        },
        icon: {
            type: String,
            default: 'arrow-right'
        }
    }
}
</script>

<style lang="scss" scoped>
    .button {
        background: var(--c-accent-2);
        color: var(--c-bg);
        display: flex;
        padding: $unit_s $unit_m;
        font-weight: 600;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s;
        position: relative;
        border-radius: $unit_xs 0;

        svg {
            transition: all 0.2s;
            font-size: $txt_xs;
        }

        &:hover, &:active {
            text-decoration: none;
            
            svg {
                transform: translateX($unit_xxs);
            }
        }
    }
</style>