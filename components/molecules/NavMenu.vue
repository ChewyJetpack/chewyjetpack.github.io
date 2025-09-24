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
  text-align: center;
  padding: 0 $unit_s $unit_s;

  @include breakpoint_l {
    flex-direction: row;
    justify-content: flex-end;
    gap: $unit_m;
    font-size: $txt_s;
    margin-right: $unit_l;
  }

  &__item {
    display: flex;
    align-items: center;
    width:100%;

    @include breakpoint_m {
      width: auto;
    }
  }

  &__link {
    color: var(--c-accent-2);
    text-decoration: none;
    position: relative;
    padding: $unit_xxs;
    line-height: 1;
    font-weight: 500;
    width: 100%;

    @include breakpoint_l {
      padding-bottom: $unit_xxs;
      width: auto;

      &:focus {
        outline: none;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 5%;
        width: 90%;
        height: 2px;
        background: var(--c-accent-2);
        transform: scaleX(0);
        transition: transform 0.3s;
        border-radius: 2px;
      }
      &:hover,
      &:focus {
        text-decoration: none;
        color: var(--c-main);

        &:after {
          transform: scaleX(1);
        }
      }
    }

    &.nuxt-link-exact-active {
      color: var(--c-main);
    }
  }
}
</style>
