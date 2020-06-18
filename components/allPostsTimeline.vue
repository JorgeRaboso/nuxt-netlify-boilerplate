<template>
    <div class="c-all-posts">
        {{ PostsTimeline }}
        <br>
        {{ this.$route.params }}
    </div>
</template>
<script>
    export default {
        computed: {
            PostsTimeline () {
                return this.$store.getters.getLastPostOrderedByDate
            }
        },
        methods: {

        }
    }
</script>
