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
        }
    }
}
</script>

<style lang="scss" scoped>
    .button {
        background: var(--c-accent-2);
        color: var(--c-bg);
        display: flex;
        border-radius: $unit_xs;
        padding: $unit_xs $unit_m;
        font-weight: 400;
        display: inline-flex;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.07);
            text-decoration: none;
        }
    }
</style>