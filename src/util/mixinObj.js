const obj={
        created(){
            this.$store.commit("hide")
        },
        onUnmounted() {
            this.$store.commit("show")
        },
        methods:{
            a(){
                console.log('aaaaa');
            }
        }
}

export default obj