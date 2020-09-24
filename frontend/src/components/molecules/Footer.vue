<template>
  <footer class="footer u-top-spacer-xxxl">
    <div class="grid">
        <div class="grid__full">
          <div class="footer__content">
            <p class="footer__copy u-top-spacer-xs">
              {{ $static.strapi.global.siteName }} &copy; Copyright {{ new Date().getFullYear() }} - Emil Smith
            </p>
            <div class="footer__contact">

              <a :href="`mailto${ $static.strapi.global.contactEmail }`">{{ $static.strapi.global.contactEmail }}</a>

              <!-- Social network links -->
              <ul class="social-links">
                <li
                  v-for="socialNetwork in $static.strapi.global.socialNetworks" 
                  :key="socialNetwork.id"
                  class="social-links__link u-left-spacer-m"
                >
                  <a
                    :href="socialNetwork.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-links__link"
                  >
                    <font-awesome :icon="getSocialIcon(socialNetwork.url)" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>

export default {
  methods: {
    getSocialIcon(url) {
      const icons = [
        {
          name: 'insta',
          icon: 'instagram'
        },
        {
          name: 'linked',
          icon: 'linkedin-in'
        },
        {
          name: 'git',
          icon: 'github'
        }
      ]
      for (let i = 0; i < icons.length; i++) {
        if (url.includes(icons[i].name)) {
          return [ 'fab', (icons[i].icon) ]
        }
      }
    }
  }
}
</script>

<static-query>
query {
  strapi {
    global {
      siteName
      contactEmail
      socialNetworks {
        id
        url
        title
      }
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

    &__contact {
      justify-content: flex-end;
      display: flex;
    }
  }

  .social-links {
    display: flex;
    justify-content: flex-end;
  }
</style>