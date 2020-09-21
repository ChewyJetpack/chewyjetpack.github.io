<template>
  <header class="header">
      <g-link to="/" class="header__title">
        {{ $static.metadata.siteName }}
      </g-link>
      <nav class="header__nav">
        <g-link class="header__nav-item" to="/professional-projects/">Professional Projects</g-link>
      </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>