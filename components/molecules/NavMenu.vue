<template>
  <ul class="nav-list u-pm-reset">
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/">About Me</NuxtLink>
    </li>
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/work">My Work</NuxtLink>
    </li>
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/contact">Contact</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    navFormat: String
  }
};
</script>

<style lang="scss" scoped>
.nav-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: right;
    justify-content: flex-end;
    align-items: flex-end;
    gap: $unit_xs;
  padding: $unit_s 0;
  @include font-heading;
  font-size: $txt_s;

  @include breakpoint_m {
    flex-direction: row;
    justify-content: flex-end;
    gap: $unit_l;
    font-size: $txt_m;
    margin-right: $unit_l;
  }

  &__item {
    display: flex;
    align-items: center;

    @include breakpoint_m {
      width: auto;
    }
  }

  &__link {
    color: var(--c-accent-2);
    text-decoration: none;
    position: relative;
    line-height: 1;
    font-weight: 500;
    width: 100%;
    padding: 0 $unit_xxxs;

    @include breakpoint_l {
      padding-bottom: 0;
      width: auto;

      &:focus {
        outline: none;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: calc(50% - 4px);
        left: -$unit_xs;
        width: 8px;
        height: 8px;
        background: var(--c-accent-2);
        transform: scale(0);
        transition: transform 0.3s;
        border-radius: 8px;
      }
      &:hover,
      &:focus {
        text-decoration: none;
        color: var(--c-main);

        &:after {
          transform: scale(1);
        }
      }
    }

    &.nuxt-link-exact-active {
      color: var(--c-main);

        &:after {
          transform: scale(1);
        }
    }
  }
}
</style>
