<template>
  <div>
    <Nav/>  
    <h1>{{tag.title}}</h1>
    <ul>
      <li v-for="post of filteredPosts" :key="post.slug">
        <NuxtLink :to="`posts/${post.slug}`">
          {{ post.title }}
          <img :src="post.hero" :alt="post.title">
        </NuxtLink>
        <ul>
          <li v-for="(tag, index) of post.tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <!-- TODO: abstract this regex -->
            <NuxtLink :to="`${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  name: 'TagPage',
  async asyncData({ $content, params, error }) {
    // get current tag by page slug
    let tag;
    try {
      tag = await $content('tags', params.slug).fetch();
    } catch (e) {
      error({ message: 'Tag not found' });
    }

    // get all posts
    const posts = await $content('posts').fetch()

    // filter posts by current tag
    const filteredPosts = posts.filter(function(post) {
      return post.tags.includes(tag.title)
    })

    return {
      filteredPosts, tag
    };
  },
  components: {
    Nav
  }
}
</script>
