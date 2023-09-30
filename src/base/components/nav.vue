<template>
    <div>
        <button @click="handleShow()">left</button>
        {{ myname }}
        <button>left</button>

    </div>
</template>

<script>
export default {
    props:["myname"],
    
    setup(props,{emit}){
        const isshow = inject("show");
        console.log(props.myname);
        const handleShow=()=>{
            emit("event")
        }
        return{
            handleShow
        }
    }
}
</script>