<template>
    <div>
        潼鑫
        <navbar myname="home" @event="change"></navbar>
        <sidebar v-show="obj.isshow"></sidebar>
    </div>
</template>

<script>
import { reactive } from 'vue'
import navbar from './components/nav.vue'
import sidebar  from './components/sidebar.vue'
export default{
    components:{
        navbar,
        sidebar
    },
    setup(){
        const obj=reactive({
            isshow: true
        })

        const change=()=>{
            obj.isshow=!obj.isshow
        }
        return{
            obj,
            change
        }
    }
}
</script>