<template>
    <article class="article">
        <div class="article__hero">
            <nuxt-img
                preset="hero"
                :src="content.hero" 
                :alt="content.title"
                sizes="sm:100vw md:100vw lg:1920px"
            />
        </div>
        <div class="article__header wrap text-block-xl">
            <div>
                <div class="article__headline">
                    <h1>{{ content.title }}</h1>
                </div>
                <div class="article__meta-list">
                    <div v-if="caseStudy">
                        From {{ content.year }}
                    </div>
                    <div v-else>
                        {{ content.date }}
                    </div>
                </div>
            </div>
        </div>
        <section class="article__main wrap text-block-xl">
            <!-- <aside class="article__meta">
                <h3>Share</h3>
                <Button
                    @clicked="copyUrl"
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
            </aside> -->
            <div v-if="caseStudy && !content.contentType"  class="article__content">
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
                    :youtube="content.youtube" 
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
        windowUrl: '',
        storedScrollY: undefined
        }
    },
    created(){
        if (process.browser){
            this.windowUrl = window.location.href;
        }
    },
    mounted() {
        // Handle clicks on images in markdown content
        this.$nextTick(() => {
            this.addImageClickHandlers();
        });
        
        // Add global document click handler as backup
        document.addEventListener('click', this.handleGlobalClick, true);
        
        // Listen for lightbox events to manage body styles
        this.$nuxt.$on('lightbox:open', this.handleLightboxOpen);
        this.$nuxt.$on('lightbox:close', this.restoreBodyStyles);
    },
    updated() {
        // Re-add handlers when content updates
        this.$nextTick(() => {
            this.addImageClickHandlers();
        });
    },
    beforeDestroy() {
        // Clean up global handler
        document.removeEventListener('click', this.handleGlobalClick, true);
        
        // Clean up lightbox listeners
        this.$nuxt.$off('lightbox:open', this.handleLightboxOpen);
        this.$nuxt.$off('lightbox:close', this.restoreBodyStyles);
        
        // Restore body styles
        this.restoreBodyStyles();
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
        },
        addImageClickHandlers() {
            // Find all images in markdown content and add click handlers
            const articleContent = this.$el.querySelector('.article__content');
            if (articleContent) {
                // Handle all links that contain images
                const imageLinks = articleContent.querySelectorAll('a');
                imageLinks.forEach(link => {
                    const img = link.querySelector('img');
                    if (img) {
                        // Remove any existing click handlers
                        link.removeEventListener('click', this.handleImageLinkClick);
                        // Add click handler to the link
                        link.addEventListener('click', this.handleImageLinkClick);
                        // Make cursor pointer to indicate clickable
                        link.style.cursor = 'pointer';
                        // Remove href to prevent navigation
                        link.removeAttribute('href');
                    }
                });

                // Handle standalone images
                const images = articleContent.querySelectorAll('img');
                images.forEach(img => {
                    // Skip if already handled by link above
                    if (img.closest('a')) return;
                    
                    // Remove any existing click handlers
                    img.removeEventListener('click', this.handleImageClick, true);
                    img.removeEventListener('click', this.handleImageClick, false);
                    // Add click handler with capture to run first
                    img.addEventListener('click', this.handleImageClick, true);
                    // Make cursor pointer to indicate clickable
                    img.style.cursor = 'pointer';
                });
            }
        },
        handleImageLinkClick(event) {
            event.preventDefault();
            event.stopPropagation();
            
            const link = event.currentTarget;
            const img = link.querySelector('img');
            if (img) {
                const src = img.src;
                const alt = img.alt || '';
                
                // Open image in lightbox
                this.$nuxt.$emit("lightbox:open", { src, alt });
            }
        },
        handleImageClick(event) {
            // Prevent all default behavior
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            const img = event.target;
            const src = img.src;
            const alt = img.alt || '';
            
            // Try to open lightbox
            try {
                this.$nuxt.$emit("lightbox:open", { src, alt });
            } catch (error) {
                console.error('Error opening lightbox:', error);
            }
            
            return false;
        },
        handleGlobalClick(event) {
            // Check if the clicked element is an image in article content
            const articleContent = this.$el ? this.$el.querySelector('.article__content') : null;
            if (articleContent && articleContent.contains(event.target)) {
                const img = event.target.tagName === 'IMG' ? event.target : event.target.closest('img');
                if (img && !img.closest('a')) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    
                    const src = img.src;
                    const alt = img.alt || '';
                    
                    // Store current scroll position globally
                    this.storedScrollY = window.scrollY;
                    
                    try {
                        // Lock body immediately to prevent page jump
                        document.body.style.overflow = 'hidden';
                        document.body.style.position = 'fixed';
                        document.body.style.top = `-${this.storedScrollY}px`;
                        document.body.style.width = '100%';
                        
                        this.$nuxt.$emit("lightbox:open", { src, alt });
                    } catch (error) {
                        console.error('Error opening lightbox from global handler:', error);
                    }
                    
                    return false;
                }
            }
        },
        handleLightboxOpen() {
            // Only lock body if it's not already locked (to avoid conflicts)
            if (document.body.style.position !== 'fixed') {
                // Store current scroll position globally
                this.storedScrollY = window.scrollY;
                
                try {
                    // Prevent any scrolling behavior
                    document.body.style.overflow = 'hidden';
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${this.storedScrollY}px`;
                    document.body.style.width = '100%';
                    
                } catch (error) {
                    console.error('Error locking body for lightbox:', error);
                }
            }
        },
        restoreBodyStyles() {
            // Restore body styles when lightbox closes
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            
            // Restore scroll position if we have it stored
            if (this.storedScrollY !== undefined) {
                window.scrollTo(0, this.storedScrollY);
                this.storedScrollY = undefined; // Clear the stored position
            }
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

    &__hero {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        width: 100%;
        position: relative;
        overflow: hidden;
        background: var(--c-bg-2);
        border-top: solid 3px var(--c-accent-2);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__header, &__main {
        background: var(--c-bg);
        padding: $unit_s;
        z-index: 1;

        @include breakpoint_l {
            padding: $unit_m $unit_l;
        }
    }

    &__header {
        @extend .e-grid-3-1;
        margin-top: -#{$unit_xxl};
    }

    &__headline {
        @extend .u-bm-s;
        color: var(--c-main);

        @include breakpoint_m {
            max-width: $media_l;
            grid-column: 1;
        }

        h1 {
            text-decoration: none;
            margin: 0;
            @extend .u-bm-l;
        }
    }

    &__main {
        @extend .e-grid-3-1;
        align-items: start;
        position: relative;
    }

    &__meta {
        order: 1;

        @include breakpoint_m {
            grid-column: 2;
            grid-row: 1;
            position: sticky;
            top: $unit_xxxl;
            border-left: solid 2px var(--c-main-alt-2);
            padding-left: $unit_l;
        }
    }

    &__meta-list {
        font-size: $txt_s;
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
        font-size: $txt_s;
        order: 0;

        @include breakpoint_m {
            grid-row: 1;
            font-size: $txt_m;
        }

        // Prevent auto-linked images from causing page jumps
        a img {
            pointer-events: none;
        }
        
        a {
            &:hover {
                text-decoration: none;
            }
        }

        // Prevent any default image behavior
        img {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
    }
}
</style>