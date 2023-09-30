<template>
    <div>
        <film-swiper :key="datalist.length" class="shell">
            <film-swiper-item v-for="data in datalist " :key="data.id" class="filmswiperItem">
                <img :src="data.imgUrl"/>
            </film-swiper-item>
        </film-swiper>
        <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
import FilmSwiper from '@/components/film/FilmSwiper.vue'
import FilmSwiperItem from '@/components/film/FilmSwiperItem.vue'; 
import FilmHeader from '@/components/film/FilmHeader.vue';  
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        setTimeout(() =>{
            // this.datalist=["aaaa","bbbb","cccc"]
            axios.get("/banner.json").then(res=>{
                this.datalist=res.data.banner
            })
        },1000)
    },
    components:{
        FilmSwiper,
        FilmSwiperItem,
        FilmHeader
    }
}
</script>
<style lang="scss" scoped>
.shell{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
    .filmswiperItem{
    // width:100%;
    // height:100%;
    img{
        width:100%;
        position: relative;
        // height:100%;
    }
}
}
.sticky{
    position:sticky;
    top: 0rem;
    z-index: 999;
    background-color: white;
}

</style>