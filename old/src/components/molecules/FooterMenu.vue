<template>
  <div
    :class="{ 'footer-menu': true, 'footer-menu--slide': navFormat == 'slide' }"
  >
    <a :href="`mailto${$static.strapi.global.contactEmail}`">{{
      $static.strapi.global.contactEmail
    }}</a>

    <!-- Social network links -->
    <ul class="footer-menu__social">
      <li
        v-for="socialNetwork in $static.strapi.global.socialNetworks"
        :key="socialNetwork.id"
        class="footer-menu__social-item u-left-spacer-m"
      >
        <a
          :href="socialNetwork.url"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-menu__social-link"
        >
          <font-awesome :icon="getSocialIcon(socialNetwork.url)" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navFormat: {
      type: String
    }
  },
  methods: {
    getSocialIcon(url) {
      const icons = [
        {
          name: "insta",
          icon: "instagram"
        },
        {
          name: "linked",
          icon: "linkedin-in"
        },
        {
          name: "git",
          icon: "github"
        }
      ];
      for (let i = 0; i < icons.length; i++) {
        if (url.includes(icons[i].name)) {
          return ["fab", icons[i].icon];
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-menu {
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__social {
    display: flex;
    justify-content: center;
    width: 100%;

    @include breakpoint_xl {
      justify-content: right;
    }
  }

  &--slide {
    a {
      color: var(--c-sl-a);
    }

    .footer-menu {
      &__social {
        justify-content: flex-end;

        &-link {
          font-size: $txt_m;
        }
      }
    }
  }
}
</style>
