<template>
  <div class="page home">
    <div class="wrap">
      <div class="home__splash u-top-spacer-xxl">
        <h1 class="home__splash-head">OOPS.</h1>
        <Octo class="home__splash-octo" />
      </div>
    </div>
</template>

<script>
import Octo from '~/components/atoms/Octo'

export default {
  components: {
    Octo
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__splash {
    position: relative;

  &-octo {
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
    }
}
</style>