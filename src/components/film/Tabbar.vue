<template>
  <footer>
  <ul v-show="$store.state.isTabbarShow">
      <router-link  to="/films" custom v-slot="{navigate ,isActive}">
        <li @click="navigate" :class="isActive ? 'isred' :''">
        <i class="iconfont icon-wodekanjia"></i>电影
          
        </li>
      </router-link>
      <router-link  to="/cinemas" custom v-slot="{navigate ,isActive}">
        <li @click="navigate" :class="isActive ? 'isred' :''">
        <i class="iconfont  icon-weixiu"></i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link  to="/centers" custom v-slot="{navigate ,isActive}">
        <li @click="navigate" :class="isActive ? 'isred' :''">
        <i class="iconfont  "></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 3.0625rem;
    background-color: white;
    ul{
      display:flex;
      li{
        flex:1;
        line-height: 3.0625rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        i{
          font-size: 1.25rem;
        }
        span{
          font-size: 1rem;
        }
      }
    }
    .isred{
  color: red;
}
    // ul{
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
    //   height: 100%;
    //   li{
    //     align-items: center;
        
    //   }
    // }
  }
</style>