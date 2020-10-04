<template>
    <button @click="callback" :class="[classes, 'icon-btn']" :style="`color: var(${cText})`">
        <font-awesome :icon="icon" />
    </button>
</template>

<script>
export default {
    props: {
        callback: {
            type: Function
        },
        classes: {
            type: String
        },
        icon: {
            type: String
        },
        cText: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-btn {
        outline: none;
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        line-height: 1;
        display: flex;
        align-items: center;
        position: relative;
        font-size: $txt_m;
        color: var(--c-bg);

        &.mode-switch {
            position: relative;
            transition: transform 0.5s;

            &:after {
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                content: "";
                width: $unit_xxl;
                height: $unit_xxl;
                background: $sunrise;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                transform: translate(-50%, -50%);
                mask-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 38%, rgba(0, 0, 0, 1) 38%);
                mask-position: center;
            }

            &[u-burst] {
                &:after {
                    animation: 0.4s ease 0.2s lightburst;
                }
            }

            @keyframes lightburst {
                0% {
                    transform: translate(-50%, -50%) scale(0.2);
                    mask-size: 50% 50%;
                    opacity: 1;
                }
                70% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(1);
                    mask-size: 190% 190%;
                }
            }

            &--dark {
                transform: rotate(180deg);
            }
        }

        &--invert {
            color: var(--c-bg);
        }

        &:hover {
            svg {
                transform: scale(1.1);
            }
        }

        svg {
            position: relative;
            z-index: 1;
            transition: transform 0.2s;
            pointer-events: none;
        }
    }
</style>