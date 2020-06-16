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
<!--
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}
-->
