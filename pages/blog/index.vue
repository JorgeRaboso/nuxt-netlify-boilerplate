
<template>
    <div>
        <StickyPosts />
        <PostsList />
    </div>
</template>

<script>
    import PostsList from '../../components/PostsList'
    import StickyPosts from '../../components/StickyPosts'

    export default {
        components: {
            PostsList,
            StickyPosts
        }
    }
</script>
