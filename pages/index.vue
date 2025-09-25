<template>
  <div>
    <section class="homepage">
      <HeadingStrip :heading="home.title" shape="pentagon"/>
      <div class="wrap homepage__content">
        <nuxt-content :document="home" />
        <span class="homepage__avatar">
          <nuxt-img preset="avatar" :src="home.avatar" :alt="`Portrait photo of ${home.title}`"/>
        </span>
      </div>
      <div class="wrap">
        <Button
          href="/work"
          label="See my work"
        />
      </div>
      <div class="homepage__logos" aria-label="Trusted by">
        <div class="wrap">
          <div class="logos-marquee">
          <ul class="logos-track">
            <li><img class="logo--tall" src="/img/ellas-kitchen-seeklogo.svg" alt="Ella's Kitchen" /></li>
            <li><img src="/img/brothers.svg" alt="Brothers" /></li>
            <li><img src="/img/angry-birds.svg" alt="Angry Birds" /></li>
            <li><img src="/img/expedia.svg" alt="Expedia" /></li>
            <li><img class="logo--tall" src="/img/3-1-logo-svg-vector.svg" alt="Three" /></li>
            <li><img src="/img/tinder-1.svg" alt="Tinder" /></li>
            <li><img class="logo--tall" src="/img/virgin-1.svg" alt="Virgin" /></li>
            <li><img src="/img/Sony_logo.svg" alt="Sony" /></li>
            <li><img src="/img/EBay_logo.svg" alt="eBay" /></li>
            <li><img src="/img/Nokia_2023.svg" alt="Nokia" /></li>
            <!-- duplicate for seamless loop -->
            <li aria-hidden="true"><img class="logo--tall" src="/img/ellas-kitchen-seeklogo.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/brothers.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/angry-birds.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/expedia.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--tall" src="/img/3-1-logo-svg-vector.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/tinder-1.svg" alt="" /></li>
            <li aria-hidden="true"><img class="logo--tall" src="/img/virgin-1.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/Sony_logo.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/EBay_logo.svg" alt="" /></li>
            <li aria-hidden="true"><img src="/img/Nokia_2023.svg" alt="" /></li>
          </ul>
          </div>
        </div>
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
    order:1;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    flex-shrink: 0;

    @include breakpoint_m {
      order: 2;
      width: 300px;
      height: 300px;
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
      max-width: 50%;
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
    order:2;

    @include breakpoint_m {
      order: 1;
    }
  }

  &__content {
    @extend .u-tm-xxl;
    @extend .e-grid-3-1;
  }

  &__logos {
    @extend .u-tm-xxl;

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
      animation: homepage-logos-scroll 60s linear infinite;

      @include breakpoint_m {
        gap: $unit_xxl;
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
  }
}

@keyframes homepage-logos-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>