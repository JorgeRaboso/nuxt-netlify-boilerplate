<template>
    <a :href="href" target="_blank" class="c-banner">
        <div v-if="title || text" class="c-banner__heading">
            <div v-if="title" class="c-banner__title">
                {{ title }}
            </div>
            <div v-if="text" class="c-banner__text">
                {{ text }}
            </div>
        </div>
        <div target="_blank" class="c-banner__media">
            <img :alt="title" :src="src">
        </div>
    </a>
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
            },
            src: {
                type: String,
                default: undefined
            },
            href: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" scoped>
.c-banner {
  &__heading {
    padding-bottom: 16px;
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  &__text{
        font-size: 14px;
    line-height: 18px;
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
