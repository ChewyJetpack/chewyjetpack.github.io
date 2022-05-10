<template> 
    <div :class="['article-list', caseStudies ? 'article-list--case-studies' : '']">
        <ul>
            <li class="article-list__item" v-for="article of articles" :key="article.slug">
                <article class="article-list__article">
                    <NuxtLink class="article-list__img" :to="article.path">
                        <span class="article-list__cs-cat" v-if="caseStudies">{{ article.category }}</span>
                        <span :class="caseStudies ? 'u-img-accent--right--3' : 'u-img-accent--left--2 u-img-accent--left--2--m-r'">
                            <nuxt-img v-if="caseStudies" preset="csthumb" :src="article.hero" :alt="article.title" />
                            <nuxt-img v-else preset="thumb" :src="article.hero" :alt="article.title" />
                        </span>
                    </NuxtLink>
                    <div class="article-list__content">
                        <h2 class="article-list__art-title">
                            <NuxtLink :to="article.path">
                                <span>{{ article.title }}</span>
                                <span aria-hidden="true" data-nosnippet>{{ article.title }}</span>
                            </NuxtLink>
                        </h2>
                        <p v-if="!caseStudies" class="article-list__excerpt">
                            {{ article.description }}
                        </p>
                        <TagList v-if="!caseStudies" :tags="filteredTags(article.tags, tags)" />
                    </div>
                </article>
            </li>
        </ul>
    </div>
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

    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    &__item {
        margin-bottom: $unit_xl;
    }

    &__cs-cat {
        display: block;
        background: var(--c-accent-1);
        padding: $unit_xxs $unit_s;
        position: absolute;
        top: -#{$unit_s};
        left: $unit_xs;
        z-index: 3;
        color: var(--c-bg);
        font-weight: 700;
    }
            
    &__art-title {
        position: relative;
        text-decoration: none;
        top: -#{$unit_xl};
        left: -#{$unit_s};
        width: calc(100% + #{$unit_s});
        z-index: 3;
        font-size: $txt_l;
        margin-bottom: -#{$unit_m};

        a {
            display: block;
            position: relative;
            z-index: 1;
            left: 0;

            > span {
                padding: $unit_xs $unit_s;

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
                    background: var(--c-bg-3)
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

    &__excerpt {
        margin-top: $unit_m;
        font-size: $txt_xs;
        @extend .u-bm-s;

        @include breakpoint_m {
            margin-top: 0;
        }
    }

    &--case-studies {
        margin-top: $unit_xl;
    
        & > ul {
            display: flex;
            flex-direction: column;
            grid-gap: $unit_xxl;
        }

        .article-list {
            &__item {
                margin-bottom: 0;
            }
            
            &__art-title {
                left: 0;
                top: -#{$unit_m};
            }

            &__article {
                display: flex;
                flex-direction: column;
                grid-gap: 0;
            }
        }
    }

    &__article {
        @extend .e-grid-1-2;
    }

    @include breakpoint_m {
        &--case-studies > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            grid-gap: $unit_m;

            @include breakpoint_m {
                grid-gap: $unit_xxl;
            }
            
            .article-list {

                &__article {
                    margin-bottom: 0;
                }

                &__art-title {
                    max-width: 90%;
                    z-index: 3;
                    margin-bottom: 0;

                    a {
                        left: $unit_xs;

                        > span {
                            padding: $unit_s $unit_m;

                            &:first-child {
                                padding-top: 0;
                            }
                        }
                    }
                }
            }
        }

        &__article {
            display: grid;
            grid-gap: $unit_m;
            margin-bottom: $unit_xxl;
        }
        
        &__art-title {
            top: 0;
            width: auto;
            z-index: 1;
            font-size: $txt_xl;
            margin-bottom: $unit_m;

            a {
                left: -#{$unit_xxl};

                > span {
                    padding: $unit_s $unit_m $unit_xs calc(#{$unit_xxl} + #{$unit_s});

                    &:first-child {
                        padding-top: 0;
                    }
                }
                // Repeated on image hover below
                &:hover {

                    span:not(:first-child) {
                        background: var(--c-bg-2);
                    }
                }
            }
        }
    }
}
</style>