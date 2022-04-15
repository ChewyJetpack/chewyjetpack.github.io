<template>
  <footer class="footer u-top-spacer-xxxl">
    <div class="wrap">
      <div class="footer__content">
        <p class="footer__copy u-top-spacer-xs">
          All content &copy; Copyright {{ new Date().getFullYear() }} - Emil
          Smith
        </p>
        <FooterMenu class="footer__menu" />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMenu from "~/components/molecules/FooterMenu";

export default {
  components: {
    FooterMenu
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: $unit_m;
  margin-top: auto;
  align-items: flex-end;

  &__content {
    display: grid;
    grid-template: "contact" auto "copy" auto / 1fr;

    @include breakpoint_xl {
      grid-template: "copy contact" auto / 1fr 1fr;
    }
  }

  &__copy {
    font-size: $txt_xxs;
    color: var(--c-main-alt);
    text-align: center;
    opacity: 1;
    grid-area: copy;
    align-self: end;

    @include breakpoint_xl {
      justify-self: left;
    }
  }

  &__menu {
    order: 1;
    grid-area: contact;

    @include breakpoint_xl {
      justify-self: right;
    }
  }
}
</style>
