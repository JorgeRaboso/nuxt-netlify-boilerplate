<template>
    <picture class="c-picture">
        <img
            class="c-picture__img"
            :src="src"
            :alt="alt"
            :title="title"
        >
    </picture>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/1920x1080'
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-picture {
    --c-picture-ratio-width: 16;
    --c-picture-ratio-height: 9;
    --c-picture-overlay: rgba(0,0,0,.5);
    --c-picture-loading-background: #f6f6f6;
  }
</style>

<style scoped lang="scss">
  .c-picture {
    overflow: hidden;
    position: relative;

    &::before {
      display: block;
      width: 100%;
      padding-top: calc(calc(var(--c-picture-ratio-height) / var(--c-picture-ratio-width)) * 100%);
      content: "";
      background: var(--c-picture-loading-background);
    }

    img,
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    img {
      transition: 0.3s opacity;
      will-change: opacity;
    }

    &::after {
      content: "";
      background: var(--c-picture-overlay);
      z-index: 2;
    }

    &.is-loaded {
      img {
        opacity: 1;
      }
    }
  }
</style>
