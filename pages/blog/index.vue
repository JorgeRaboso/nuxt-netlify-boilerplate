
<template>
  <div class="c-posts">
    <div class="c-post" v-for="post in blogPosts" :key="post.id">
      <router-link :to="`blog/${post.slug}`" >LINK</router-link>
      <div class="c-post__title">{{post.title}}</div>
      <div class="c-post__name"></div>
    </div>
    <AllPostsTimeline/>
  </div>
</template>

<script>
import AllPostsTimeline from '../../components/allPostsTimeline'
export default {
  components: {
    AllPostsTimeline
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>

<style lang="scss">
  .c-posts {
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
</style>
