<template>
    <div>
        <p>{{ post }}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "SingleProduct",
        data(){
            return {
                id: null,
                post: {},
            }
        },
        methods: {
            fetchPost(){
                axios.get(this.getRoutes.posts.base + this.id).then(response => {
                    this.post = response.data.data
                }).catch(()=>{
                    new toast({
                        type: "error",
                        title: "Error fetching post!"
                    });
                })
            }
        },
        computed: {
            ...mapGetters(['getRoutes']),
        },
        mounted(){
            this.id = this.$route.params.id;
            this.fetchPost();
        }
    }
</script>

<style scoped>
</style>