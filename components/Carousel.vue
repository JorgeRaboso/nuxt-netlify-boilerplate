<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in items" :key="item.id">
            <component :is="component" v-if="component" v-bind="item" />
            <div v-else>
                {{ item }}
            </div>
        </swiper-slide>

        <div v-if="enableNavigation" class="">
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div slot="button-next" class="swiper-button-next"></div>
        </div>

        <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Post from '../components/Post'
    export default {
        name: 'Carrousel',
        components: {
            Swiper,
            SwiperSlide,
            Post
        },
        directives: {
            swiper: directive
        },
        props: {
            enableNavigation: {
                type: Boolean,
                default: false
            },
            component: {
                type: String,
                default: null
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
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
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
