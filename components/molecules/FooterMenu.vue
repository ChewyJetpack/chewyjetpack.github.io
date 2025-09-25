<template>
  <div
    :class="{ 'footer-menu': true, 'footer-menu--slide': navFormat == 'slide' }"
  >

    <!-- Social network links -->
    <ul class="footer-menu__social u-pm-reset">
      <!-- Mail icon -->
      <li class="footer-menu__social-item">
        <a
          :href="`mailto:${contact.email || 'hi@emilsmith.pro'}`"
          class="footer-menu__social-link"
        >
          <font-awesome :icon="['fas', 'envelope']" />
        </a>
      </li>
      <!-- Other social links -->
      <li
        v-for="(link, index) in (contact.socialLinks || [])"
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
          contact: {
            email: 'hi@emilsmith.pro',
            socialLinks: [
              { url: 'https://www.linkedin.com/in/emil-smith/' }
            ]
          }
      };
  },
  async created() {
      try {
        const contact = await this.$content('contact').fetch();
        console.log('FooterMenu contact data:', contact);
        // Check if this is the contact page content (which doesn't have social links)
        // and fall back to our hardcoded data if so
        if (contact && contact.socialLinks) {
          this.contact = contact;
        } else {
          console.log('Contact data missing socialLinks, using fallback data');
          // Keep the fallback data from data()
        }
      } catch (error) {
        console.error('FooterMenu contact fetch error:', error);
        // Keep the fallback data from data()
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
          name: "linkedin",
          icon: "linkedin-in"
        },
        {
          name: "git",
          icon: "github"
        },
        {
          name: "mastodon",
          icon: "mastodon"
        }
      ];
      for (let i = 0; i < icons.length; i++) {
        if (url.includes(icons[i].name)) {
          return ["fab", icons[i].icon];
        }
      }
      return ["fas", "link"]; // fallback icon
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
  font-size: $txt_s;

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
