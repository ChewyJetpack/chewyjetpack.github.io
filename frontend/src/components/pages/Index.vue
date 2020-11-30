<template>
  <div class="page">
    <div class="grid">
      <div class="grid__a-f">
          <div class="home-splash u-top-spacer-xl">
            <h1 class="home-splash__heading">{{ $page.strapi.home.pageSections[0].title }}</h1>
            <Octo class="home-splash__octo" />
          </div>
      </div>
      <div class="grid__a-d u-top-spacer-l">   
        <div class="page-desc section u-tri--full u-cnr-left-accent-2 u-tri-left-accent-4" v-html="$page.strapi.home.pageSections[0].content" />
        <Button 
          v-if="$page.strapi.home.pageSections[0].cta"
          :label="$page.strapi.home.pageSections[0].cta.label"
          :href="$page.strapi.home.pageSections[0].cta.url"
          :is-external="$page.strapi.home.pageSections[0].cta.external"
          class="u-c-accent-4 u-bg-accent-2 u-flex-right u-top-spacer-l"
          cBg="--c-accent-3"
          cText="--c-main"
        />        
      </div>
    </div>
    
    <div class="grid">
      <div class="grid__c-f">
        <section class="page-desc section u-top-spacer-9001 u-cnr-right-accent-1 u-tri-right-accent-3">
          <h2 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[1].title }}</h2>
          <div v-html="$page.strapi.home.pageSections[1].content" />
        </section>
          <Button 
            v-if="$page.strapi.home.pageSections[1].cta"
            :label="$page.strapi.home.pageSections[1].cta.label"
            :href="$page.strapi.home.pageSections[1].cta.url"
            :is-external="$page.strapi.home.pageSections[1].cta.external"
            class="u-bg-accent-2 u-flex-left u-top-spacer-l"
          />
      </div>
    </div>
    
    <div class="grid">
      <div class="grid__a-d">
        <section class="page-desc section u-top-spacer-9001 u-cnr-left-accent-2 u-tri-left-accent-4">
          <h2 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[2].title }}</h2>
          <div v-html="$page.strapi.home.pageSections[2].content" />
        </section>
          <Button 
            v-if="$page.strapi.home.pageSections[2].cta"
            :label="$page.strapi.home.pageSections[2].cta.label"
            :href="$page.strapi.home.pageSections[2].cta.url"
            :is-external="$page.strapi.home.pageSections[2].cta.external"
            class="u-c-accent-4 u-bg-accent-2 u-flex-left u-top-spacer-xxl"
            cBg="--c-accent-3"
          />
      </div>
    </div>
    
    <div class="strip u-bg-accent-4 u-top-spacer-xxxl">
      <div class="grid">
        <div class="grid__a-d">
          <section class="section u-cnr-right-accent-1">
            <h2 class="u-bottom-spacer-m">{{ $page.strapi.home.pageSections[3].title }}</h2>
            <div v-html="$page.strapi.home.pageSections[3].content" />
          </section>
            <Button 
              v-if="$page.strapi.home.pageSections[3].cta"
              :label="$page.strapi.home.pageSections[3].cta.label"
              :href="$page.strapi.home.pageSections[3].cta.url"
              :is-external="$page.strapi.home.pageSections[3].cta.external"
              class="u-c-accent-4 u-bg-accent-2 u-flex-left u-top-spacer-l "
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
      font-family: $display-font;
      font-weight: 900;
      font-size: $txt_xxxl;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      z-index: 3;

      @include breakpoint_m {
          font-size: $txt_9001;
          top: 5%;
      }
      
      @include breakpoint_l {
          font-size: $txt_9001;
          top: 25%;
      }
  }
}
</style>