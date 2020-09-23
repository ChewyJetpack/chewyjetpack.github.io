<template>
    <button @click="switchMode" :class="`mode-switch mode-switch--${currentMode}`">
        <font-awesome :icon="currentMode == 'light' ? ['far', 'lightbulb'] : ['fas', 'lightbulb']" />
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

        &:before {
            display: block;
            position: absolute;
            top: 40%;
            left: 50%;
            content: "";
            width: 1px;
            height: 1px;
            box-shadow: 0 0 0px 0px $crest;
            transition: box-shadow 1s;
        }

        &--dark {
            &:before {
                box-shadow: 0 0 20px 7px $crest;
                animation: 1s ease 0s infinite alternate glow;
            }
        }
    }

    @keyframes glow {
        from {
            box-shadow: 0 0 18px 6px $crest;
        }
        to {
            box-shadow: 0 0 20px 7px $crest;
        }
    }
</style>