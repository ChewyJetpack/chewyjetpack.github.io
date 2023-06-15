<template>
  <div>
    <section class="homepage">
      <HeadingStrip :heading="home.title" shape="hexagon"/>
      <div class="wrap homepage__content">
        <nuxt-content :document="home" />
      </div>
      <span class="homepage__avatar">
        <img preset="avatar" :src="home.avatar" :alt="home.title"/>
      </span>
    </section>
    <section class="wrap">
      <h1>Latest Articles</h1>
      <ArticleList 
        :articles="articles"
        :tags="tags"
      />
    </section>
  </div>
</template>

<script>
import ArticleList from '~/components/organisms/ArticleList'
import HeadingStrip from '~/components/molecules/HeadingStrip'

export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const home = await $content('home').fetch();
    const articles = await $content('articles').fetch();
    const tags = await $content('tags').fetch();

    return {
      home, articles, tags
    };
  },
  components: {
    ArticleList,
    HeadingStrip
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  @extend .u-bm-xxl;
  align-items: start;

  &__heading {
    order: 0;
    grid-column: 1 / span 2;
    margin-bottom: 0;

    @include breakpoint_m {
      margin-bottom: $unit_m;
    }
  }

  &__avatar {
    order: 1;
    max-width: 60%;

    @include breakpoint_m {
      max-width: 100%;
      order: 2;
      position: relative;
      top: $unit_l;
    }
  }

  &__content {
    order: 2;

    @include breakpoint_m {
      order: 1;
    }
  }
}

.nuxt-content-container {
  font-size: $txt_xs;

  @include breakpoint_m {
    font-size: $txt_s;
  }

}
</style>