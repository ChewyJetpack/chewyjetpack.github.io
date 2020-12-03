<template>
    <component
        :is="href ? 'a' : 'button'"
        :class="[ 'button', { 'button--ico-l': icoLeft, 'button--ico-r': !icoLeft } ]"
        :href="href"
        :rel="{ 'nofollow': external }"
        :target="{ '_blank': external }"
    >
        <span class="button__label">{{ label }}</span>
        <font-awesome class="button__icon" :icon="icon" />
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
        icon: {
            type: String,
            default: 'arrow-right'
        },
        icoLeft: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .button {
        color: var(--c-accent-2);
        display: flex;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s;
        position: relative;
        border-radius: $unit_xs 0;
        font-weight: 500;

        svg {
            transition: all 0.2s;
            font-size: $txt_xs;
        }

        &--ico-l {
            .button {
                &__label {
                    order: 1;
                }

                &__icon {
                    order: 0;
                    margin-right: $unit_s;
                }
            }

            &:hover, &:active, &.hovered {
                text-decoration: none;
                
                svg {
                    transform: translateX(-#{$unit_xxs});
                }
            }
        }

        &--ico-r {
            .button {
                &__label {
                    order: 0;
                }

                &__icon {
                    order: 1;
                    margin-left: $unit_s;
                }
            }

            &:hover, &:active, &.hovered {
                text-decoration: none;
                
                svg {
                    transform: translateX($unit_xxs);
                }
            }
        }

    }
</style>