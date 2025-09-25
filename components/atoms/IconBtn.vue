<template>
  <button
    :class="[classes, 'icon-btn']"
    :style="`color: var(${cText})`"
    :aria-label="ariaLabel"
    @click="$emit('clicked')"
  >
    <font-awesome :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String
    },
    icon: {
      type: String
    },
    cText: {
      type: String
    },
    ariaLabel: {
      type: String,
      required: true
    }
  }
};
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
  color: var(--c-main);

  &:focus {
    outline: 2px solid var(--c-accent-2);
    outline-offset: 2px;
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
