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
    display: flex;
    align-items: center;
    border-bottom: solid 4px;
    height: 138px;

    @include breakpoint_m {
        height: 280px;
        border-bottom: solid 8px;
    }

    h1 {
        font-size: $txt_xl;
        margin: 0;
        width: calc(100% - #{$unit_l});

        @include breakpoint_m {
            font-size: $txt_xxl;
            width: calc(100% - #{$unit_xxxl});
        }

        @include breakpoint_l {
            width: 50%;
        }
    }
    
    // TODO: create light-theme versions of SVGs and switch the bg image for the light theme
    &--pentagon {
        background: url('~/static/img/pentagon.svg') right 0 / auto no-repeat;
        border-color: var(--c-accent-1);

        @include breakpoint_m {
            background-image: url('~/static/img/pentagon-l.svg');
            background-position-x: 50%;
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

    &--triangle {
        background: url('~/static/img/triangle.svg') right 0 / auto no-repeat;
        border-color: var(--c-accent-4);

        @include breakpoint_m {
            background-image: url('~/static/img/triangle-l.svg');
            background-position-x: 50%;
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

    &--hexagon {
        background: url('~/static/img/hexagon.svg') right 0 / auto no-repeat;
        border-color: var(--c-accent-3);

        @include breakpoint_m {
            background-image: url('~/static/img/hexagon-l.svg');
            background-position-x: 50%;
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

}
</style>
