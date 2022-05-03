<template>
  <ul
    :class="{
      'nav-list': true,
      'nav-list--mini': navFormat === 'mini',
      'nav-list--slide': navFormat === 'slide'
    }"
  >
    <li
      :class="{
        'nav-list__item': true,
        'u-right-spacer-m': navFormat == 'mini',
        'u-right-spacer-l': navFormat == 'full',
        'u-bottom-spacer-m': navFormat == 'slide'
      }">
      <NuxtLink class="nav-list__link" to="/">About</NuxtLink>
    </li>
    <li
      :class="{
        'nav-list__item': true,
        'u-right-spacer-m': navFormat == 'mini',
        'u-right-spacer-l': navFormat == 'full',
        'u-bottom-spacer-m': navFormat == 'slide'
      }">
      <NuxtLink class="nav-list__link" to="/case-studies">Case Studies</NuxtLink>
    </li>
    <li
      :class="{
        'nav-list__item': true,
        'u-right-spacer-m': navFormat == 'mini',
        'u-right-spacer-l': navFormat == 'full',
        'u-bottom-spacer-m': navFormat == 'slide'
      }">
      <NuxtLink class="nav-list__link" to="/articles">Articles</NuxtLink>
    </li>
    <li
      :class="{
        'nav-list__item': true,
        'u-right-spacer-m': navFormat == 'mini',
        'u-right-spacer-l': navFormat == 'full',
        'u-bottom-spacer-m': navFormat == 'slide'
      }">
      <NuxtLink class="nav-list__link" to="/cv">CV</NuxtLink>
    </li>
    <li
      :class="{
        'nav-list__item': true,
        'u-bottom-spacer-m': navFormat == 'slide'
      }">
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
  display: none;

  @include breakpoint_l {
    display: flex;
  }

  &__item {
    @include font-heading;
    display: flex;
    align-items: flex-end;
    font-weight: 700;
    font-size: $txt_s;
  }

  &__link {
    color: var(--c-main);
    text-decoration: none;
    position: relative;
    padding-bottom: $unit_xs;

    &:focus {
      outline: none;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
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

  &--slide {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;

    .nav-list {
      &__link {
        text-align: right;
        font-size: $txt_m;
        line-height: 1;
        color: var(--c-sl-a);
      }
    }
  }
}
</style>
