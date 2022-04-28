<template>
    <article class="article">
        <section class="article__top-section u-bottom-spacer-xl">
            <div class="article__hero">
                <img 
                    :src="content.hero" 
                    :alt="content.title"
                >
            </div>
            <div class="article__headline-wrap wrap wrap--padded">
                <div class="article__headline">
                    <h1 class="u-bottom-spacer-l">{{ content.title }}</h1>
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
            </div>
        </section>
        <section class="article__main wrap">
            <aside class="article__meta">
                <Button
                    :callback="copyUrl"
                    icon="link"
                    label="Share link"
                    :icoLeft="true"
                    class="u-bottom-spacer-s"
                />
                <Button
                    :href="`mailto:${windowUrl}`"
                    icon="envelope"
                    label="Share via email"
                    :icoLeft="true"
                    class="u-bottom-spacer-s"
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
import ArticleImages from '~/components/molecules/ArticleImages'

export default {
    name: 'Article',
    props: {
        content: {
            type: Object
        }
    },
    components: {
        ArticleImages,
        Button
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
        margin-bottom: $unit_l;
    }

    &__headline {
        padding: $unit_m $unit_l;
        max-width: $media_l;
        background: var(--c-accent-2);
        margin: 0;
        color: $darkest;
        grid-column: 1;

        h1 {
            color: $darkest;
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
    }

    &__meta-list {
        color: $dark;
        font-size: $txt_s;
        background: var(--c-accent-2);
        display: flex;
        padding-left: $unit_l;
    }

    &__content {
        font-size: $txt_m;
        grid-row: 1;
    }
}
</style>