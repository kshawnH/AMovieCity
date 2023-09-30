<template>
    <div>
        hello3- ref-新写法
        <!-- <input type="text" ref="mytextref"> -->
        {{ myname}}
        <button @click="handClick()">change</button>
    </div>
</template>
<script>
import { reactive, ref ,toRefs } from 'vue';
export default{
    //vue3老写法 或者 vue写法 中 beforeCreate，created生命周期===setup
    setup(){
        //定义状态

        const obj =reactive({
            myname:"kerwin",
        })
        const handClick=()=>{
            obj.myname='xiaoming'
        }
        // const myname =ref("kerwin") //  用value 属性 来拦截
        // console.log(myname);
        // const mytextref=ref() //创建ref对象
        return{
            // obj,
            ...toRefs(obj),
            handClick,
            // myname,
        }
    }
}
</script>