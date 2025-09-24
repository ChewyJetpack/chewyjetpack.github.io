<template>
  <header ref="header" class="header">
      <div class="header__content">
        <!-- <NuxtLink to="/" class="header__title">
          <Logo />
        </NuxtLink> -->
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
    flex-direction: row;
    align-items: center;
    width: 100%;
    grid-gap: $unit_xs;

    @include breakpoint_m {
      flex-direction: row;
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

    @include breakpoint_m {
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
    margin-right: $unit_s;
      order: 3;

    @include breakpoint_m {
      position: static;
      order: 3;
      padding: $unit_xs 0 $unit_xxs 0;
    }
  }

  &__nav-wrap {
    padding:$unit_xs 0;
    width: 100%;
    order: 2;

    @include breakpoint_m {
      order: 2;
      margin-right: $unit_s;
      padding-top: $unit_s;
    }
  }
}
</style>
