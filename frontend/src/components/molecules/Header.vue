<template>
  <header ref="header" :class="{ 'header': true, 'header--mini': navFormat == 'mini', 'u-bottom-spacer-l': navFormat != 'mini' }">
    <div class="header__magic-wrap">
      <div class="grid">
          <div class="grid__full">
            <div class="header__content">
              <g-link to="/" class="header__title">
                <span>{{ $static.metadata.siteName }}</span>
              </g-link>
              <div class="header__nav-area">
                <NavMenu :navFormat="navFormat" class="header__nav" />
                <ModeSwitch :currentMode="currentMode" :navFormat="navFormat" class="header__mode" />
                <IconBtn icon="bars" :callback="openNav" class="header__burger-menu u-left-spacer-l" :navFormat="navFormat" />
              </div>
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
    position: relative;
    width: 100%;
    z-index:1;

    &__magic-wrap {
      padding: 0 0 $unit_s;
    }

    &__content {
      display: flex;
      align-items: flex-start;
      --c-link: var(--c-h1);
      justify-content: space-between;

      @include breakpoint_m {
        align-items: flex-end;
      }
    }

    &__title {
      font-size: $txt_m;
      line-height: 1em;
      font-family: $heading_font;
      font-weight: 900;
      text-decoration: none;
      color: $crest;
      transform-origin: bottom left;
      transition: transform 0.2s;
      padding-top: $unit_xl;

      @include breakpoint_m {
          font-size: $txt_l;
      }

      @include breakpoint_l {
          font-size: $txt_xl;
      }

      span {
        z-index: 1;
        position: relative;
      }

      &:before {
        position: absolute;
        top: 0%;
        left: 50%;
        width: 160%; 
        height: 230%; 
        background: var(--c-hbg);
        clip-path: polygon(21% 19%, 100% 0%, 89% 67%, 0 100%);
        transform: translate(-54%, -9%);
        content: "";
        display: block;
        z-index: -1;
      }
    }

    &__nav-area {
      margin-left: auto;
      display: flex;
      padding: $unit_l $unit_s 0 0;
    }

    &__burger-menu {
      display: block;

      @include breakpoint_m {
        display: none;
      }
    }

    &--mini {
      z-index: 2;
      position: sticky;
      top: 0;
      left: 0;
      height: 0;
      overflow: visible;

      .header{
        &__magic-wrap {
          display: flex;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background: var(--c-h1);
          height: auto;
          padding: $unit_s 0;
        }

        &__title {
          font-size: $txt_m;
          padding: 0;
          color: var(--c-bg);

          &:before {
            display: none;
          }
        }

        &__nav-area {
          padding: 0;
        }

        &__content {
          align-items: center;
          --c-link: var(--c-bg);
        }
      }
    }
  }
</style>