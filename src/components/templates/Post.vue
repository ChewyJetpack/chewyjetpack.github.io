<template>
  <div class="page">
    <PostCard
      :content="$page.strapi.posts[0]"
      type="post"
      img="large"
      fullPost
    />
    <div class="wrap">
      <Button href="/blog" label="Read more posts" class="u-top-spacer-xl" />
    </div>
  </div>
</template>

<script>
import PostCard from "~/components/organisms/PostCard";
import Button from "~/components/atoms/Button";
import { getMetaTags } from "~/utils/seo";

export default {
  components: {
    PostCard,
    Button
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.posts[0];
    const image = coverImage.url;
    return {
      title,
      meta: getMetaTags(title, description, image)
    };
  }
};
</script>
