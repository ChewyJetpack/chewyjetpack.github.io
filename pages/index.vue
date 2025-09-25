<template>
  <div>
    <section class="homepage">
      <HeadingStrip :heading="home.title" shape="pentagon"/>
      <div class="homepage__logos" aria-label="Trusted by">
        <div class="wrap">
          <div class="logos-marquee">
          <ul class="logos-track">
            <li><img class="logo--sony" src="/img/Sony_logo.svg" alt="Sony" /></li>
            <li><img class="logo--ebay" src="/img/EBay_logo.svg" alt="eBay" /></li>
            <li><img class="logo--nokia" src="/img/Nokia_2023.svg" alt="Nokia" /></li>
            <li><img class="logo--tall" src="/img/virgin-1.svg" alt="Virgin" /></li>
            <li><img class="logo--tinder" src="/img/tinder-1.svg" alt="Tinder" /></li>
            <li><img class="logo--expedia" src="/img/expedia.svg" alt="Expedia" /></li>
            <li><img class="logo--tall" src="/img/3-1-logo-svg-vector.svg" alt="Three" /></li>
            <li><img class="logo--angry-birds" src="/img/angry-birds.svg" alt="Angry Birds" /></li>
            <!-- duplicate for seamless loop with overlap -->
            <li aria-hidden="true" class="logo-overlap"><img class="logo--sony" src="/img/Sony_logo.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--ebay" src="/img/EBay_logo.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--nokia" src="/img/Nokia_2023.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--tall" src="/img/virgin-1.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--tinder" src="/img/tinder-1.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--expedia" src="/img/expedia.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--tall" src="/img/3-1-logo-svg-vector.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--angry-birds" src="/img/angry-birds.svg" alt="" /></li>
          </ul>
          </div>
        </div>
      </div>
      <span class="homepage__avatar">
        <nuxt-img preset="avatar" :src="home.avatar" :alt="`Portrait photo of ${home.title}`"/>
      </span>
      <div class="wrap homepage__content">
        <nuxt-content :document="home" />
        <span class="homepage__avatar--desktop">
          <nuxt-img preset="avatar" :src="home.avatar" :alt="`Portrait photo of ${home.title}`"/>
        </span>
      </div>
      <div class="wrap">
        <Button
          href="/work"
          label="See my work"
        />
      </div>
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
    const articles = await $content('articles/posts').sortBy('slug', 'desc').limit(5).fetch();
    const tags = await $content('tags').fetch();

    return {
      home, articles, tags
    };
  },
  components: {
    ArticleList,
    HeadingStrip,
    Button
  },
  head: {
    title: 'Emil Smith | Senior Product Designer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "I'm a senior product designer with 15+ years building scalable digital products. I've led design teams with 100% retention rates, established user research programs, and built design systems serving 200+ brands. My approach combines systematic design thinking with technical implementation - I can code the solutions I design when needed."
      }
    ],
  },
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
    margin: 0 auto $unit_m;
    order: 1;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    flex-shrink: 0;

    @include breakpoint_l {
      order: 2;
      width: 300px;
      height: 300px;
      // On desktop, move avatar back into content grid
      display: none;
    }

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
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;

      @include breakpoint_m {
        bottom: -1px;
        max-width: none;
        margin: 0;
      }
    }
  }

  .nuxt-content-container {
    order: 2;

    @include breakpoint_l {
      order: 1;
    }
  }

  &__content {
    @extend .u-tm-l;
    display: block; // Ensure single column by default
    
    @include breakpoint_l {
      display: grid;
      grid-gap: $unit_l;
      grid-auto-rows: auto;
      grid-template-columns: 2fr 1fr;
      
      // Ensure copy appears in first column (left), avatar in second column (right)
      .nuxt-content-container {
        order: 1;
      }
      
      .homepage__avatar--desktop {
        order: 2;
      }
    }
  }

  &__avatar--desktop {
    display: none;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    align-items: flex-end;
    justify-content: center;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    flex-shrink: 0;

    @include breakpoint_l {
      display: flex;
    }

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
      bottom: -1px;
      max-width: none;
      margin: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__logos {
    @extend .u-tm-l;

    .logos-marquee {
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .logos-track {
      display: flex;
      align-items: center;
      gap: $unit_l;
      list-style: none;
      padding: $unit_l 0;
      margin: 0;
      width: max-content;
      animation: homepage-logos-backforth 30s ease-in-out infinite;
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      
      // Add padding to prevent logos being obscured by gradients
      &::before {
        content: "";
        flex-shrink: 0;
        width: 50px; // Minimal padding on the left side
      }
      
      &::after {
        content: "";
        flex-shrink: 0;
        width: 200px; // More padding on the right side for animation range
      }

      @include breakpoint_m {
        gap: $unit_xxl;
      }
    }

    .logo-overlap {
      margin-left: 0; // Remove overlap, use normal gap
      
      @include breakpoint_m {
        margin-left: 0; // Remove overlap, use normal gap
      }
    }


    /* edge fade masks */
    .logos-marquee::before,
    .logos-marquee::after {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: 6rem;
      pointer-events: none;
      z-index: 1;
    }

    .logos-marquee::before {
      left: 0;
      background: linear-gradient(90deg, var(--c-bg) 0%, rgba(0,0,0,0) 100%);
    }

    .logos-marquee::after {
      right: 0;
      background: linear-gradient(270deg, var(--c-bg) 0%, rgba(0,0,0,0) 100%);
    }

    img {
      height: auto;
      width: auto;
      max-width: 90px;
      filter: var(--logo-filter);

      @include breakpoint_m {
        max-width: 170px;
      }
    }

    /* Slight size boost for more square logos to balance visual weight */
    .logo--tall {
      height: 50px;

      @include breakpoint_m {
        height: 60px;
      }
    }

    /* Logo vertical positioning adjustments */
    .logo--expedia {
      transform: translateY(3px);
    }
    
    .logo--tinder {
      transform: translateY(-5px);
    }
    
    .logo--angry-birds {
      transform: translateY(3px);
    }
    
    .logo--sony {
      transform: translateY(2px);
    }
    
    .logo--ebay {
      transform: translateY(-1px);
    }
    
    .logo--nokia {
      transform: translateY(-1px);
    }

    @include breakpoint_m {
      .logo--expedia {
        transform: translateY(6px);
      }
      
      .logo--tinder {
        transform: translateY(-11px);
      }
      
      .logo--angry-birds {
        transform: translateY(6px);
      }
      
      .logo--sony {
        transform: translateY(4px);
      }
      
      .logo--ebay {
        transform: translateY(-3px);
      }
      
      .logo--nokia {
        transform: translateY(-3px);
      }
      
    }
  }
}

@keyframes homepage-logos-backforth {
  0% { 
    transform: translate3d(0, 0, 0);
  }
  50% { 
    transform: translate3d(-50%, 0, 0);
  }
  100% { 
    transform: translate3d(0, 0, 0);
  }
}
</style>