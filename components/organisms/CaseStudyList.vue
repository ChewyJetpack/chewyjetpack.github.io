<template> 
    <ul class="cs-list">
      <li class="cs-list__item u-bottom-spacer-xxl" v-for="caseStudy of caseStudies" :key="caseStudy.slug">
        <article class="cs-list__case-study">
            <NuxtLink class="cs-list__img" :to="caseStudy.path">
                <span class="u-img-accent--left--2">
                    <nuxt-img preset="thumb" :src="caseStudy.hero" :alt="caseStudy.title" />
                </span>
            </NuxtLink>
            <div class="cs-list__content">
                <h2 class="cs-list__title u-bottom-spacer-m">
                    <NuxtLink :to="caseStudy.path">
                        <span>{{ caseStudy.title }}</span>
                        <span aria-hidden="true" data-nosnippet>{{ caseStudy.title }}</span>
                    </NuxtLink>
                </h2>
                <p class="cs-list__excerpt u-bottom-spacer-s">
                    {{ caseStudy.description }}
                </p>
            </div>
        </article>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'CaseStudyList',
    props: {
        caseStudies: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.cs-list {
    list-style: none;

    &__case-study {
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