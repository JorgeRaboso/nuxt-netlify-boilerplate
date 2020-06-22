<template>
    <div class="c-section">
        <div class="c-section__sticky">
            <swiper ref="mySwiper" :options="swiperOptions">
                <template v-if="posts">
                    <swiper-slide v-for="post in posts" :key="post.id">
                        <Post class="c-post--sticky" v-bind="post" />
                    </swiper-slide>
                </template>

                <div class="">
                    <div slot="button-prev" class="swiper-button-prev"></div>
                    <div slot="button-next" class="swiper-button-next"></div>
                </div>

                <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
        </div>
        <div class="c-section__banner">
            Banner
        </div>
    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Post from '../components/Post'
    export default {
        components: {
            Swiper,
            SwiperSlide,
            Post
        },
        data () {
            return {
                posts: null,
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        computed: {
            swiper () {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted () {
            this.getStickyPosts()
            this.initSlider()
        },
        methods: {
            initSlider () {
                this.swiper.slideTo(3, 1000, false)
            },
            getStickyPosts () {
                this.posts = this.$store.getters.getStickyPosts
                console.log(this.posts)
            }
        }
    }
</script>

<style lang="scss">
.c-section {
  &__sticky {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding: 32px;
  }
}
</style>
