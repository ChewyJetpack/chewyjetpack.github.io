<template>
  <IconBtn
    ref="mode"
    @clicked="switchMode"
    :classes="`mode-switch mode-switch--${currentMode}`"
    icon="adjust"
    :u-burst="burst"
    aria-label="Toggle dark mode"
  />
</template>

<script>
import IconBtn from "~/components/atoms/IconBtn";

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
      modes: ["light", "dark"],
      burst: false
    };
  },
  methods: {
    switchMode() {
      this.burst = true;
      setTimeout(() => {
        this.burst = false;
      }, 600);
      const mode = this.modes.find(mode => mode != this.currentMode);
      this.$nuxt.$emit("updatemode", mode);
    }
  }
};
</script>

<style lang="scss" scoped>
.mode-switch {
  position: relative;
  transition: transform 0.5s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;

  @include breakpoint_m {
    font-size: $unit_m;
  }

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
    mask-image: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0) 38%,
      rgba(0, 0, 0, 1) 38%
    );
    mask-position: center;
    
    // Anti-aliasing and smoothing properties
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    will-change: transform, opacity, mask-size;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  &[u-burst] {
    &:after {
      animation: 0.4s ease-out 0.2s lightburst;
    }
  }

  @keyframes lightburst {
    0% {
      transform: translate3d(-50%, -50%, 0) scale(0.2);
      mask-size: 50% 50%;
      opacity: 1;
    }
    60% {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(0.8);
      mask-size: 150% 150%;
    }
    100% {
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale(1);
      mask-size: 190% 190%;
    }
  }

  &--dark {
    transform: rotate(180deg);
  }

  // Remove focus outline for mode switch
  &:focus {
    outline: none !important;
  }
  
  // Also remove focus outline from the underlying button
  :deep(.icon-btn:focus) {
    outline: none !important;
  }
}
</style>
