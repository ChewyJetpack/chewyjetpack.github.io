<template>
  <ul class="nav-list">
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/">About</NuxtLink>
    </li>
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/work">Work</NuxtLink>
    </li>
    <li
      class="nav-list__item">
      <NuxtLink class="nav-list__link" to="/articles">Articles</NuxtLink>
    </li>
    <li
      class="nav-list__item">
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

  @include breakpoint_l {
    justify-content: flex-end;
    gap: $unit_m;
    font-size: $txt_m;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    color: var(--c-accent-2);
    text-decoration: none;
    position: relative;
    padding: $unit_xs;
    line-height: 1;

    @include breakpoint_l {
      padding-bottom: $unit_s;
    }

    &:focus {
      outline: none;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--c-main);
      transform: scaleX(0);
      transition: transform 0.3s;
    }
    &:hover,
    &:focus {
      text-decoration: none;
      color: var(--c-main);

      &:after {
        transform: scaleX(1);
      }
    }

    &.nuxt-link-exact-active {
      color: var(--c-main);
    }
  }
}
</style>
