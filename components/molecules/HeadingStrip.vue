<template>
    <div :class="['heading-strip', 'heading-strip--' + shape]">
        <div class="wrap">
            <h1>{{ heading }}</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeadingStrip',
  props: {
    shape: String,
    heading: String
  }
};
</script>

<style lang="scss" scoped>
.heading-strip {
    padding: $unit_xxl 0;
    display: flex;
    align-items: center;
    border-bottom: solid 4px;

    h1 {
        margin: 0;
    }
    
    // TODO: create light-theme versions of SVGs and switch the bg image for the light theme
    &--pentagon {
        background: url('~/static/img/pentagon.svg') right center / cover no-repeat;
        border-color: var(--c-accent-1);

        @include breakpoint_l {
            background-image: url('~/static/img/pentagon-l.svg')
        }
    }

    &--triangle {
        background: url('~/static/img/triangle.svg') right center / cover no-repeat;
        border-color: var(--c-accent-4);

        @include breakpoint_l {
            background-image: url('~/static/img/triangle-l.svg')
        }
    }

    &--hexagon {
        background: url('~/static/img/hexagon.svg') right center / cover no-repeat;
        border-color: var(--c-accent-3);

        @include breakpoint_l {
            background-image: url('~/static/img/hexagon-l.svg')
        }
    }

}
</style>
