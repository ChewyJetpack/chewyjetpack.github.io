<template>
  <footer class="footer u-top-spacer-xxxl">
    <div class="grid">
        <div class="grid__full">
          <div class="footer__content">
            <p class="footer__copy u-top-spacer-xs">
              {{ $static.strapi.global.siteName }} &copy; Copyright {{ new Date().getFullYear() }} - Emil Smith
            </p>
            <FooterMenu />
          </div>
        </div>
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

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__copy {
      font-size: $txt_xxs;
      color: var(--c-fine);
    }
  }
</style>