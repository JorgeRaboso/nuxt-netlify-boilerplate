<template>
    <div class="c-change-view">
        <a :class="{'is-active' : view == 'grid'}" class="c-change-view__item" @click="changeView('grid')">
            <svg
                width="270px"
                height="270px"
                viewBox="0 0 270 270"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <title>menu</title>
                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g id="menu" fill="#000000" fill-rule="nonzero">
                        <path id="Shape" d="M114,0 L10,0 C4.5,0 0,4.5 0,10 L0,114 C0,119.5 4.5,124 10,124 L114,124 C119.5,124 124,119.5 124,114 L124,10 C124,4.5 119.5,0 114,0 Z M104,104 L20,104 L20,20 L104,20 L104,104 Z" />
                        <path id="Shape" d="M260,0 L156,0 C150.5,0 146,4.5 146,10 L146,114 C146,119.5 150.5,124 156,124 L260,124 C265.5,124 270,119.5 270,114 L270,10 C270,4.5 265.5,0 260,0 Z M250,104 L166,104 L166,20 L250,20 L250,104 Z" />
                        <path id="Shape" d="M114,146 L10,146 C4.5,146 0,150.5 0,156 L0,260 C0,265.5 4.5,270 10,270 L114,270 C119.5,270 124,265.5 124,260 L124,156 C124,150.5 119.5,146 114,146 Z M104,250 L20,250 L20,166 L104,166 L104,250 Z" />
                        <path id="Shape" d="M260,146 L156,146 C150.5,146 146,150.5 146,156 L146,260 C146,265.5 150.5,270 156,270 L260,270 C265.5,270 270,265.5 270,260 L270,156 C270,150.5 265.5,146 260,146 Z M250,250 L166,250 L166,166 L250,166 L250,250 Z" />
                    </g>
                </g>
            </svg>
        </a>
        <a :class="{'is-active' : view == 'list'}" class="c-change-view__item" @click="changeView('list')">
            <svg
                width="512px"
                height="512px"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <title>lista</title>
                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g id="lista" fill="#000000" fill-rule="nonzero">
                        <path id="Shape" d="M72,0 C32.299,0 0,32.299 0,72 C0,111.701 32.299,144 72,144 C111.701,144 144,111.701 144,72 C144,32.299 111.701,0 72,0 Z M72,112 C49.944,112 32,94.056 32,72 C32,49.944 49.944,32 72,32 C94.056,32 112,49.944 112,72 C112,94.056 94.056,112 72,112 Z" />
                        <path id="Shape" d="M72,184 C32.299,184 0,216.299 0,256 C0,295.701 32.299,328 72,328 C111.701,328 144,295.701 144,256 C144,216.299 111.701,184 72,184 Z M72,296 C49.944,296 32,278.056 32,256 C32,233.944 49.944,216 72,216 C94.056,216 112,233.944 112,256 C112,278.056 94.056,296 72,296 Z" />
                        <path id="Shape" d="M72,368 C32.299,368 0,400.299 0,440 C0,479.701 32.299,512 72,512 C111.701,512 144,479.701 144,440 C144,400.299 111.701,368 72,368 Z M72,480 C49.944,480 32,462.056 32,440 C32,417.944 49.944,400 72,400 C94.056,400 112,417.944 112,440 C112,462.056 94.056,480 72,480 Z" />
                        <path id="Shape" d="M248,144 L440,144 C479.701,144 512,111.701 512,72 C512,32.299 479.701,0 440,0 L248,0 C208.299,0 176,32.299 176,72 C176,111.701 208.299,144 248,144 Z M248,32 L440,32 C462.056,32 480,49.944 480,72 C480,94.056 462.056,112 440,112 L248,112 C225.944,112 208,94.056 208,72 C208,49.944 225.944,32 248,32 Z" />
                        <path id="Shape" d="M440,184 L248,184 C208.299,184 176,216.299 176,256 C176,295.701 208.299,328 248,328 L440,328 C479.701,328 512,295.701 512,256 C512,216.299 479.701,184 440,184 Z M440,296 L248,296 C225.944,296 208,278.056 208,256 C208,233.944 225.944,216 248,216 L440,216 C462.056,216 480,233.944 480,256 C480,278.056 462.056,296 440,296 Z" />
                        <path id="Shape" d="M440,368 L248,368 C208.299,368 176,400.299 176,440 C176,479.701 208.299,512 248,512 L440,512 C479.701,512 512,479.701 512,440 C512,400.299 479.701,368 440,368 Z M440,480 L248,480 C225.944,480 208,462.056 208,440 C208,417.944 225.944,400 248,400 L440,400 C462.056,400 480,417.944 480,440 C480,462.056 462.056,480 440,480 Z" />
                    </g>
                </g>
            </svg>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            view: {
                type: String,
                default: undefined
            }
        },
        methods: {
            changeView (e) {
                this.$emit('change-view', e)
            }
        }
    }
</script>

<style scoped lang="scss">
.c-change-view {
  display: flex;
  justify-content: flex-end;

  &__item {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s background;
    position: relative;
    &::before {
    content: "";
    width: 0;
    height: 0;
    border-radius: 4px;
    margin: 0 auto;
    position: absolute;
    z-index: -1;
    transition: 0.3s all;
    }
    &.is-active {
      &::before{
        background: var(--change-layout-icons-background);
        width: 48px;
        height: 48px;
      }
      pointer-events: none;
      svg {
        path {
           fill: var(--change-layout-icons-color-active)
        }
      }
    }
    svg {
      width: 24px;
      height: 24px;
      path {
        fill: var(--change-layout-icons-color)
      }
    }
  }
}
</style>
