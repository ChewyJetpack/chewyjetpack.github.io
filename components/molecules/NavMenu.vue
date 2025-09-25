<template>
  <nav role="navigation" aria-label="Main navigation">
    <ul class="nav-list u-pm-reset">
      <li class="nav-list__item">
        <NuxtLink 
          class="nav-list__link" 
          to="/"
          :aria-current="$route.path === '/' ? 'page' : null"
        >
          About Me
        </NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink 
          class="nav-list__link" 
          to="/work"
          :aria-current="$route.path === '/work' ? 'page' : null"
        >
          My Work
        </NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink 
          class="nav-list__link" 
          to="/contact"
          :aria-current="$route.path === '/contact' ? 'page' : null"
        >
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
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
    gap: $unit_xxs;
  padding: $unit_s 0;
  @include font-ui;
  font-size: $txt_s;

  @include breakpoint_m {
    flex-direction: row;
    justify-content: flex-end;
    gap: $unit_l;
    font-size: $txt_s;
    margin-right: $unit_l;
  }

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 0.1em;

    @include breakpoint_m {
      width: auto;
    }
  }

  &__link {
    color: var(--c-main);
    text-decoration: none;
    position: relative;
    line-height: 1;
    font-weight: 600;
    width: 100%;
    padding: 0 $unit_xxxs;

    @include breakpoint_l {
      padding-bottom: 0;
      width: auto;

      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -12px;
        left: calc(25% + 4px);
        transform: translateX(-50%) scale(0);
        width: 50%;
        height: 6px;
        background: var(--c-accent-2);
        transition: transform 0.3s;
        border-radius: 2px;
      }
      &:hover,
      &:focus {
        text-decoration: none;
        color: var(--c-accent-1);
        outline: none;

        &:after {
          transform: translateX(-50%) scale(1);
        }
      }
    }

    &.nuxt-link-exact-active {
      color: var(--c-accent-1);

        &:after {
          transform: translateX(-50%) scale(1);
        }
    }
  }
}
</style>
