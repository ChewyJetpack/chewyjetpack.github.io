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
        background: var(--c-accent-1);
        padding: $unit_s 0;
        color: var(--c-bg);
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
    }
</style>
