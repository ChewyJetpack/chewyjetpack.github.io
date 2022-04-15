<template>
  <ListingPage
    :title="$page.strapi.tags[0].name"
    :items="$page.strapi.tags[0].posts"
    type="post"
    back-to="/blog"
    :back-label="`All posts`"
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
    const { title, description, shareImage } = this.$page.strapi.blog.seo;
    const image = shareImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>

<style lang="scss" scoped>
.back-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
</style>
