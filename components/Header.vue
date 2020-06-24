<template>
    <header class="c-header">
        <div class="c-header__inner">
            <div class="c-header__logo">
                <LogoIcon />
            </div>
            <nav class="c-header__nav">
                <nuxt-link v-for="link in links" :key="link.id" class="c-header__link" :to="link.ref">
                    {{ link.text }}
                </nuxt-link>
            </nav>
            <a class="c-header__ham" @click="toggleMenu">
                <HamIcon />
            </a>
        </div>
    </header>
</template>

<script>
    import HamIcon from '@/assets/icons/ham.svg?inline'
    import LogoIcon from '@/assets/icons/logo.svg?inline'
    export default {
        components: {
            HamIcon,
            LogoIcon
        },
        data () {
            return {
                links: [
                    {
                        ref: '/',
                        text: 'Home'
                    },
                    {
                        ref: '/blog',
                        text: 'Blog'
                    }
                ]
            }
        },
        methods: {
            toggleMenu () {
                console.log({
                    store: this.$store.state.menu.isActive,
                    from: 'Header'
                })
                this.$store.commit('toggleMenu', !this.$store.state.menu.isActive)
            }
        }
    }
</script>

<style scoped lang="scss">
  .c-header {
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 0px #999;
    padding: 16px 32px;
    &__inner {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    width: 100%;
    align-items: center;
    grid-gap: 32px;
    }
    &__nav {
      justify-self: end;
    }
    &__ham {
      svg {
        width: 32px;
        path {
          fill: var(--color-primary)
        }
      }
    }
    &__logo {
      svg {
        fill: var(--color-primary);
        width: 100px;
      }
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
