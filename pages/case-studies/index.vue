<template>
  <div>
    <Nav/>  
    <h1>Professional Projects</h1>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="`projects/${project.slug}`">
          {{ project.title }}
          <img :src="project.hero" :alt="project.title">
        </NuxtLink>
        {{ project.tags }}
        <ul>
          <li v-for="(tag, index) of project.tags" :key="index">
            <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
            <NuxtLink :to="`tags/${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
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
  name: 'ProjectsPage',
  async asyncData({ $content, params }) {
    const projects = await $content('projects').fetch()

    return {
      projects
    };
  },
  components: {
    Nav
  }
}
</script>
