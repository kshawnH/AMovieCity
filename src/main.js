import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import Vant from 'vant';


createApp(App).use(store).use(router).use(Vant).mount('#app')
// createApp(App).directive("hello",{
//     mounted(el){
//         console.log(3);
//         el.style.backgroundColor ="red";
//     }
// }).mount('#app')




