<template> 
    <ul class="article-list">
      <li class="article-list__item u-bottom-spacer-xl" v-for="article of articles" :key="article.slug">
        <article class="article-list__article">
            <NuxtLink class="article-list__img" :to="`articles/${article.slug}`">
                <img :src="article.hero" :alt="article.title">
            </NuxtLink>
            <div class="article-list__content">
                <h2 class="article__title u-bottom-spacer-m">
                    <NuxtLink :to="`articles/${article.slug}`">
                        {{ article.title }}
                    </NuxtLink>
                </h2>
                <p class="article-list__excerpt u-bottom-spacer-m">
                    {{ article.description }}
                </p>
                <TagList :tags="article.tags" />
            </div>
        </article>
      </li>
    </ul>
</template>

<script>
import TagList from '~/components/molecules/TagList'

export default {
    name: 'ArticleList',
    props: {
        articles: {
            type: Array
        }
    },
    components: {
        TagList
    }
}
</script>

<style lang="scss" scoped>
.article-list {
    list-style: none;

    &__article {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: $unit_m;
    }
}
</style>