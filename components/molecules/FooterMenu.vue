<template>
  <div
    :class="{ 'footer-menu': true, 'footer-menu--slide': navFormat == 'slide' }"
  >
    <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>

    <!-- Social network links -->
    <ul class="footer-menu__social">
      <li
        v-for="(link, index) in contact.socialLinks"
        :key="index"
        class="footer-menu__social-item"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-menu__social-link"
        >
          <font-awesome :icon="getSocialIcon(link.url)" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    navFormat: {
      type: String
    }
  },
  data() {
      return {
          contact: {}
      };
  },
  async fetch() {
      this.contact = await this.$content('contact').fetch()
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
  text-align: center;

  @include breakpoint_m {
    justify-content: flex-end;
    flex-direction: row;

    & > a {
      margin-right: $unit_s;
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &-item {
      margin: $unit_xs;
    }

    @include breakpoint_m {
      justify-content: flex-end;
      flex-direction: row;

      &-item {
        margin: 0 $unit_xs;
      }
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
          font-size: $txt_xs;
        }
      }
    }

    @include breakpoint_m {
      display: none;
    }
  }
}
</style>
