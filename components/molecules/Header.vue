<template>
  <header ref="header" class="header">
    <div class="wrap header__content">
      <NuxtLink to="/" class="header__title">
        <span>Emil Smith</span>
      </NuxtLink>
      <div class="header__nav-area">
        <NavMenu :navFormat="navFormat" class="header__nav" />
        <ModeSwitch
          :currentMode="currentMode"
          :navFormat="navFormat"
          class="header__mode"
        />
        <IconBtn
          icon="bars"
          :callback="openNav"
          class="header__burger-menu u-left-spacer-m"
          :navFormat="navFormat"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ModeSwitch from "@/components/atoms/ModeSwitch";
import IconBtn from "@/components/atoms/IconBtn";
import NavMenu from "@/components/molecules/NavMenu";

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
      default: "full"
    }
  },
  methods: {
    openNav() {
      this.$nuxt.$emit("slidenav", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--c-header-bg);
  padding: $unit_s 0;
  z-index: 5;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__title {
    font-family: $display-font;
    line-height: 1;
    font-size: $txt_m;
    font-weight: 900;
    letter-spacing: -0.1rem;
    text-decoration: none;
    color: var(--c-logo);

    @include breakpoint_m {
      font-size: $txt_l;
    }

    &:focus {
      outline: none;
    }
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
