<template>
    <article class="article">
        <section class="article__top-section u-bottom-spacer-xl">
            <div class="article__hero">
                <nuxt-img
                    preset="hero" 
                    :src="content.hero" 
                    :alt="content.title"
                />
            </div>
            <div class="article__headline-wrap wrap wrap--padded u-bottom-spacer-m">
                <div class="article__headline">
                    <h1 class="u-bottom-spacer-l">{{ content.title }}</h1>
                </div>
            </div>
            <div class="wrap">
                <ul class="article__meta-list">
                    <li>
                        <font-awesome
                            :icon="['far', 'calendar']"
                            class="u-right-spacer-xxs"
                        />
                        {{ content.date }}
                    </li>
                </ul>
            </div>
        </section>
        <section class="article__main wrap">
            <aside class="article__meta">
                <h3 class="u-bottom-spacer-s">Share</h3>
                <Button
                    :callback="copyUrl"
                    icon="link"
                    label="Copy link"
                    :icoLeft="true"
                    class="u-bottom-spacer-s"
                />
                <Button
                    :href="`mailto:${windowUrl}`"
                    icon="envelope"
                    label="Send email"
                    :icoLeft="true"
                    class="u-bottom-spacer-s"
                />
                <h3 class="u-top-spacer-m u-bottom-spacer-s">Tags</h3>
                <TagList 
                :tags="filteredTags(content.tags, tags)" 
                :large="true"
                onArticlePage="true"
                />
            </aside>
            <div class="article__content">
                <div 
                    v-for="(block, index) in content.contentBlocks" 
                    :key="index"
                >
                    <div
                        v-if="block.content" 
                        v-html="$md.render(block.content)"
                    />
                <div 
                    v-if="block.youtube" 
                    v-html="block.youtube"
                />
                <ArticleImages 
                    v-if="block.images" 
                    :images="block.images" />
                </div>
            </div>
        </section>
    </article> 
</template>

<script>
import Button from '~/components/atoms/Button';
import TagList from '~/components/molecules/TagList';
import ArticleImages from '~/components/molecules/ArticleImages'

export default {
    name: 'Article',
    props: {
        content: {
            type: Object
        },
        tags: {
            type: Array
        }
    },
    components: {
        ArticleImages,
        Button,
        TagList
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
        copyUrl: function () {
            this.$copyText(this.windowUrl).then(function (e) {
                alert('Copied')
                console.log(e)
            }, function (e) {
                alert('Can not copy')
                console.log(e)
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
        margin-top: -#{$unit_xxxl};
    }

    &__headline {
        padding: $unit_m $unit_l;
        max-width: $media_l;
        background: var(--c-art-heading);
        margin: 0;
        color: var(--c-bg);
        grid-column: 1;

        h1 {
            color: var(--c-bg);
            text-decoration: none;
            margin: 0;
        }
    }

    &__main {
        @extend .e-grid-3-1;
        align-items: start;
    }

    &__meta {
        grid-column: 2;
        grid-row: 1;
        position: sticky;
        top: $unit_xxxl;
        border-left: solid 2px var(--c-bg-2);
        padding-left: $unit_l;
    }

    &__meta-list {
        font-size: $txt_s;
        display: flex;
        color: var(--c-main-alt)
    }

    &__content {
        font-size: $txt_m;
        grid-row: 1;
    }
}
</style>