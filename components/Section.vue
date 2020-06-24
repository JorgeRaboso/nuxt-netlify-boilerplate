<template>
    <div class="c-section">
        <div class="c-section__inner">
            <div v-if="title" class="c-section__heading">
                <h3 class="c-section__title">
                    {{ title }}
                </h3>
                <div v-if="text" class="c-section__text">
                    {{ text }}
                </div>
            </div>
            <div class="c-section__body">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" scoped>
.c-section {
  &__inner {
    padding: 32px;

  }
  &__title {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.4;
      position: relative;
      border-left: 3px solid var(--color-1);
      padding-left: 16px;
  }
  &__text {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 300;
    margin-top: 8px;
    padding-left: 16px;
  }
  &__heading {
    padding-bottom: 32px;
  }
}
</style>
