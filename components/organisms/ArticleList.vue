<template> 
    <ul class="article-list">
      <li class="article-list__item u-bottom-spacer-xl" v-for="article of articles" :key="article.slug">
        <article class="article-list__article">
            <NuxtLink class="article-list__img" :to="article.path">
                <span class="u-img-accent--left--2">
                    <nuxt-img preset="thumb" :src="article.hero" :alt="article.title" />
                </span>
            </NuxtLink>
            <div class="article-list__content">
                <h2 class="article-list__title u-bottom-spacer-m">
                    <NuxtLink :to="article.path">
                        <span>{{ article.title }}</span>
                        <span aria-hidden="true" data-nosnippet>{{ article.title }}</span>
                    </NuxtLink>
                </h2>
                <p class="article-list__excerpt u-bottom-spacer-s">
                    {{ article.description }}
                </p>
                <TagList :tags="filteredTags(article.tags, tags)" />
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
        },
        tags: {
            type: Array
        }
    },
    methods: {
        filteredTags: function(articleTags, tags) {
        let arr = [];
        for (let i = 0; i < tags.length; i++) {
            for (let x = 0; x < articleTags.length; x++) {
            if (tags[i].title == articleTags[x]) {
                arr.push(tags[i]);
            }
            }
        }
        return arr;
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

    &__title {
        position: relative;
        text-decoration: none;

        a {
            display: block;
            position: relative;
            left: -#{$unit_xxl};
            z-index: 1;

            > span {
                padding: $unit_s $unit_m $unit_xs $unit_xxl;

                &:first-child {
                    display: inline;
                    position: absolute;
                    padding-top: 0;
                }

                &:not(:first-child) {
                    background: var(--c-bg-2);
                    box-decoration-break: clone;
                    color: transparent;
                }
            }
            // Repeated on image hover below
            &:hover {
                span:first-child {
                    color: var(--c-accent-1);
                }

                span:not(:first-child) {
                    background: var(--c-bg-2);
                }
            }
        }
    }

    &__img {
        position: relative;
        z-index: 2;
        // TODO poss abstract this to avoid repitition
        // TODO make these colours work better on light
        &:hover {
            & ~ div {
                span:first-child {
                    color: var(--c-accent-1);
                }

                span:not(:first-child) {
                    background: var(--c-bg-2);
                }
            }
        }
    }
}
</style>