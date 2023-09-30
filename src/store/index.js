import { createStore } from 'vuex'
import http from '@/util/http'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState({
    reducer:(state)=>{
      return {
        cityId:state.cityId,
        cityName:state.cityName,
      }
    }
  })],
  state: {
    isTabbarShow:true,
    cityId:'451000',
    cityName:'百色',
    cinemaList:[],
  },
  getters: {
  },
  mutations: {
    hide(state){
      state.isTabbarShow = false
    },
    show(state){
      state.isTabbarShow = true
    },
    changeCityName(state,cityName){
      state.cityName=cityName;
    },
    changeCityId(state,cityId){
      state.cityId=cityId;
    },
    changeCinemaData(state,data){
      state.cinemaList=data;
    },
    clearCinema(state){
      state.cinemaList=[];
    }
  },
  actions: {
    // getCinemaData(store,cityId){
    //   return http({
    //     url:`/gateway?cityId=${cityId}&ticketFlag=1&k=3267116`,
    //     headers:{
    //         'X-Host': 'mall.film-ticket.cinema.list',

    //     }
    // }).then((res)=>{
    //     this.cinemaList = res.data.data.cinemas
        
    //     store.commit('changeCinemaData',res.data.data.cinemas)
    //     console.log(res);
    // })
    // },
    async getCinemaData(store,cityId){
      const res = await http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=7009628`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list',
        }
      })
      store.commit('changeCinemaData', res.data.data.cinemas)
    }
  },
  modules: {
  }
})
