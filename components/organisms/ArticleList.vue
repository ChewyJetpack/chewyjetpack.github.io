<template> 
    <ul :class="['article-list', caseStudies ? 'article-list--case-studies' : '']">
      <li :class="['article-list__item', caseStudies ? 'u-bottom-spacer-xs' : 'u-bottom-spacer-xxl']" v-for="article of articles" :key="article.slug">
        <article class="article-list__article">
            <NuxtLink class="article-list__img" :to="article.path">
                <span class="article-list__cs-cat" v-if="caseStudies">{{ article.category }}</span>
                <span :class="caseStudies ? 'u-img-accent--right--3' : 'u-img-accent--left--2'">
                    <nuxt-img v-if="caseStudies" preset="csthumb" :src="article.hero" :alt="article.title" />
                    <nuxt-img v-else preset="thumb" :src="article.hero" :alt="article.title" />
                </span>
            </NuxtLink>
            <div class="article-list__content">
                <h2 class="article-list__art-title u-bottom-spacer-m">
                    <NuxtLink :to="article.path">
                        <span>{{ article.title }}</span>
                        <span aria-hidden="true" data-nosnippet>{{ article.title }}</span>
                    </NuxtLink>
                </h2>
                <p v-if="!caseStudies" class="article-list__excerpt u-bottom-spacer-s">
                    {{ article.description }}
                </p>
                <TagList v-if="!caseStudies" :tags="filteredTags(article.tags, tags)" />
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
        },
        caseStudies: {
            type: Boolean,
            default: false
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

    &--case-studies {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        grid-gap: $unit_l;

        .article-list {
            &__article {
                display: flex;
                flex-direction: column;
                grid-gap: 0;
            }

            &__cs-cat {
                display: block;
                background: var(--c-accent-1);
                padding: $unit_xxs $unit_s;
                position: absolute;
                top: -#{$unit_s};
                left: $unit_s;
                z-index: 3;
                color: var(--c-bg);
                font-weight: 700;
            }

            &__art-title {
                top: -#{$unit-s};
                max-width: 90%;
                z-index: 3;

                a {
                    left: $unit_s;

                    > span {
                        padding: $unit_s $unit_m;

                        &:not(:first-child) {
                            background: var(--c-bg-3)
                        }
                    }
                }
            }
        }
    }

    &__article {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: $unit_m;
    }

    &__art-title {
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