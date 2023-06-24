<template>
  <IconBtn
    ref="mode"
    @clicked="switchMode"
    :classes="`mode-switch mode-switch--${currentMode}`"
    icon="adjust"
    :u-burst="burst"
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
</style>
