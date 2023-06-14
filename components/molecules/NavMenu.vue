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

  &__item {
    @include font-heading;
    display: flex;
    align-items: flex-start;
    font-weight: 700;
    font-size: $txt_s;
  }

  &__link {
    color: var(--c-main);
    text-decoration: none;
    position: relative;

    &:focus {
      outline: none;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -#{$unit_xs};
      left: 0;
      width: 100%;
      height: $unit_xxs;
      background: var(--c-accent-1);
      transform: scaleX(0);
      transition: transform 0.3s;
    }
    &:hover,
    &:focus {
      text-decoration: none;

      &:after {
        transform: scaleX(1);
      }
    }

    &.nuxt-link-exact-active {
      color: var(--c-accent-1);
    }
  }
}
</style>
