<template>
    <div>
        <h1 class="text-center display-4">Login</h1>
        <form class="container" autocomplete="on">
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-8">
                    <input id="email" type="email" class="form-control" name="email" :class="{ 'is-valid': !form.errors.has('email') && isSubmitted,'is-invalid': form.errors.has('email') }"
                        v-model="form.email" autofocus placeholder="Your registered email address">
                    <has-error :form="form" field="email"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-8">
                    <input id="password" type="password" class="form-control" name="password" :class="{ 'is-valid': !form.errors.has('password') && isSubmitted,'is-invalid': form.errors.has('password') }"
                        v-model="form.password" autofocus placeholder="Your associated password">
                    <has-error :form="form" field="password"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="rememberMe">
                        <label class="form-check-label" for="remember">Remember Me?</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="isDisabled || isEmpty" @click.prevent="loginUser">
                        <span v-if="!isDisabled">Login</span>
                        <i class="fas fa-spinner fa-spin" v-else></i>
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <p>Dont have an account?<router-link to="/register">Proceed to Register</router-link></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default{
        name: "LoginForm",
        data: () => ({
            form: new Form({ email: "", password: "" }),
            rememberMe: true,
            submitted:false,
            disabled:false,
        }),
        methods: {
            ...mapActions(["setAuth","clearIntended"]),
            loginUser(){
                this.disabled = true;
                this.submitted = true;
                this.$Progress.start(10000);
                this.form.post(this.getRoutes.auth.login).then(response=>{
                    this.setAuth({ data: response.data.data, remember: this.rememberMe });
                    this.disabled = false;
                    this.$Progress.finish();
                    this.$router.push(this.getIntended);
                    new toast({ type: 'success', title: 'Logged In successfully' });
                    this.clearIntended();
                }).catch(()=>{
                    this.disabled = false;
					this.$Progress.fail();
					new toast({ type: 'error', title: 'Error logging in user' });
                });
            },
        },
        computed: {
            ...mapGetters(["getRoutes","getIntended"]),
            isDisabled(){return this.disabled},
            isSubmitted(){return this.submitted},
            isEmpty(){ return !(this.form.email && this.form.password) }
        }
    }

</script>

<style scoped>

</style>