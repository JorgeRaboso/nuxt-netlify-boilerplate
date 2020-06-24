<template>
    <Section v-bind="literals.headingSection">
        <template slot="body">
            <div class="c-results">
                <div class="c-results__inner">
                    <div class="c-results__body">
                        <div
                            class="c-posts-list"
                            :class="{'c-posts-list--grid' : getViewState === 'grid','c-posts-list--list' : getViewState === 'list'}"
                        >
                            <div class="c-posts-list__heading">
                                <div class="c-post-count">
                                    {{ postCount.count }} {{ postCount.text }}
                                </div>
                                <ChangePostView :view="getViewState" @change-view="changeView" />
                            </div>

                            <div class="c-posts-list__inner">
                                <Post v-for="post in posts" :key="post.id" v-bind="post" />
                            </div>
                        </div>
                    </div>
                    <div class="c-results__aside">
                        <Filters class="c-results__filter" :is-filtered="isFiltered" :filter-list="categories" @change-filter="getPostByCategory" />
                        <Banner v-bind="banner" />
                    </div>
                </div>
            </div>
        </template>
    </Section>
</template>

<script>
    import Post from '../components/Post'
    import ChangePostView from '../components/ChangePostView'
    import Filters from '../components/Filters'
    import Section from '../components/Section'
    import Banner from '../components/Banner'

    export default {
        components: {
            Post,
            ChangePostView,
            Filters,
            Section,
            Banner
        },
        data () {
            return {
                literals: {
                    headingSection: {
                        title: 'All Posts',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius doloribus numquam totam quas nam corrupti maxime obcaecati molestias repellendus? Delectus sapiente iste eius repudiandae.'
                    }
                },
                banner: {
                    src: 'https://miro.medium.com/freeze/max/304/1*vbxsCjMIFnA-Uif2SJmcQA.gif',
                    href: 'https://www.google.es',
                    title: 'Indie.vc: Unicorns Are Out, Profits Are In',
                    text: 'Why a creative approach to venture capital is powering more sustainable startups — and more diverse founders'
                },
                categories: [],
                posts: [],
                isFiltered: false,
                filtered: [],
                view: undefined,
                activeFilter: 'all'
            }
        },
        computed: {
            postCount: function () {
                const postsNumber = {
                    count: this.posts.length > 0 ? this.posts.length : 0,
                    text: this.posts.length > 1 ? 'Results' : 'Result'
                }

                return postsNumber
            },
            getViewState () {
                return this.$store.getters.getView
            }
        },
        mounted () {
            this.getPosts()
            this.getCategoriesWithPosts()
        },
        methods: {
            changeView (newView) {
                this.$store.commit('setView', newView)
            },
            getCategoriesWithPosts () {
                const categories = this.$store.state.posts.categories
                categories.forEach(cat => {
                    this.posts.some(post => {
                        if (post.category === cat.name) {
                            return this.categories.push(cat.name)
                        }
                    })
                })
            },
            getPosts () {
                this.posts = this.$store.state.posts.blogPosts.filter(post => !post.sticky)
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
.c-results {
  &__inner {
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-gap: 32px;
  }
}
  .c-posts-list {
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

             grid-template-columns: 1fr 1fr;

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
