<template>
    <div class="c-post">
        <div class="c-post__content">
            <div class="c-post__tag">
                {{ category }}
            </div>
            <h2 class="c-post__title">
                <router-link :to="`blog/${slug}`">
                    {{ title }}
                </router-link>
            </h2>
            <p class="c-post__description">
                {{ description }}
            </p>
        </div>
        <div class="c-post__media">
            <router-link :to="`blog/${slug}`">
                <img :src="imagen" :alt="title">
            </router-link>
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
            category: {
                type: String,
                default: undefined
            },
            description: {
                type: String,
                default: undefined
            },
            slug: {
                type: String,
                default: undefined
            },
            imagen: {
                type: String,
                default: undefined
            },
            body: {
                type: String,
                default: undefined
            },
            date: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" >
  .c-post {
    &__description {
    overflow: hidden;
    height: 50px ;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--post-color);
    line-height: 24px;
    }
    &__tag {
      color: var(--post-color);
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    &__title {
      font-size: 20px;
      line-height: 24px;
      direction: block;
      font-weight: 600;
      color: var(--post-color);
      a {
        color: currentColor;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
