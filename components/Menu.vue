<template>
    <div class="c-aside-menu" :class="{'is-active': getState}">
        <div class="c-aside-menu__inner">
            <a class="c-aside-menu__close" @click="closeMenu">
                <Close />
            </a>
            <div class="c-aside-menu__item">
                <div class="c-aside-menu__item-title">
                    Elige contraste:
                </div>
                <div class="c-aside-menu__item-content">
                    <ColorModePicker />
                </div>
            </div>
        </div>
        <div class="c-aside-menu__overlay" @click="closeMenu"></div>
    </div>
</template>
<script>
    import ColorModePicker from '../components/ColorModePicker'
    import Close from '@/assets/icons/close.svg?inline'
    export default {
        components: {
            ColorModePicker,
            Close
        },
        data () {
            return {
                isActive: false
            }
        },
        computed: {
            getState () {
                return this.$store.state.menu.isActive
            }
        },
        methods: {
            closeMenu () {
                this.$store.commit('toggleMenu', !this.$store.state.menu.isActive)
            }
        }
    }
</script>

<style lang="scss">
  .c-aside-menu {
    position: fixed;
    top: 0;
    height: 100vh;
    transform: translateX(100%);
    transition: 0.3s transform ease-in-out;
    will-change: transform;
    display: flex;
    width: 100%;
    z-index: 10;
    justify-content: flex-end;
    &__close {
      transition: 0.3s transform;
      position: absolute;
      right: 32px;
      top: 32px;
      &:hover {
        transform: scale(1.1);
      }
      svg {
        width: 40px;
      }
    }
    &__overlay {
         content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.5);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          cursor: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMnB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5jYW5jZWw8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iY2FuY2VsIiBmaWxsPSIjMTlEREI4Ij4gICAgICAgICAgICA8cGF0aCBkPSJNMTQuMSwxMS4zIEMxMy45LDExLjEgMTMuOSwxMC44IDE0LjEsMTAuNiBMMjEuNiwzLjEgQzIxLjgsMi45IDIxLjksMi42IDIxLjksMi40IEMyMS45LDIuMiAyMS44LDEuOSAyMS42LDEuNyBMMjAuMiwwLjMgQzIwLDAuMSAxOS43LDAgMTkuNSwwIEMxOS4yLDAgMTksMC4xIDE4LjgsMC4zIEwxMS4zLDcuOCBDMTEuMSw4IDEwLjgsOCAxMC42LDcuOCBMMy4xLDAuMyBDMi45LDAuMSAyLjYsMCAyLjQsMCBDMi4yLDAgMS45LDAuMSAxLjcsMC4zIEwwLjMsMS43IEMwLjEsMS45IDAsMi4yIDAsMi40IEMwLDIuNiAwLjEsMi45IDAuMywzLjEgTDcuOCwxMC42IEM4LDEwLjggOCwxMS4xIDcuOCwxMS4zIEwwLjMsMTguOCBDMC4xLDE5IDAsMTkuMyAwLDE5LjUgQzAsMTkuNyAwLjEsMjAgMC4zLDIwLjIgTDEuNywyMS42IEMxLjksMjEuOCAyLjIsMjEuOSAyLjQsMjEuOSBDMi42LDIxLjkgMi45LDIxLjggMy4xLDIxLjYgTDEwLjYsMTQuMSBDMTAuOCwxMy45IDExLjEsMTMuOSAxMS4zLDE0LjEgTDE4LjgsMjEuNiBDMTksMjEuOCAxOS4zLDIxLjkgMTkuNSwyMS45IEMxOS43LDIxLjkgMjAsMjEuOCAyMC4yLDIxLjYgTDIxLjYsMjAuMiBDMjEuOCwyMCAyMS45LDE5LjcgMjEuOSwxOS41IEMyMS45LDE5LjMgMjEuOCwxOSAyMS42LDE4LjggTDE0LjEsMTEuMyBaIiBpZD0iUGF0aCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+),auto;

    }
    &.is-active {
      transform: translateX(0);

    }
    &__inner {
      padding: 64px 32px 32px;
        background: var(--base-background);
        z-index: 1000;
      max-width: 300px;
      position: relative;
      height: 100%;
      width: 100%;
    }
    &__item {
      margin-top: 32px;
      &-title {
        font-size: 18px;
        list-style: 36px;
      }
      &-content {
        padding: 16px;
      }
    }
  }
</style>
