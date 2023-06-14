<template>
  <header ref="header" class="header">
    <div class="wrap header__content">
      <NuxtLink to="/" class="header__title">
        <Logo />
      </NuxtLink>
      <div class="header__nav-area">
        <NavMenu class="header__nav" />
        <ModeSwitch
          :currentMode="currentMode"
          :navFormat="navFormat"
          class="header__mode"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ModeSwitch from "@/components/atoms/ModeSwitch";
import NavMenu from "@/components/molecules/NavMenu";
import Logo from "@/components/atoms/Logo";

export default {
  components: {
    ModeSwitch,
    NavMenu,
    Logo
  },
  props: {
    currentMode: {
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: $unit_s 0;
  z-index: 5;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
  }

  &__title {
    max-width:100px;

    > svg {
      width: 100%;
      height: auto;
    }

    @include breakpoint_m {
      font-size: $txt_xl;
    }

    &:focus,
    &:hover,
    &:active {
      text-decoration: none;
      outline: none;
    }
  }
}
</style>
