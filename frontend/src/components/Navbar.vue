<template>
  <header class="header">
      <g-link to="/" class="header__title">
        {{ $static.metadata.siteName }}
      </g-link>
      <nav class="header__nav">
        <g-link v-for="category in $static.strapi.categories" :key="category.id" class="header__nav-item" :to="`/${category.slug}/`">{{ category.title }}</g-link>
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