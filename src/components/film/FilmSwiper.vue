<template>
  <div class="swiper-container hsj">
    <div class="swiper-wrapper ">
        <slot></slot>
    </div>
    <div class="swiper-pagination point"></div>

  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
    props:{
        loop:{
            
        }
    },
    mounted(){
        new Swiper('.hsj', {
            //direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 2500,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
</script>

<style lang="scss" scoped>
    .point{
        position: absolute;
        top: 15.625rem;
        width: 100%;
        height: 1.25rem;
    }
</style>