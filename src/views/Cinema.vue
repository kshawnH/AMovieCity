<template>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
        <template #left>
            {{ this.cityName }}<van-icon name="arrow-down"  color="black"/>
        </template>
        <template #right>
            <van-icon name="search"  size="28"  color="black"/>
        </template>
</van-nav-bar>
<!-- left-text="上海" left-arrow color="black" -->
  <div class="box" :style="{
    height:height
  }">
    <ul>
        <li v-for="data in this.cinemaList" :key="data.cinemaId"> 
            <div class="left">
                <div class="cinema_name">{{ data.name }}</div>
                <div class="cinema_text">{{ data.address }}</div>
            </div>

            <div class="right cinema_name">
                <div style="color:red;">￥{{ data.lowPrice/100 }}起</div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import {mapState,mapActions,mapMutations} from 'vuex'
import router from '@/router'
export default {
    data(){
        return{
            height:'0px'
        }
    },methods:{
        ...mapMutations(['changeCityName','changeCityId','clearCinema']),
        ...mapActions(['getCinemaData']),
        handleLeft(){
            router.push('/city')
            this.clearCinema()
        },
        handleRight(){
            router.push('/cinemas/search')
        },
    },
    computed:{
        ...mapState(['cinemaList','cityId','cityName'])
    },
    mounted(){
        //
        this.height=document.documentElement.clientHeight - document.querySelector("footer").offsetHeight
        -this.$refs.navbar.$el.offsetHeight+'px';
        if(this.cinemaList.length === 0){
           this.getCinemaData(this.cityId)
            .then(res=>{
                this.$nextTick(()=>{
            new BetterScroll('.box',{
                scrollbar:{
                    fade: true
                }
            })
        })
            })

        }else{
            this.$nextTick(()=>{
            new BetterScroll('.box',{
                scrollbar:{
                    fade: true
                }
            })
        })
        }
        // http({
        //     url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=7009628`,
        //     headers:{
        //         'X-Host': 'mall.film-ticket.cinema.list',
        //     }
        // }).then((res)=>{
        //     console.log(res);
        //     this.cinemaList = res.data.data.cinemas
        //     this.$nextTick(()=>{
        //         new BetterScroll('.box',{
        //             scrollbar:{
        //                 fade: true
        //             }
        //         })
        //     })
        // })
    }
}
</script>

<style lang="scss" scoped>
    li{
        padding:.9375rem;
        display: flex;
        justify-content: space-between;
        .left{
            width: 13.25rem;
    }
    .cinema_text{
        font-size: .75rem;
        margin-top: .3125rem;
        color:#797d82;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cinema_name{
        font-size: .9375rem;
    }
    
    }
    .box{
        height: 18.75rem;
        overflow: hidden;
        position: relative;
    }
</style>