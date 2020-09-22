<template>
  <header class="header u-bottom-spacer-xxl">
      <div class="grid">
          <div class="grid__centre">
            <div class="header__content">
              <g-link to="/" class="header__title">
                {{ $static.metadata.siteName }}
              </g-link>
              <nav class="header__nav">
                <ul class="header__nav-list">
                  <li v-for="category in $static.strapi.categories" :key="category.id" class="header__nav-item">
                    <g-link class="header__nav-link" :to="`/${category.slug}/`">{{ category.title }}</g-link>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
  </header>
</template>

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
    background: $c_hbg;

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
      color: $coral;
    }

    &__nav {
      margin-left: auto;

      &-list {
        display: flex;
      }

      &-item {
        margin-left: $unit_l;
      }

      &-link {
        text-decoration: none;
        font-weight: 700;
        font-size: $txt_m;
      }
    }
  }
</style>