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
        <div class="header__nav-wrap">
          <NavMenu class="header__nav" />
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
  //border-bottom: solid 2px var(--c-accent-2);
  //padding-top: $unit_m;
  z-index: 1;
  background: var(--c-bg-2);

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    grid-gap: $unit_xs;

    @include breakpoint_l {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 1fr calc(22px + $unit_xs);
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 22px;
      //align-items: flex-end;
      @include wrap;
    }
  }

  &__title {
    display: block;
    max-width:220px;
    padding: $unit_s 0 0 $unit_xs;
    position: relative;
    z-index:2;

    @include breakpoint_l {
      max-width:280px;
      order: 1;
      padding: $unit_xs $unit_xs $unit_s 0;
    }

    > svg {
      width: 100%;
      height: auto;
      float: left;
    }
  }

  &__mode-wrap {
    position: absolute;
    top: $unit_m;
    right: $unit_m;

    @include breakpoint_l {
      position: static;
      order: 3;
      padding: $unit_m 0 $unit_xxs 0;
    }
  }

  &__nav-wrap {
    padding-bottom:$unit_s;
    width: 100%;

    @include breakpoint_l {
      order: 2;
      margin-right: $unit_s;
      padding-top: $unit_s;
    }
  }
}
</style>
