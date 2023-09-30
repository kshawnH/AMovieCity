<template>
    <div>
        生命周期
    </div>
</template>
<script>
import {onMounted, reactive} from 'vue'
export default {
        setup() {
        onMounted(() => {
            console.log(3
            );
        })
    }
}
</script>