<template>
    <div>
        <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="我是有底线的"
  @load="onLoad"
  :immediate-check="false"
>
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src="data.poster" alt="">
                <div>
                    <div class="title">{{ data.name }}</div>
                    <div class="content">
                        <div :class="data.grade ? '':'hidden'">
                            观众评分： <span style="color: red">{{ data.grade }}</span>
                        </div>
                        
                        <div class="actor-ellipsis">主演：{{ actorFilter(data.actors) }}</div>

                    <div>
                        {{ data.nation }} | {{ data.runtime }}分钟 | {{ data.category }}
                    </div>
                    </div>
                
                </div>


            </van-cell>
        </van-list>
    </div>
</template>

<script>
import http from '@/util/http.js'
export default{
    data(){
        return{
            datalist:[],
            loading:false,
            finished:false,
            current:1,
            total:0
        }
    },
    mounted(){
        // 进来开始发送请求
        http({
        url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=3570964`,
        headers:{
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res=>{
            this.datalist=res.data.data.films;
            this.total=res.data.data.total
        })
    },
    methods:{
        handleChangePage(id){
            this.$router.push(`/detail/${id}`)
        },
        actorFilter(data){
            if(data===undefined) return "暂无主演"
            return data.map((item)=> item.name).join(" ");
        },
        onLoad(){
            if(this.datalist.length===this.total&&this.total!=0){
                this.finished=true;
                return
            }
            this.current++
            http({
        url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3570964`,
        headers:{
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res=>{
            // this.datalist=res.data.data.films;
            this.datalist=[...this.datalist,...res.data.data.films]
            this.loading=false
        })
        }
    }
}
</script>
<!-- 样式 -->
<style lang="scss" scoped>
.van-list{
    .van-cell{
        overflow: hidden;
        padding: .9375rem;
        img{
            width: 4.125rem;
            height: 6.25rem;
            float: left;
        }
        .tltle{
            font-size: 1rem;
        }
        .content{
            font-size: .8125rem;
            color:gray;
            .actor-ellipsis{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

            }
        }
    }
}
.hidden{
    visibility: hidden;
}
</style>
