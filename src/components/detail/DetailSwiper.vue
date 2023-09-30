<template>
    <div class="swiper-container hsj" :class="name">
      <div class="swiper-wrapper ">
          <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper/bundle'
  import 'swiper/swiper-bundle.css'
  export default {
      props:{
          loop:{
              
          },
          preview:{
            type:Number,
            default:1
          },
          name:{
            type:String,
            default:'hsj'

          }
      },
      mounted(){
          new Swiper('.'+this.name, {
              //direction: 'vertical',
              slidesPerView: this.preview,
        spaceBetween: 30,
        freeMode: true,
              
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