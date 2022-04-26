<template> 
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <article class="article">
            <NuxtLink :to="`articles/${article.slug}`">
                <img :src="article.hero" :alt="article.title">
            </NuxtLink>
            <NuxtLink :to="`articles/${article.slug}`">
                <h2 class="article__title">{{ article.title }}</h2>
            </NuxtLink>
            <p class="article__description">{{ article.description }}</p>
            <ul>
                <li v-for="(tag, index) of article.tags" :key="index">
                    <!-- handleise tag title to match slug - this is the exact same way it's done in the admin file, which is independent of Vue -->
                    <NuxtLink :to="`articles/tags/${tag.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`">
                    {{ tag }}
                    </NuxtLink>
                </li>
            </ul>
        </article>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'ArticleList',
    props: {
        articles: {
            type: Array
        }
    }
}
</script>