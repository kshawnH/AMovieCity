<template>
  <div>
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
    <!-- <div v-hello>1111</div> -->
  </div>
</template>
<script>
import Vant from 'vant'
import 'vant/lib/index.css'
import tabbar from '@/components/film/Tabbar.vue' 
export default{
  data(){
    return{

    }
  },//局部指令
  mounted(){
    // console.log(this.$refs.mytabbar.$el.offsetHeight);
  },
  directives:{
    hello:{
      mounted() {
        console.log(3);
      },
    }
  },
  components:{
    tabbar
  }
}
</script>
<style lang="scss" scoped>

*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
ul{
  list-style: none;
}
section{
  margin-bottom:3.125rem ;
}
</style>