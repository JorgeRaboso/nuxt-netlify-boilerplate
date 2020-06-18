<template>
    <header class="c-header">
        <div class="c-header__inner">
            <nav class="c-header__nav">
                <nuxt-link :to="link.ref" v-for="link in links" :key="link.id">
                   {{link.text}}
                </nuxt-link>
            </nav>
        </div>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            ref: '/blog',
            text: 'Blog',
          },
          {
            ref: '/',
            text: 'Home',
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-header {
    padding: 16px;
    display: flex;
    align-items: center;
  }
</style>
