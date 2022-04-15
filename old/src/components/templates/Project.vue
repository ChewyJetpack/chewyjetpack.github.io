<template>
  <div class="page">
    <PostCard
      :content="$page.strapi.projects[0]"
      type="project"
      img="large"
      fullPost
    />
  </div>
</template>

<script>
import PostCard from "~/components/organisms/PostCard";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    PostCard
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.projects[0];
    const image = coverImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>
