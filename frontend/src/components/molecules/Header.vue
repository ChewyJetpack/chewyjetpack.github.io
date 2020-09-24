<template>
  <header ref="header" :class="{ 'header': true, 'header--lowkey': lowKeyHeader }">
      <div class="grid">
          <div class="grid__full">
            <div class="header__content">
              <g-link to="/" class="header__title">
                <span>{{ $static.metadata.siteName }}</span>
              </g-link>
              <nav class="header__nav">
                <ul class="header__nav-list">
                  <li v-for="category in $static.strapi.categories" :key="category.id" class="header__nav-item u-right-spacer-l">
                    <g-link class="u-hover-anim" :to="`/${category.slug}/`">{{ category.title }}</g-link>
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
    },
    lowKeyHeader: {
      type: Boolean
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
    padding: 0 0 $unit_s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:1;
    @include header-shadow;
    transition: transform 0.2s;

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
      transform-origin: bottom left;
      transition: transform 0.2s;
      padding-top: $unit_xl;

      span {
        z-index: 1;
        position: relative;
      }

      &:before {
        position: absolute;
        top: 0%;
        left: 50%;
        width: 160%; 
        height: 230%; 
        background: var(--c-hbg);
        clip-path: polygon(21% 19%, 100% 0%, 89% 67%, 0 100%);
        transform: translate(-54%, -9%);
        content: "";
        display: block;
        z-index: -1;
        transition: all 0.3s;
      }
    }

    &__nav {
      margin-left: auto;
      line-height: 1;
      transition: all 0.3s;

      &-list {
        display: flex;
      }

      &-item {
        display: flex;
        align-items: flex-end;
        font-weight: 700;
        font-size: $txt_s;
      }
    }

    &--lowkey {
      transform: translateY(-#{$unit_xl});
      z-index: 2;
      background: var(--c-bg);

      .header{
        &__title {
          transform: scale(0.8);

          &:before {
            transform: translate(-52%, -20%) rotate(15deg) scaleY(0.9);
          }
        }

        &__nav {
          transform: translateY(-#{$unit_xs});
        }
      }
    }
  }
</style>