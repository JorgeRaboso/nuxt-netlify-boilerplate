<template>
    <div class="c-theme-picker">
        <a
            v-for="color of colors"
            :key="color.id"
            :class="getClasses(color)"
            class="c-theme-picker__option"
            @click="$colorMode.preference = color"
        >
            <component
                :is="`icon-${color}`"
                class="c-theme-picker__icon"
            />
            <span class="c-theme-picker__text">
                {{ color }}
            </span>
        </a>
    </div>
</template>

<script>
    import IconLight from '@/assets/icons/light.svg?inline'
    import IconDark from '@/assets/icons/dark.svg?inline'
    export default {
        components: {
            IconDark,
            IconLight
        },
        data () {
            return {
                colors: ['light', 'dark']
            }
        },
        methods: {
            getClasses (color) {
                // Does not set classes on ssr preference is system (because we know them on client-side)
                if (this.$colorMode.unknown) {
                    return {}
                }
                return {
                    preferred: color === this.$colorMode.preference,
                    selected: color === this.$colorMode.value
                }
            }
        }
    }
</script>

<style  lang="scss">
.c-theme-picker {
  display: flex;
  align-items: center;
  &__option {
    display: flex;
    flex-direction: column;
    color: var(--color-text);
    margin-right: 16px;
    text-align: center;
    opacity: .65;
    transition: 0.3s opacity;
    &.selected {
      opacity: 1;
      pointer-events: none;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__text {
    font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
    text-transform: uppercase;
  }
  &__icon {
    width: 32px;
    height: 32px;
    fill: var(--color-text)
  }
}
</style>
