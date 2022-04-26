<template>
  <div :class="{ 'slide-nav': true, 'slide-nav--open': open }">
    <div class="slide-nav__slot">
      <slot />
    </div>
    <nav class="slide-nav__menu">
      <IconBtn icon="times" :callback="closeNav" c-text="--c-accent-2" />
      <NavMenu navFormat="slide" />
      <FooterMenu navFormat="slide" slide />
    </nav>
  </div>
</template>

<script>
import NavMenu from "~/components/molecules/NavMenu";
import IconBtn from "~/components/atoms/IconBtn";
import FooterMenu from "~/components/molecules/FooterMenu";

export default {
  name: 'SlideNav',
  components: {
    NavMenu,
    FooterMenu,
    IconBtn
  },
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$nuxt.$on("slidenav", status => {
      this.open = status;
    });
  },
  methods: {
    closeNav() {
      this.$nuxt.$emit("slidenav", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-nav {
  --nav-width: 300px;
  width: 100%;

  &__menu {
    --c-accent-2: var(--c-sl-a);

    position: fixed;
    background: var(--c-sl-bg);
    top: 0;
    right: 0;
    height: 100%;
    width: var(--nav-width);
    z-index: 10;
    padding: $unit_l;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    transform: translateX(100%);
    color: var(--c-main);
  }

  &__menu,
  &__slot {
    transition: transform 0.6s;
  }

  &__slot {
    transform: translateX(0);
  }

  &--open {
    .slide-nav {
      &__menu {
        transform: translateX(0);
      }

      &__slot {
        transform: translateX(calc(-1 * var(--nav-width)));
      }
    }
  }
}
</style>
