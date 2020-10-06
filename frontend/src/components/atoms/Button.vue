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
        padding: $unit_xs $unit_m;
        font-weight: 400;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s;
        clip-path: polygon($unit_xxs 0%, 100% 0%, calc(100% - #{$unit_xxs}) 100%, 0% 100%);

        svg {
            transition: all 0.2s;
        }

        &:hover, &:active {
            text-decoration: none;
            
            svg {
                transform: translateX($unit_xxs);
            }
        }
    }
</style>