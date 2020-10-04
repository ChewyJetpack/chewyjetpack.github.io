<template>
  <footer class="footer u-top-spacer-xxxl">
    <div class="grid">
      <p class="footer__copy u-top-spacer-xs">
        All content &copy; Copyright {{ new Date().getFullYear() }} - Emil Smith
      </p>
      <FooterMenu class="footer__menu" />
    </div>
  </footer>
</template>

<script>
import FooterMenu from '~/components/molecules/FooterMenu';

export default {
  components: {
    FooterMenu
  }
}
</script>

<static-query>
query {
  strapi {
    global {
      siteName
    }
  }
}
</static-query>

<style lang="scss" scoped>
  .footer {
    padding-bottom: $unit_m;
    margin-top: auto;
    align-items: flex-end;

    &__copy {
      font-size: $txt_xxs;
      color: var(--c-main);
      text-align: center;
      opacity: 1;
      grid-area: 2/a;
      align-self: end;

      @include breakpoint_xl {
        grid-area: 1/a/1/c;
        justify-self: left; 
      }
    }

    &__menu {
      order: 1;
      grid-area: 1/a;

      @include breakpoint_xl {
        grid-area: 1/d/1/f;
        justify-self: right; 
      }
    }
  }
</style>