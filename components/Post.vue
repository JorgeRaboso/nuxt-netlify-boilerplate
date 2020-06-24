<template>
    <div class="c-post">
        <div class="c-post__inner">
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
      color: #01c58d;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 4px;
      font-weight: 600;
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
    &--sticky {
      color: var(--white);
      .c-post {
        &__inner {
          display: grid;
          grid-template-columns: 1fr;
        }
        &__content {
          z-index: 2;
          grid-column: 1/2;
          grid-row: 1/2;
          padding: 16px;
        }
        &__description,
        &__tag,
        &__title {
          color: var(--white);
        }
        &__media {
          z-index: 1;
          grid-column: 1/2;
          grid-row: 1/2;
          position: relative;
          &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.45);
            content: "";
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
