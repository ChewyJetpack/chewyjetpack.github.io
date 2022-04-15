<template>
  <ListingPage
    :title="$page.strapi.portfolio.title"
    :items="$page.strapi.projects"
    type="project"
  />
</template>

<script>
import ListingPage from "~/components/templates/ListingPage";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    ListingPage
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.portfolio.seo;
    const image = shareImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>

<style lang="scss" scoped></style>
