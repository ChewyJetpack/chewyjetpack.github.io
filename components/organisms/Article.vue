<template>
    <article class="article">
        <section class="article__top-section">
            <div class="article__hero">
                <img
                    :src="content.hero" 
                    :alt="content.title"
                    sizes="sm:100vw md:100vw lg:1600px"
                />
            </div>
            <div class="article__headline-wrap wrap wrap--padded">
                <div class="article__headline">
                    <h1>{{ content.title }}</h1>
                </div>
            </div>
            <div class="wrap">
                <ul class="article__meta-list">
                    <li v-if="caseStudy">
                        <font-awesome
                            :icon="['fas', 'history']"
                        />
                        From {{ content.year }}
                    </li>
                    <li v-else>
                        <font-awesome
                            :icon="['far', 'calendar']"
                        />
                        {{ content.date }}
                    </li>
                </ul>
            </div>
        </section>
        <section class="article__main wrap">
            <aside class="article__meta">
                <h3>Share</h3>
                <Button
                    :callback="copyUrl"
                    icon="link"
                    label="Copy link"
                    :icoLeft="true"
                    class="u-bm-s"
                />
                <Button
                    :href="`mailto:${windowUrl}`"
                    icon="envelope"
                    label="Send email"
                    :icoLeft="true"
                    class="u-bm-s"
                />
                <div v-if="!caseStudy" class="article__tags">
                    <h3>Tags</h3>
                    <TagList 
                    :tags="filteredTags(content.tags, tags)" 
                    :large="true"
                    onArticlePage="true"
                    />
                </div>
            </aside>
            <div v-if="caseStudy"  class="article__content">
                <CaseStudyContentBlock 
                    :content="content.summary" 
                    heading="Summary"
                    :images="content.summaryImages" 
                />
                <CaseStudyContentBlock 
                    :content="content.background" 
                    heading="Background"
                    :images="content.backgroundImages" 
                />
                <CaseStudyContentBlock 
                    :content="content.goals" 
                    heading="Goals"
                    :images="content.goalsImages" 
                />
                <CaseStudyContentBlock 
                    :content="content.method" 
                    heading="Method"
                    :images="content.methodImages" 
                />
                <CaseStudyContentBlock 
                    :content="content.results" 
                    heading="Results"
                    :images="content.resultsImages" 
                />
                <CaseStudyContentBlock 
                    :content="content.wrapUp" 
                />
            </div>
            <ArticleContentBlock class="article__content" v-else :content="content" />
        </section>
    </article> 
</template>

<script>
import Button from '~/components/atoms/Button';
import TagList from '~/components/molecules/TagList';
import CaseStudyContentBlock from '~/components/molecules/CaseStudyContentBlock';
import ArticleContentBlock from '~/components/molecules/ArticleContentBlock';

export default {
    name: 'Article',
    props: {
        content: {
            type: Object
        },
        tags: {
            type: Array
        },
        caseStudy: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Button,
        TagList,
        CaseStudyContentBlock,
        ArticleContentBlock
    },
    data() {
        return {
        windowUrl: ''
        }
    },
    created(){
        if (process.browser){
            this.windowUrl = window.location.href;
        }
    },
    methods: {
        copyUrl: function (ref) {
            this.$copyText(this.windowUrl).then(function (e) {
                ref.classList.add('pop-anim');
                setTimeout(() => {
                    ref.classList.remove('pop-anim');
                }, 1600);
            }, function (e) {
                alert('Sorry, something went wrong when trying to copy that link.');
            })
        },
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
    }
}
</script>

<style lang="scss" scoped>
.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &__top-section {
        background: var(--c-bg-2);
        width: 100%;
        padding-bottom: $unit_m;
        @extend .u-bm-xl
    }

    &__hero {
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 60vh;
        overflow: hidden;
    }

    &__headline-wrap {
        @extend .e-grid-3-1;
        @extend .u-bm-m;
        margin-top: -#{$unit_xxxl};
    }

    &__headline {
        padding: $unit_s;
        background: var(--c-art-heading);
        margin: 0;
        color: var(--c-bg);

        @include breakpoint_m {
            padding: $unit_m $unit_l;
            max-width: $media_l;
            grid-column: 1;
        }

        h1 {
            color: var(--c-bg);
            text-decoration: none;
            margin: 0;
            @extend .u-bm-l;
        }
    }

    &__main {
        @extend .e-grid-3-1;
        align-items: start;
    }

    &__meta {
        order: 1;

        @include breakpoint_m {
            grid-column: 2;
            grid-row: 1;
            position: sticky;
            top: $unit_xxxl;
            border-left: solid 2px var(--c-bg-2);
            padding-left: $unit_l;
        }
    }

    &__meta-list {
        font-size: $txt_xs;
        display: flex;
        color: var(--c-main-alt);

        @include breakpoint_m {
            font-size: $txt_s;
        }

        svg {
            @extend .u-rm-xxs;
        }
    }

    &__tags {
        @extend .u-tm-m;
    }

    &__content {
        font-size: $txt_xs;
        order: 0;

        @include breakpoint_m {
            grid-row: 1;
            font-size: $txt_m;
        }
    }
}
</style>