<template>
    <div :class="['heading-strip', 'heading-strip--' + shape]">
        <div class="outer-wrap">
            <div class="wrap">
                <h1>{{ heading }}</h1>
            </div>
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
    height: 138px;
    border-top: 3px solid;
    border-bottom: 0px solid;

    .outer-wrap {
        height: 100%;
        width:100%;
        display: flex;
        align-items: center;
        border-bottom: 3px solid;
        border-color: var(--c-accent-2);
    }

    .wrap {
    } 

    @include breakpoint_m {
        height: 280px;

        .outer-wrap {
            border-bottom: solid 8px;
            border-color: var(--c-accent-2);
        }
    }

    h1 {
        font-size: $txt_l;
        margin: 0;

        @include breakpoint_m {
            font-size: $txt_xxl;
            width: calc(100% - #{$unit_l});
            text-align: left;
            width: calc(100% - #{$unit_xxxl});
        }

        @include breakpoint_l {
            width: 50%;
        }
    }
    
    &--pentagon {
        background: var(--img-pent) right 0 / auto no-repeat;
        border-color: var(--c-accent-2);
        background-color:var(--c-bg-2);
        border-image: linear-gradient(to right, transparent 45%, var(--c-accent-2) 55%, var(--c-accent-2)) 1;  

        @include breakpoint_m {
            background: var(--img-pent-l) right 0 / auto no-repeat;
            background-position-x: 50%;
            background-color:var(--c-bg-2);
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

    &--triangle {
        background: var(--img-tri) right 0 / auto no-repeat;
        border-color: var(--c-accent-4);
        background-color:var(--c-bg-2);
        border-image: linear-gradient(to right, transparent 45%, var(--c-accent-4) 55%, var(--c-accent-4)) 1;  

        @include breakpoint_m {
            background-image: var(--img-tri-l);
            background-position-x: 50%;
            background-color:var(--c-bg-2);
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

    &--hexagon {
        background: var(--img-hex) right 0 / auto no-repeat;
        border-image: linear-gradient(to right, transparent, transparent 45%, var(--c-accent-3) 55%, var(--c-accent-3)) 1;  
        background-color:var(--c-bg-2);

        @include breakpoint_m {
            background-image: var(--img-hex-l);
            background-position-x: 50%;
            background-color:var(--c-bg-2);
        }

        @include breakpoint_xl {
            background-position-x: right;
        }
    }

}
</style>
