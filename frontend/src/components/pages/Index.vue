<template>
  <div class="page">
    <div class="grid">
      <div class="grid__a-f">
          <div class="home-splash u-top-spacer-xxl">
            <h1 class="home-splash__heading">Creative Tech Lead</h1>
            <Octo class="home-splash__octo" />
          </div>
      </div>
    </div>
    
    <section class="section u-top-spacer-9001">
      <img src="img/tent3.svg" alt="Emil Smith" class="tentacle tentacle--l"/>
      <div class="grid">
        <div class="grid__c-f">
            <h1 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[1].title }}</h1>
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
    </section>

    <section class="section u-top-spacer-9001">
      <img src="img/tent4.svg" alt="Emil Smith" class="tentacle tentacle--r"/>  
      <div class="grid">
        <div class="grid__a-d">
          <h1 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[2].title }}</h1>
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
    </section>
    
    <div class="strip u-bg-accent-4 u-top-spacer-xxxl">
      <div class="grid">
        <div class="grid__a-d">
          <section class="section">
            <h2 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[3].title }}</h2>
            <div v-html="$page.strapi.home.pageSections[3].content" />
          </section>
            <Button 
              v-if="$page.strapi.home.pageSections[3].cta"
              :label="$page.strapi.home.pageSections[3].cta.label"
              :href="$page.strapi.home.pageSections[3].cta.url"
              :is-external="$page.strapi.home.pageSections[3].cta.external"
              class="u-flex-left u-top-spacer-m"
            />
        </div>
      </div>
    </div>
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
import Button from '~/components/atoms/Button'
import Octo from '~/components/atoms/Octo'
import RichText from '~/components/atoms/RichText'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    RichText,
    Button,
    Octo
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>

<style lang="scss" scoped>
.home-splash {
  position: relative;

  &__octo {
    transform: translate(40%, 0) scale(-1.4, 1.4);
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

  &__heading {
      @include font-display;
      font-size: 19vw;
      line-height: 0.9;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      z-index: 3;
      
      @include breakpoint_m {
          font-size: 19.5vw;
          line-height: 0.8;
      }
      
      @include breakpoint_xl {
          font-size: $txt_9001;
          line-height: 0.8;
      }
  }
}

.tentacle {
  display: none;
  position: absolute;
  z-index: -1;

  @include breakpoint_l {
    display: block;
    opacity: 1;
    width: 40vw;
    top: 50%;
  }

  @include breakpoint_xl {
    opacity: 1;
    width: 40vw;
    top: 50%;
  }

  &--l {
    left: 50%;

    @include breakpoint_l {
      left: 0;
      transform: translate(-10vw, -50%);
    }

    @include breakpoint_xl {
      left: 0;
      transform: translate(-5vw, -50%);
    }
  }

  &--r {
    right: 50%;

    @include breakpoint_l {
      right: 0;
      transform: translate(10vw, -50%);
    }

    @include breakpoint_xl {
      right: 0;
      transform: translate(5vw, -50%);
    }
  }
}
</style>