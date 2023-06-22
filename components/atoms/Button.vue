<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="['button', { 'button--ico-l': icoLeft, 'button--ico-r': !icoLeft }]"
    :href="href"
    ref="btn"
    :rel="external ? 'nofollow' : ''"
    :target="external ? '_blank' : ''"
    @click="callback ? callback($refs.btn) : null"
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
      type: Boolean,
      default: false
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
@keyframes pop {
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  15% {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  25% {
    opacity: 1;
    transform: translate(-50%, calc(-100% - #{$unit_s}));
  }
  75% {
    opacity: 1;
    transform: translate(-50%, calc(-100% - #{$unit_s}));
  }
  90% {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
}

%hover-state {
    color: var(--c-accent-2);

    svg {
      color: var(--c-accent-2);
    }
  }

.button {
  color: var(--c-main);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  font-weight: 600;
  outline: none;
  background: none;
  border: solid 2px var(--c-accent-2);
  border-right: 0;
  border-top: 0;
  padding: $unit_xs $unit_s;
  font-size: $txt_s;
  cursor: pointer;
  transition: color, background 0.3s;
  text-decoration: none;

  &.pop-anim {
    @extend %hover-state;

    &:after {
      position: absolute;
      display: block;
      content: 'Link copied!';
      top: 0;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, 0);
      min-width: calc(100% - (#{$unit_xs} * 2));
      background: var(--c-accent-3);
      border-radius: $unit_xxs;
      color: var(--c-bg);
      animation: pop ease-in-out forwards 1.6s;
      padding: $unit_xxs;
    }
  }


  &:hover {
    @extend %hover-state;
  }

  svg {
    transition: all 0.2s;
    color: var(--c-accent-2)
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
        margin-left: $unit_xs;
      }
    }

    &:hover,
    &:active,
    &.hovered {
      text-decoration: none;

      svg {
        transform: translateX(4px);
      }
    }
  }
}
</style>
