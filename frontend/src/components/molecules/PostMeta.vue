<template>
    <div class="post__meta">
        <span class="post__date u-right-spacer-m u-top-spacer-s">
            <font-awesome :icon="postType == 'post' ? ['far', 'calendar'] : 'history'" class="u-right-spacer-xxs" />
            <span v-if="postType == 'post'">{{ date | moment("MMM Do, YYYY") }}</span>
            <span v-else>From: {{ date | moment("YYYY") }}</span>
        </span>
        <span class="post_read-time u-right-spacer-m u-top-spacer-s">
            <font-awesome icon="hourglass-half" class="u-right-spacer-xxs" />
            {{ readingTime }}
        </span>

        <Tags 
            v-if="!fullPost && postType == 'post'"
            :tags="tags" 
            :class="[ 'u-top-spacer-s', { 'u-top-spacer-xxl': fullPost }]"
            :fullPost="fullPost"
        />
    </div>
</template>

<script>
import Tags from '~/components/atoms/Tags'

export default {
    props: {
        fullPost: {
            type: Boolean
        },
        date: {
            type: String
        },
        postType: {
            type: String
        },
        readingTime: {
            type: String
        },
        tags: {
            type: Array
        }
    },
    components: {
        Tags
    }
}
</script>