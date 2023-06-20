<template>
  <header ref="header" class="header">
      <div class="header__content">
        <NuxtLink to="/" class="header__title">
          <Logo />
        </NuxtLink>
        <div class="header__mode-wrap">
          <ModeSwitch
            :currentMode="currentMode"
            class="header__mode"
          />
        </div>
        <NavMenu class="header__nav" />
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
  border-bottom: solid 2px var(--c-main-alt-2);
  padding-top: $unit_m;

  &__content {
    display: grid;
    grid-template-columns: 1fr calc(22px + $unit_xs);
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include breakpoint_l {
      grid-template-columns: 1fr 1fr 22px;
      align-items: flex-end;
      grid-gap: $unit_xs;
      @include wrap;
    }
  }

  &__title {
    display: block;
    max-width:100px;
    padding: 0 0 0 $unit_xs;

    @include breakpoint_l {
      max-width: 170px;
      order: 1;
      padding: 0 $unit_xs $unit_s 0;
    }

    > svg {
      width: 100%;
      height: auto;
      float: left;
    }
  }

  &__mode-wrap {
    padding-right: $unit_xs;

    @include breakpoint_l {
      order: 3;
      padding: 0 0 $unit_s 0;
    }
  }

  &__nav {
    @include breakpoint_l {
      order: 2;
    }
  }
}
</style>
