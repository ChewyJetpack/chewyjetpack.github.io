<template> 
    <div :class="['article-list', caseStudies ? 'article-list--case-studies' : '']">
        <ul>
            <li class="article-list__item" v-for="article of articles" :key="article.slug">
                <article :class="caseStudies ? 'article-list__case-study' : 'article-list__article'">
                    <NuxtLink class="article-list__img" :to="article.path">
                        <span>
                            <nuxt-img preset="thumb" :src="article.thumb" :alt="article.title" />
                        </span>
                        <span class="article-list__cs-cat" v-if="caseStudies">{{ article.category }}</span>
                    </NuxtLink>
                    <div class="article-list__content">
                        <div>
                            <h2 class="article-list__art-title">
                                <NuxtLink :to="article.path">
                                    {{ article.title }}
                                </NuxtLink>
                            </h2>
                            <p v-if="!caseStudies" class="article-list__date">
                                {{ article.date }}
                            </p>
                            <p v-if="!caseStudies" class="article-list__excerpt">
                                {{ article.description }}
                            </p>
                        </div>
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
            
    &__art-title {
        text-decoration: none;
        font-size: $txt_l;
        margin: 0 0 $unit_xxs;

        a {
            text-decoration: none;
            // Repeated on image hover below
            &:hover {
                color: var(--c-accent-2);
            }
        }

        @include breakpoint_l {
            margin: $unit_m 0 $unit_xxs;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__date {
        font-size: $txt_s;
        color: var(--c-main-alt);
        margin: 0 0 $unit_s 0;
    }

    &__excerpt {
        margin-top: $unit_m;
        font-size: $txt_s;
        @extend .u-bm-s;

        @include breakpoint_l {
            margin-top: 0;
        }
    }

    &--case-studies {
        margin-top: $unit_xl;
    
        & > ul {
            display: flex;
            flex-direction: column;
            grid-gap: $unit_s;
        }

    }

    &__article {
        @extend .e-grid-1-2;
        border-top: solid 2px var(--c-main-alt-2);
    }

    &__item {
        background: var(--c-bg-2);
        border-radius: $unit_xxs;
        overflow: hidden;
        border: 4px solid var(--c-accent-2);
        border-right: 0;
        border-top: 0;
        border-left: 0;
    }

    &__case-study {

        .article-list__art-title {
            padding: $unit_s;
            margin: 0;
        }
    }

    &__img {
        position: relative;
        display: block;

        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: $unit_xl;
            display: block;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top, $dark, transparent);
            opacity: 0.3;
        }
    }

    &__cs-cat {
        background: var(--c-bg-2);
        display: inline-block;
        color: var(--c-accent-2);
        white-space: nowrap;
        position: absolute;
        bottom: -#{$unit_s};
        z-index: 2;
        line-height: 1;
        left: 0;
        font-size: $txt_s;
        font-weight:700;
        padding: $unit_s $unit_m $unit_xs $unit_s;
        border-radius: 0 $unit_xxs 0 0;
    }

    @include breakpoint_l {
        &--case-studies > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            grid-gap: $unit_m;
        }

        &__article {
            display: grid;
            grid-gap: $unit_m;
            margin-bottom: $unit_l;
        }
        
        &__art-title {
            font-size: $txt_l;

            a {
                text-decoration: none;
            }
        }
    }
}
</style>