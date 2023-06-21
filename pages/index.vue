<template>
  <div>
    <section class="homepage">
      <HeadingStrip :heading="home.title" shape="pentagon"/>
      <div class="wrap homepage__content">
        <nuxt-content :document="home" />
        <span class="homepage__avatar">
          <img :src="home.avatar" :alt="home.title"/>
        </span>
      </div>
      <div class="wrap">
        <Button
          href="/work"
          label="See my work"
        />
      </div>
    </section>
    <section class="wrap">
      <h1>Latest Posts</h1>
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
import Button from '~/components/atoms/Button'

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
    const articles = await $content('articles/posts').fetch();
    const tags = await $content('tags').fetch();

    return {
      home, articles, tags
    };
  },
  components: {
    ArticleList,
    HeadingStrip,
    Button
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
    max-width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 0 auto;

    &::before {
      content:"";
      display: block;
      height:50%;
      width:150%;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translateX(-50%) rotate(-15deg);
      background: var(--c-accent-2);
      z-index:-1;
    }

    img {
      position: relative;
      bottom: -9px;
      max-width: 50%;
      margin: 0 auto;

      @include breakpoint_m {
        bottom: -1px;
        max-width: none;
        margin: 0;
      }
    }
  }

  &__content {
    @extend .u-tm-xxl;
    @extend .e-grid-3-1;
  }
}
</style>