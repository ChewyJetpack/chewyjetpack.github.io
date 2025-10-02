<template>
  <header ref="header" class="header">
      <div class="header__content">
        <NuxtLink to="/" class="header__title">
          <Logo />
        </NuxtLink>
        <div class="header__nav-controls">
          <div id="main-navigation" class="header__nav-wrap">
            <NavMenu class="header__nav" />
          </div>
          <div class="header__mode-wrap">
            <ModeSwitch
              :currentMode="currentMode"
              class="header__mode"
            />
          </div>
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

    @include breakpoint_m {
      flex-direction: row;
      justify-content: space-between;
      //align-items: flex-end;
    }

    @include breakpoint_l {
      
      @include wrap;
    }
  }

  &__nav-controls {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: $unit_s;
    padding-right: $unit_s;

    @include breakpoint_m {
      padding-right: $unit_m;
    }

    @include breakpoint_l {
      flex-direction: row;
      align-items: center;
      width: auto;
      gap: $unit_l;
      padding-right: 0;
    }
  }

  &__title {
    display: block;
    max-width:200px;
    padding: $unit_xs 0 0 $unit_xs;
    position: relative;
    z-index:2;
    order: 1;

    @include breakpoint_m {
      max-width:160px;
      padding-left: $unit_m;
    }
    @include breakpoint_l {
      max-width:180px;
      order: 1;
      padding: $unit_s $unit_xs $unit_s 0;
    }

    > svg {
      width: 100%;
      height: auto;
      float: left;
    }
  }

  &__nav-controls {
    order: 2;

    @include breakpoint_l {
      order: 2;
    }
  }

  &__mode-wrap {
    order: 2;

    @include breakpoint_l {
      padding: $unit_xs 0 $unit_xxs 0;
    }
  }

  &__nav-wrap {
    padding:$unit_xs 0;
    width: 100%;
    order: 1;

    @include breakpoint_l {
      padding-top: $unit_s;
    }
  }
}
</style>
