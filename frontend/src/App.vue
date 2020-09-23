<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Layout from '@/components/templates/Default'
import Vue from 'vue';

export const EventBus = new Vue();

export default {
    components: {
        Layout
    },
    metaInfo() {
        return {
        title: this.$static.metadata.siteName,
        meta: [
            {
            key: 'description',
            name: 'description',
            content: this.$static.metadata.siteDescription
            }
        ]
        }
    }
}
</script>

<style lang="scss">
    // Global styles
    @import '@/assets/scss/global.scss';
</style>