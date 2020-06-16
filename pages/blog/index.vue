
<template>
  <div class="c-posts">
    <div class="c-post" v-for="post in blogPosts" :key="post.id">
      <div class="c-post__title">{{post.title}}</div>
      <div class="c-post__name"></div>
      <div class="c-post__body" v-html="post.body">

      </div>
    </div>
   {{blogPosts}}
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>

<style>

</style>
