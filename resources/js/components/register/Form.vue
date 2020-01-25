<template>
    <div>
        <h1 class="text-center display-4">Register</h1>
        <form class="container" autocomplete="on">
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                <div class="col-md-8">
                    <input id="name" type="text" class="form-control" name="name" :class="{ 'is-valid': !form.errors.has('name') && isSubmitted,'is-invalid': form.errors.has('name') }"
                        v-model="form.name" autofocus placeholder="Full Name">
                    <has-error :form="form" field="name"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-8">
                    <input id="email" type="email" class="form-control" name="email" :class="{ 'is-valid': !form.errors.has('email') && isSubmitted,'is-invalid': form.errors.has('email') }"
                        v-model="form.email" autofocus placeholder="Valid Email Address">
                    <has-error :form="form" field="email"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                <div class="col-md-8">
                    <input id="phone" type="tel" class="form-control" name="phone" :class="{ 'is-valid': !form.errors.has('phone') && isSubmitted,'is-invalid': form.errors.has('phone.phone') }"
                        v-model="form.phone.phone" autofocus placeholder="Valid Phone Number In Nigeria">
                    <has-error :form="form" field="phone.phone"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-8">
                    <input id="password" type="password" class="form-control" name="password" :class="{ 'is-valid': !form.errors.has('password') && isSubmitted,'is-invalid': form.errors.has('password') }"
                        v-model="form.password" autofocus placeholder="Minimum of 8 characters">
                    <has-error :form="form" field="password"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                <div class="col-md-8">
                    <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" :class="{ 'is-valid': !form.errors.has('password_confirmation') && isSubmitted,'is-invalid': form.errors.has('password_confirmation') }"
                        v-model="form.password_confirmation" autofocus placeholder="Must match password field">
                    <has-error :form="form" field="password__confirmation"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="isDisabled || isEmpty" @click.prevent="regUser">
                        <span v-if="!isDisabled">Submit</span>
                        <i class="fas fa-spinner fa-spin" v-else></i>
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <p>Have an account already?<router-link to="/login">Proceed to Login</router-link></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default{
        name: "RegisterForm",
        data: () => ({
            form: new Form({
                name: "",
                email: "",
                phone: {
                    phone: "",
                    phone_country: "NG"
                },
                password: "",
                password_confirmation: ""
            }),
            submitted:false,
            disabled:false,
        }),
        methods: {
            ...mapActions(["setAuth","setToken","clearIntended"]),
            regUser(){
                this.disabled = true;
                this.submitted = true;
                this.$Progress.start();
                this.form.post(this.getRoutes.auth.register).then(response=>{
                    this.setToken({ token: response.data.data, remember: true });
                    axios.get(this.getRoutes.auth.profile).then(response=>{
                        this.setAuth({ user: response.data.data, remember: true });
                        this.disabled = false;
						this.$Progress.finish();
						new toast({
							type: 'success',
							title: 'Profile created successfully',
                        });
                        this.$router.push(this.getIntended);
                        this.clearIntended();
					}).catch(()=>{
                        this.disabled = false;
						this.$Progress.fail();
						new toast({
							type: 'error',
							title: 'Error setting profile',
						});
					});
                }).catch(()=>{
                    this.disabled = false;
					this.$Progress.fail();
					new toast({
						type: 'error',
						title: 'Error creating user',
					});
                });
            },
        },
        computed: {
            ...mapGetters(["getRoutes","getIntended"]),
            isDisabled(){return this.disabled},
            isSubmitted(){return this.submitted},
            isEmpty(){ return !(this.form.name && this.form.email && this.form.phone.phone && this.form.password && this.form.password_confirmation) }
        }
    }

</script>

<style scoped>

</style>