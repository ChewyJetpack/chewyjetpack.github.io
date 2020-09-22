<template>
  <header class="header u-bottom-spacer-xxl">
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
    display: flex;
    align-items: flex-end;
    border-bottom: solid 1px rgba($slate_2, 0.2);

    &__title {
      font-size: $txt_xl;
      line-height: 1em;
      font-family: $heading_font;
      font-weight: 700;
      text-decoration: none;
      color: $carbon;
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
        color: $carbon;
        font-weight: 400;
        font-size: $txt_s;
      }
    }
  }
</style>