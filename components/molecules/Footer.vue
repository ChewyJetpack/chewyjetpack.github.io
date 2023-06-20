<template>
    <footer>
        <div class="wrap">
            <div class="footer-content">
                <p>
                    All content &copy; Copyright Emil Smith {{new Date().getFullYear()}}
                </p>
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
        border-top: solid 2px var(--c-main-alt-2);
        font-size: $txt_s;
        padding: $unit_m 0;
        color: var(--c-main-alt);
        text-align: center;

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

    @include breakpoint_m {
        .footer-content {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
