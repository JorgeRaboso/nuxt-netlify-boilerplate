<template>
    <popper trigger="click" :options="{placement: 'bottom'}">
        <div class="popper">
            <slot />
        </div>

        <button slot="reference">
            Reference Element
        </button>
    </popper>
</template>

<script>
    import Popper from 'vue-popperjs'
    import 'vue-popperjs/dist/vue-popper.css'

    export default {
        name: 'Popover',
        components: {
            popper: Popper
        },
        mounted () {

        }
    }
</script>

<style lang="scss" scoped>
  .c-popover {
    position: absolute;
    &__arrow {
      z-index: 1;
      width: 0;
      height: 0;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 15px solid #fff;
      margin-left: 15px;
      position: absolute;
      top: 0;
      border-bottom: 15px solid #ccc;
    }
    &__inner {
      padding: 16px;
      background: #fff;
      max-width: 100%;
      width: 100%;
      background: #fff;
      box-shadow: 0 1px 5px #959595;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-height: 300px;
      overflow-y: auto;
      position: relative;
    }
  }
</style>
