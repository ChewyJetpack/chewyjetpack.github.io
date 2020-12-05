<template>
  <div class="page home">
    <div class="wrap">
      <div class="home__splash u-top-spacer-xxl">
        <h1 class="home__splash-head">Creative Tech Lead</h1>
        <Octo class="home__splash-octo" />
      </div>
    </div>

    <section class="section u-top-spacer-9001">
      <img src="img/tent3.svg" alt="Emil Smith" class="tentacle tentacle--l" />
      <div class="wrap">
        <div class="home__offset home__offset--alt">
          <div class="home__offset-content">
            <h1 class="u-bottom-spacer-m">
              {{ $page.strapi.home.pageSections[0].title }}
            </h1>
            <div v-html="$page.strapi.home.pageSections[0].content" />
            <Button
              v-if="$page.strapi.home.pageSections[0].cta"
              :label="$page.strapi.home.pageSections[0].cta.label"
              :href="$page.strapi.home.pageSections[0].cta.url"
              :is-external="$page.strapi.home.pageSections[0].cta.external"
              class="u-flex-left u-top-spacer-m"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section u-top-spacer-9001">
      <img src="img/tent4.svg" alt="Emil Smith" class="tentacle tentacle--r" />
      <div class="wrap">
        <div class="home__offset">
          <div class="home__offset-content">
            <h1 class="u-bottom-spacer-m">
              {{ $page.strapi.home.pageSections[1].title }}
            </h1>
            <div v-html="$page.strapi.home.pageSections[1].content" />
            <Button
              v-if="$page.strapi.home.pageSections[1].cta"
              :label="$page.strapi.home.pageSections[1].cta.label"
              :href="$page.strapi.home.pageSections[1].cta.url"
              :is-external="$page.strapi.home.pageSections[1].cta.external"
              class="u-flex-left u-top-spacer-m"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section u-top-spacer-9001">
      <img src="img/tent2.svg" alt="Emil Smith" class="tentacle tentacle--l" />
      <div class="wrap">
        <div class="home__offset home__offset--alt">
          <div class="home__offset-content">
            <h1 class="u-bottom-spacer-m">
              {{ $page.strapi.home.pageSections[2].title }}
            </h1>
            <div v-html="$page.strapi.home.pageSections[2].content" />
            <Button
              v-if="$page.strapi.home.pageSections[2].cta"
              :label="$page.strapi.home.pageSections[2].cta.label"
              :href="$page.strapi.home.pageSections[2].cta.url"
              :is-external="$page.strapi.home.pageSections[2].cta.external"
              class="u-flex-left u-top-spacer-m"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<page-query>
query {
  strapi {
    global {
      siteName
    }
    # Get homepage data
    home {
      pageSections {
        title
        content
        cta {
          label
          url
          external
        }
      }
      # Metadata for SEO
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Button from "~/components/atoms/Button";
import Octo from "~/components/atoms/Octo";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    Button,
    Octo
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo;
    const image = shareImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  &__splash {
    position: relative;

    &-octo {
      transform: translate(30%, 0) scale(-1.4, 1.4);
      pointer-events: none;
      margin-top: -5%;
      position: relative;
      min-width: 90vw;
      z-index: 2;
      //filter: hue-rotate(-80deg) brightness(110%) contrast(105%);

      @include breakpoint_xl {
        transform: translate(15%, 0) scale(-1, 1);
        max-width: 100%;
        min-width: 0;
      }
    }

    &-head {
      @include font-display;
      font-size: 18vw;
      line-height: 0.9;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      z-index: 3;

      @include breakpoint_m {
        font-size: 19vw;
        line-height: 0.8;
      }

      @include breakpoint_xl {
        font-size: $txt_9001;
        line-height: 0.8;
      }
    }
  }

  &__offset {
    @include breakpoint_l {
      display: grid;
      grid-template: "content ." auto / 2fr 1fr;

      &--alt {
        grid-template: ". content" auto / 1fr 2fr;
      }
    }

    &-content {
      grid-area: content;
    }
  }
}

.tentacle {
  position: absolute;
  z-index: -1;
  display: none;

  @include breakpoint_l {
    opacity: 1;
    width: 40vw;
    top: 50%;
    display: block;
  }

  @include breakpoint_xl {
    opacity: 1;
    width: 40vw;
    top: 50%;
  }

  &--l {
    left: 50%;
    transform: translate(-50%, 0);

    @include breakpoint_m {
      left: 0;
    }

    @include breakpoint_l {
      transform: translate(-10vw, -50%);
    }

    @include breakpoint_xl {
      transform: translate(-5vw, -50%);
    }
  }

  &--r {
    right: 50%;
    transform: translate(50%, 0);

    @include breakpoint_m {
      right: 0;
    }

    @include breakpoint_l {
      transform: translate(10vw, -50%);
    }

    @include breakpoint_xl {
      transform: translate(5vw, -50%);
    }
  }
}
</style>
