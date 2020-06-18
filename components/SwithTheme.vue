<template>
    <div class="c-switch-theme" @click="changeTheme()">
        Swith Theme
    </div>
</template>
<script>
    export default {
        created () {
            if (this.$store.state.activeTheme) {
                this.$store.dispatch('setTheme')
            }
        },
        methods: {
            changeTheme (elem) {
                this.$store.commit('setTheme')
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-switch-theme {
    cursor: pointer;
    color: var(--switch-color);
  }
</style>
