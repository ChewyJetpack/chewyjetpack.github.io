<template>
    <footer>
        <p>
            All content &copy; Copyright Emil Smith {{new Date().getFullYear()}}
        </p>
        <FooterMenu /> 
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
