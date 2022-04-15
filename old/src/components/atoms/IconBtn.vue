<template>
  <button
    @click="callback"
    :class="[classes, 'icon-btn']"
    :style="`color: var(${cText})`"
  >
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
  font-size: $txt_s;
  color: var(--c-bg);

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
