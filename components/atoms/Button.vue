<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="['button', { 'button--ico-l': icoLeft, 'button--ico-r': !icoLeft }]"
    :href="href"
    :rel="{ nofollow: external }"
    :target="{ _blank: external }"
    @click="callback ? callback() : null"
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
      default: "arrow-right"
    },
    icoLeft: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: var(--c-main);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  border-radius: $unit_xs;
  font-weight: 600;
  outline: none;
  background: none;
  border: solid 1px var(--c-main-alt-2);
  padding: $unit_xs $unit_s;
  font-size: $txt_s;
  cursor: pointer;


  &:hover {
    background: var(--c-accent-1);
    color: $darkest;
    border: solid 1px var(--c-accent-1);

    svg {
      color: $darkest;
    }
  }

  svg {
    transition: all 0.2s;
    font-size: $txt_xs;
    color: var(--c-accent-1)
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

    &:hover,
    &:active,
    &.hovered {
      text-decoration: none;
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

    &:hover,
    &:active,
    &.hovered {
      text-decoration: none;

      svg {
        transform: translateX($unit_xxs);
      }
    }
  }
}
</style>
