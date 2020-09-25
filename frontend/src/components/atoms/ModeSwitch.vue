<template>
    <IconBtn ref="mode" :callback="switchMode" :classes="`mode-switch mode-switch--${currentMode}`" :navFormat="navFormat" icon="adjust" />
</template>

<script>
import { EventBus } from '@/App'
import IconBtn from '~/components/atoms/IconBtn'

export default {
    components: {
        IconBtn
    },
    props: {
        currentMode: {
            type: String
        },
        navFormat: {
            type: String
        }
    },
    data() {
        return {
            modes: ['light', 'dark']
        }
    },
    methods: {
        switchMode(e) {
            e.target.setAttribute('u-burst', '');
            setTimeout(() => {
                e.target.removeAttribute('u-burst');
            }, 600);
            const mode = this.modes.find(mode => mode != this.currentMode);
            EventBus.$emit('updatemode', mode);
        }
    }
}
</script>