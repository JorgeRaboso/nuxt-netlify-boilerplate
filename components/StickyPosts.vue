<template>
    <Section v-bind="literals.headingSection">
        <template slot="body">
            <div class="c-blog-display">
                <div class="c-blog-display__sticky">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <template v-if="posts">
                            <swiper-slide v-for="post in posts" :key="post.id">
                                <Post class="c-post--sticky" v-bind="post" />
                            </swiper-slide>
                        </template>
                        <div v-if="posts && enableSliderControls" class="">
                            <div slot="button-prev" class="swiper-button-prev"></div>
                            <div slot="button-next" class="swiper-button-next"></div>
                        </div>
                        <div v-if="posts && enableSliderControls" slot="pagination" class="swiper-pagination"></div>
                    </swiper>
                </div>
                <div class="c-blog-display__banner">
                </div>
            </div>
        </template>
    </Section>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Post from '../components/Post'
    import Section from '../components/Section'
    export default {
        components: {
            Swiper,
            SwiperSlide,
            Post,
            Section
        },
        data () {
            return {
                literals: {
                    headingSection: {
                        title: 'Related posts',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius doloribus numquam totam quas nam corrupti maxime obcaecati molestias repellendus? Delectus sapiente iste eius repudiandae.'
                    }
                },
                posts: undefined,
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
            },
            enableSliderControls () {
                return this.posts.length > 1
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
            }
        }
    }
</script>

<style lang="scss">
.c-blog-display {
  display: grid;
  grid-template-columns: 50% 50%;
  &__sticky {
    max-width: 100%;
  }
}
</style>
