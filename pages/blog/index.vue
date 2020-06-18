
<template>
    <AllPosts :posts="blogPosts" />
</template>

<script>
    import AllPosts from '../../components/AllPosts'

    export default {
        components: {
            AllPosts
        },
        computed: {
            blogPosts () {
                return this.$store.state.blogPosts
            }
        }
    }
</script>
