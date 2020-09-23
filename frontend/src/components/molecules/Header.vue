<template>
  <header class="header u-bottom-spacer-xxl">
      <div class="grid">
          <div class="grid__centre">
            <div class="header__content">
              <g-link to="/" class="header__title">
                <span>{{ $static.metadata.siteName }}</span>
              </g-link>
              <nav class="header__nav">
                <ul class="header__nav-list">
                  <li v-for="category in $static.strapi.categories" :key="category.id" class="header__nav-item u-right-spacer-l">
                    <g-link class="header__nav-link" :to="`/${category.slug}/`">{{ category.title }}</g-link>
                  </li>
                  <li class="header__nav-item header__nav-item--mode">
                    <ModeSwitch :currentMode="currentMode" class="u-left-spacer-xs" />
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
  </header>
</template>

<script>
import ModeSwitch from '@/components/atoms/ModeSwitch'

export default {
  components: {
    ModeSwitch
  },
  props: {
    currentMode: {
      type: String
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
  strapi {
    categories {
      title
      slug
      id
    }
  }
}
</static-query>

<style lang="scss" scoped>
  .header {
    padding: $unit_xl 0 $unit_m;

    &__content {
      display: flex;
      align-items: flex-end;
    }

    &__title {
      font-size: $txt_xl;
      line-height: 1em;
      font-family: $heading_font;
      font-weight: 900;
      text-decoration: none;
      color: $crest;
      position: relative;

      &:before {
        position: absolute;
        width: 120%; 
        height: 350%; 
        background: var(--c-hbg);
        transform: translate(-6%, -35%) skew(-5deg, -11deg) perspective(10px) rotateY(0.4deg) rotateX(1deg);
        content: "";
        display: block;
        z-index: 0;
      }

      span {
        position: relative;
        z-index: 1;
      }
    }

    &__nav {
      margin-left: auto;
      line-height: 1;

      &-list {
        display: flex;
      }

      &-item {
        display: flex;
        align-items: flex-end;
        font-weight: 700;
        font-size: $txt_s;
      }

      &-link {
        text-decoration: none;
      }
    }
  }
</style>