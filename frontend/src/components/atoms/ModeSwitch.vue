<template>
    <button @click="switchMode" :class="`mode-switch mode-switch--${currentMode}`">
        <font-awesome :icon="['fa', 'adjust']" />
    </button>
</template>

<script>
import { EventBus } from '@/App'

export default {
    props: {
        currentMode: {
            type: String,
        }
    },
    data() {
        return {
            modes: ['light', 'dark']
        }
    },
    methods: {
        switchMode() {
            const mode = this.modes.find(mode => mode != this.currentMode);
            EventBus.$emit('updatemode', mode);
        }
    }
}
</script>

<style lang="scss" scoped>
    .mode-switch {
        outline: none;
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        color: var(--c-h1);
        position: relative;
        transition: transform 0.5s;
        line-height: 1;
        display: flex;
        align-items: center;
        height: var(--c-txt);

        &:before, &:after {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            content: "";
        }

        &:before {
            width: 1px;
            height: 1px;
            box-shadow: 0 0 20px 7px $crest;
            opacity: 0;
            transition: opacity 1s;
        }

        &:after {
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

        &:not(:active) {
            &:after {
                animation: 0.5s ease 0.2s lightburst;
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

        svg {
            position: relative;
            z-index: 1;
        }

        &--dark {
            transform: rotate(180deg);

            &:before {
                opacity: 0.7;
                animation: 1s ease 0s infinite alternate glow;
            }
        }
    }

    @keyframes glow {
        from {
            opacity: 0.7;
        }
        to {
            opacity: 1;
        }
    }
</style>