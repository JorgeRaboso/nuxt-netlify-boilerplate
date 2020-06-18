<template>
    <header class="c-header">
        <div class="c-header__inner">
            <nav class="c-header__nav">
                <nuxt-link v-for="link in links" :key="link.id" class="c-header__link" :to="link.ref">
                    {{ link.text }}
                </nuxt-link>
            </nav>
            <SwitchTheme class="c-header__switch-theme" />
        </div>
    </header>
</template>

<script>
    import SwitchTheme from '../components/SwithTheme'
    export default {
        components: {
            SwitchTheme
        },
        data () {
            return {
                links: [
                    {
                        ref: '/blog',
                        text: 'Blog'
                    },
                    {
                        ref: '/',
                        text: 'Home'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
  .c-header {
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 0px #999;
    padding: 32px;
    &__inner {
      display: grid;
      grid-template-columns: 1fr auto;
      width: 100%;
    }
    &__link {
      margin-right: 32px;
      color: var(--header-link-color);
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;
      text-transform: uppercase;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
