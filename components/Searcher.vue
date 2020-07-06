<template>
    <Popover>
        <div ref="searcher" class="c-search-box" :class="{'is-active' : isOpened}">
            <div class="c-search-box__inner">
                <div class="c-search-box__input">
                    <input
                        v-model="search"
                        type="text"
                        name="seacher"
                        placeholder="Buscar"
                        @click="openSearcher"
                    >
                    <span @click="closeSearcher"></span>
                </div>
                <div class="c-search-box__results">
                    <template v-if="filteredPosts.length > 0">
                        <Post
                            v-for="post in filteredPosts"
                            :key="post.id"
                            class="c-post--list"
                            :title="post.title"
                            :imagen="post.imagen"
                            :slug="post.slug"
                        />
                    </template>
                    <div v-else class="c-search-box__no-results">
                        No hay resultados
                    </div>
                </div>
            </div>
        </div>

        <template slot="reference">
            <p>Aquí va alguna información de contacto</p>
        </template>
    </Popover>
</template>

<script>
    import Post from '../components/Post'
    import Popover from '../components/Popover'

    export default {
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Post,
            // eslint-disable-next-line vue/no-unused-components
            Popover
        },
        data () {
            return {
                search: '',
                posts: [],
                isOpened: false
            }
        },
        computed: {
            filteredPosts () {
                return this.posts.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        mounted () {
            this.getPosts()
        },
        methods: {
            closeSearcher () {
                this.isOpened = false
            },
            openSearcher () {
                this.isOpened = true
            },
            getPosts () {
                this.posts = this.$store.state.posts.blogPosts
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-search-box {
    border: solid 2px black;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    span {
      cursor: pointer;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -13px;
      right: -15px;
      transition: bottom 150ms ease-out 150ms, right 150ms ease-out 150ms;
      &::before,
      &::after {
        content: '';
        height: 25px;
        border-left: solid 5px black;
        position: absolute;
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
        opacity: 0;
        top: -20px;
        right: -10px;
        transition: top 150ms ease-out, right 150ms ease-out, opacity 150ms ease-out;
      }
    }
    input[type="text"] {
      font-size: 20px;
      font-weight: bold;
      width: 50px;
      height: 50px;
      padding: 5px 40px 5px 10px;
      border: none;
      box-sizing: border-box;
      border-radius: 50px;
      transition: width 400ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 300ms;
      &:focus {
        outline: none;
      }
      &.is-active{

      }
    }
    &.is-active {
      input[type="text"]{
                width: 300px;
        transition: width 400ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
        + span {
          bottom: 13px;
          right: 10px;
          transition: bottom 150ms ease-out 400ms, right 150ms ease-out 400ms;
        }
        + span:after {
          top: 0;
          right: 10px;
          opacity: 1;
          transition: top 150ms ease-out 550ms, right 150ms ease-out 550ms, opacity 150ms ease 550ms;
        }
      }
    }

  }

</style>
