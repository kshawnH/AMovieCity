<template>
    <div>
  <van-index-bar :index-list="computedList " @select="handleChange">
    <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index=" data.type " />
        <van-cell  :title="item.name"  v-for="item in data.list" :key="item.cityId" @click="handleClick(item)"/>
    </div>
    </van-index-bar>
    </div>
</template>

<script>
import http from '@/util/http.js'
import { Toast,onUnmounted,onMounted, } from 'vant'
import obj from '@/util/mixinObj.js'


export default {
    // mixins:[obj],
    data(){
        return{
            cityList:[ ]
        }
    },
    computed:{
        computedList(){
            return this.cityList.map(data=>data.type)
        }
    },
    mounted(){
        this.$store.commit("hide")
        http({
            url:'/gateway?k=4136940',
            headers:{
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            this.cityList=this.renderCity(res.data.data.cities)
        })
    },
    unmounted() {
        this.$store.commit("show")
    },
    methods:{
        handleChange(data){
            Toast(data)
        },
        renderCity(list){
            var cityList = [];
            var letterList = [];
            for(var i=65;i<91;i++){
                letterList.push(String.fromCharCode(i));
            }
            letterList.forEach(letter=>{
                var newList=list.filter(data=>data.pinyin.substring(0,1).toUpperCase()===letter);
                newList.length>0 && cityList.push({
                    type:letter,
                    list:newList
                })
            })
            return cityList;
        },
        handleClick(item){
            // this.$store.state.cityName=item.name;
            this.$store.commit("changeCityName",item.name)
            this.$store.commit("changeCityId",item.cityId)
            this.$router.back()
        }
    },
    // setup() {
    //     onMounted(() => {
    //     this.$store.commit("hide")
    // }),
    //     onUnmounted(() => {
    //     this.$store.commit("show")
    // })
    // }
    }
</script>

<style lang="scss" >
    .van-toast--text, .van-toast--html{
        min-width: 1.875rem;
    }
</style>