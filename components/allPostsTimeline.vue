<template>
  <div class="c-all-posts">
    {{ PostsTimeline }}
    <br>
    {{this.$route.params}}
  </div>
</template>
<script>
  export default {
    methods: {

    },
    computed: {
      PostsTimeline() {
        return this.$store.getters['getLastPostOrderedByDate']
      },
    }
  }
</script>

