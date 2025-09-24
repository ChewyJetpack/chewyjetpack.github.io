<template>
    <footer>
        <div class="wrap">
            <div class="footer-content">
                    All content &copy; Copyright Emil Smith {{new Date().getFullYear()}}
                <FooterMenu /> 
            </div>
        </div>
    </footer>
</template>

<script>
import FooterMenu from '~/components/molecules/FooterMenu'

export default {
    name: 'Footer',
    components: {
        FooterMenu
    }
}
</script>

<style lang="scss" scoped>
    footer {
        border-top: solid 3px;
        font-size: $txt_s;
        padding: $unit_m 0;
        color: var(--c-main-alt);
        text-align: center; 
        border-image: linear-gradient(to right, var(--c-accent-2), var(--c-accent-2), transparent, transparent) 1;

        p {
            margin-bottom: $unit_xs;
        }

        @include breakpoint_m {
            font-size: $txt_s;
            p {
                margin-bottom: 0;
            }
        }
    }
    .footer-content {
        display: flex;
        flex-direction: column-reverse;

        @include breakpoint_m {
                justify-content: space-between;
                flex-direction: row;
            }
    }
</style>
