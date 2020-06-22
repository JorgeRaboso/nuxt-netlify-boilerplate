<template>
    <div
        class="c-posts-list"
        :class="{
            'c-posts-list--grid' : view === 'grid',
            'c-posts-list--list' : view === 'list'
        }"
    >
        <Filters :is-filtered="isFiltered" :filter-list="categories" @change-filter="getPostByCategory" />
        <div class="c-posts-list__heading">
            <div class="c-post-count">
                {{ postCount.count }} {{ postCount.text }}
            </div>
            <ChangePostView :view="view" @change-view="changeView" />
        </div>

        <div class="c-posts-list__inner">
            <Post v-for="post in posts" :key="post.id" v-bind="post" />
        </div>
    </div>
</template>

<script>
    import Post from '../components/Post'
    import ChangePostView from '../components/ChangePostView'
    import Filters from '../components/Filters'

    export default {
        components: {
            Post,
            ChangePostView,
            Filters
        },
        data () {
            return {
                categories: [],
                posts: [],
                isFiltered: false,
                filtered: [],
                view: 'grid',
                activeFilter: 'all'
            }
        },
        computed: {
            postCount: function () {
                const postsNumber = {
                    count: this.posts.length > 0 ? this.posts.length : 0,
                    text: this.posts.length > 0 ? 'Resultados' : 'Resultado'
                }

                return postsNumber
            }
        },
        mounted () {
            this.getPosts()
            this.getCategories()
        },
        methods: {
            changeView (newView) {
                this.view = newView
            },
            getCategories () {
                this.categories = this.$store.state.posts.categories
            },
            getPosts () {
                this.posts = this.$store.state.posts.blogPosts
            },
            getPostByCategory (category) {
                this.activeFilter = category
                if (this.activeFilter === 'all') {
                    this.getPosts()
                    this.isFiltered = false
                } else {
                    this.isFiltered = true
                    this.posts = this.$store.getters.getPostByCategory(category)
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-posts-list {
    padding: 32px;
    &__inner {
      display: grid;
      grid-gap: 32px;
    }
    &__heading {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
          margin-bottom: 32px;
    border-bottom: 1px solid var(--base-text);
    padding-bottom: 16px;
    }
    &--grid {
      .c-post {
          &__media {
            margin-top: 16px;
          }
        }
      .c-posts-list {
        &__inner {

          @media (min-width: 1024px)  {
             grid-template-columns: 1fr 1fr 1fr;
          }
                 @media (min-width: 1200px)  {
             grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 1023px)  {
             grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 480px)  {
             grid-template-columns: 1fr;
          }
        }
      }
    }
    &--list {
      .c-posts-list {
        grid-template-columns: 1fr;
      }
     .c-post {
       &__inner {
          display: grid;
          grid-template-columns: 130px auto;
          grid-gap: 32px;
       }
       &__media {
         order: -1;
       }
      }
    }
  }

</style>
