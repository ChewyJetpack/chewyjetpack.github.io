<template>
  <header ref="header" class="header">
    <div class="grid">
      <div class="grid__a-f">
        <div class="header__content">
          <g-link to="/" class="header__title">
            <span>{{ $static.metadata.siteName }}</span>
          </g-link>
          <div class="header__nav-area">
            <NavMenu :navFormat="navFormat" class="header__nav" />
            <ModeSwitch :currentMode="currentMode" :navFormat="navFormat" class="header__mode" />
            <IconBtn icon="bars" :callback="openNav" class="header__burger-menu u-left-spacer-m" :navFormat="navFormat" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ModeSwitch from '@/components/atoms/ModeSwitch'
import IconBtn from '@/components/atoms/IconBtn'
import NavMenu from '@/components/molecules/NavMenu'
import { EventBus } from '~/App'

export default {
  components: {
    ModeSwitch,
    NavMenu,
    IconBtn
  },
  props: {
    currentMode: {
      type: String
    },
    navFormat: {
      type: String,
      default: 'full'
    }
  },
  methods: {
    openNav() {
      EventBus.$emit('slidenav', true)
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
  .header {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    background: var(--c-accent-1);
    padding: $unit_s 0;
    z-index: 5;

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    &__title {
      font-size: $txt_l;
      line-height: 1em;
      font-family: $heading_font;
      font-weight: 700;
      text-decoration: none;
      color: var(--c-bg);
    }

    &__nav-area {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__burger-menu {
      display: block;

      @include breakpoint_l {
        display: none;
      }
    }
  }
</style>