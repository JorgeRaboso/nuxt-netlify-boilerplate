<template>
  <div class="c-all-posts">
    Todos los posts <br>
    {{PostsTimeline}}
  </div>
</template>
<script>
  export default {
    methods: {

    },
    computed: {
      PostsTimeline() {
        return this.$store.state.PostsTimeline;
      },
    }
  }
</script>

