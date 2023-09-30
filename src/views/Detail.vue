<template>
    <div v-if="obj.filmInfo">
        <detail-header v-scroll="60">
            {{ obj.filmInfo.name }}
        </detail-header>
        <!-- <img :src="obj.filmInfo.poster" alt=""> -->
        <div :style="{
           backgroundImage: 'url('+obj.filmInfo.poster+')'
        }" class="poster"></div>
        <div class="content">
           <div>{{obj.filmInfo.name}}</div> 
                <div class="detail-text">{{obj.filmInfo.category}}</div>
                <div class="detail-text">{{ datetimeFilter(obj.filmInfo.premiereAt) }}</div>
                <div class="detail-text">{{ obj.filmInfo.nation }}
                | {{ obj.filmInfo.runtime }}分钟
                <div class="detail-text" style="line-height: .8125rem;   " :class="obj.isHidden?'hidden':''">
                    {{ obj.filmInfo.synopsis }}
                </div>
                <div style="text-align:center;">
                    <i @click="obj.isHidden=!obj.isHidden" >打开</i>
                </div>
                </div>
                <!-- 演职人员 -->
            <div>
                <div>演职人员</div>
                <detail-swiper :preview="3.5" name="actors" style="overflow: hidden;">
                    <detail-swiper-item v-for=" (data,index) in obj.filmInfo.actors"
                    :key="index">
                    <div :style="{
                    backgroundImage: 'url('+data.avatarAddress+')'
                    }" class="avatar"></div>
                    <div style="text-align: center; font-size: .75rem;">{{ data.name }}</div>
                    <div  style="text-align: center; font-size: .8125rem">{{ data.role }}</div>
                </detail-swiper-item>
                </detail-swiper>
            </div>

            <!-- 剧照 -->
            <div>
                <div>剧照</div>
                <detail-swiper :preview="2" name="photos" style="overflow: hidden;">
                    <detail-swiper-item v-for=" (data,index) in obj.filmInfo.photos"
                    :key="index">
                    <div :style="{
                    backgroundImage: 'url('+data+')'
                    }" class="avatar"
                     @click="handlePreview(index)"
                    ></div>
                </detail-swiper-item>
                </detail-swiper>
            </div>
        </div>

    </div>
</template>
<script>
import http from '@/util/http.js'
import {onMounted,onUnmounted, reactive,} from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import detailHeader from '@/components/detail/DetailHeader.vue'
import detailSwiper from '@/components/detail/DetailSwiper.vue'
import detailSwiperItem from '@/components/detail/DetailSwiperItem.vue'
import { ImagePreview} from 'vant';
import obj from '@/util/mixinObj.js'
export default{
    mixins:[obj],
    data(){
        return{
        }
    },
    components:{
        detailSwiper,
        detailSwiperItem,
        detailHeader
    },
    directives:{
        scroll:{
            mounted(el,binding){
                el.style.display="none";
                window.onscroll=()=>{
                    if(document.documentElement.scrollTop || document.body.scrollTop>binding.value){
                        el.style.display="block";
                }else{
                    el.style.display="none";
                }
            }
        },
        destroyed() {
            window.onscroll=null;
        },
    }
    },
    setup(){
        let obj=reactive({
            filmInfo:null,
            isHidden:true
        })
        
        const router = useRouter();
        const route = useRoute();
        const store = useStore();
           onMounted(()=>{
            
            window.onscroll=()=>{
                if(document.documentElement.scrollTop>50){
                    store.commit("hide");
                }else{
                    store.commit("show");
                }
            }
            store.commit("hide");
        console.log(route.params.id);
        http({
                url: `/gateway?filmId=${route.params.id}&k=198270`,
                headers:{
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res=>{
                console.log(res.data);
                obj.filmInfo=res.data.data.film;
            })
    })
    onUnmounted(()=>{
        store.commit("show");
        window.onscroll=null;
        
    })
    const handlePreview=(index)=>{
            ImagePreview({
                images:obj.filmInfo.photos,
                startPosition:index,
                closeable:true,
                closeIconPosition:'top-left'
            })
        }
    const datetimeFilter=(data)=>{
        let date=new Date(data*1000);
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        return `${year}-${month}-${day}`
    }
    return{
        obj,
        datetimeFilter,
        handlePreview,

    }
    
}
}
</script>
<style lang="scss" scoped>
.poster{
    height: 13.125rem;
    width: 100%;
    background-position: center;
    background-size: cover;

}
.content{
    padding: .9375rem;
    .detail-text{
        font-size:.8125rem;
        color: #797d82;
        margin-top: .25rem;
    }
}
.hidden{
    overflow: hidden;
    height: 1.5625rem ;
}
.avatar{
    width: 100%;
    height: 5.3125rem;
    background-position: center;
    background-size: cover;
}
</style>