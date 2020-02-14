<template>
    <div>
        <h1 class="text-center display-4">Add New Store</h1>
        <form class="container" autocomplete="on">
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                <div class="col-md-8">
                    <input id="name" type="text" class="form-control" name="name" :class="{ 'is-valid': !form.errors.has('name') && isSubmitted,'is-invalid': form.errors.has('name') }"
                        v-model="form.name" autofocus placeholder="Brand Name">
                    <has-error :form="form" field="name"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-8">
                    <input id="email" type="email" class="form-control" name="email" :class="{ 'is-valid': !form.errors.has('email') && isSubmitted,'is-invalid': form.errors.has('email') }"
                        v-model="form.email" autofocus placeholder="Business mail. Provide yours if business has none">
                    <has-error :form="form" field="email"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                <div class="col-md-8">
                    <input id="phone" type="tel" class="form-control" name="phone" :class="{ 'is-valid': !form.errors.has('phone') && isSubmitted,'is-invalid': form.errors.has('phone.phone') }"
                        v-model="form.phone.phone" autofocus placeholder="Business phone. Provide yours if business has none">
                    <has-error :form="form" field="phone.phone"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="link" class="col-md-4 col-form-label text-md-right">Link</label>
                <div class="col-md-8">
                    <input id="link" type="url" class="form-control" name="link" :class="{ 'is-valid': !form.errors.has('link') && isSubmitted,'is-invalid': form.errors.has('link') }"
                        v-model="form.email" autofocus placeholder="Optional. Business website if any">
                    <has-error :form="form" field="link"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="description" class="col-md-4 col-form-label text-md-right">Description</label>
                <div class="col-md-8">
                    <textarea id="description" class="form-control" name="description" :class="{ 'is-valid': !form.errors.has('description') && isSubmitted,'is-invalid': form.errors.has('description') }"
                        v-model="form.description" autofocus placeholder="Tell us a little about your business"></textarea>
                    <has-error :form="form" field="description"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="isDisabled || isEmpty" @click.prevent="createStore">
                        <span v-if="!isDisabled">Create</span>
                        <i class="fas fa-spinner fa-spin" v-else></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default{
        name: "StoreForm",
        data: () => ({
            form: new Form({
                name: "",
                email: "",
                phone: {
                    phone: "",
                    phone_country: "NG"
                },
                link: "",
                description: ""
            }),
            submitted:false,
            disabled:false,
        }),
        methods: {
            createStore(){
                this.disabled = true;
                this.submitted = true;
                this.$Progress.start();
                this.form.post(this.getRoutes.stores.base).then(response=>{
                    this.disabled = false;
                    this.$Progress.finish();
                    new toast({ type: 'success', title: 'Store created successfully!' });
                    this.$router.push("/store/" + response.data.data.id);
                }).catch(()=>{
                    this.disabled = false;
					this.$Progress.fail();
					new toast({ type: 'error', title: 'Error creating store!' });
                });
            }
        },
        computed: {
            ...mapGetters(["getRoutes"]),
            isDisabled(){return this.disabled},
            isSubmitted(){return this.submitted},
            isEmpty(){ return !(this.form.name && this.form.email && this.form.phone.phone && this.form.link && this.form.description) }
        }
    }
</script>

<style scoped>
</style>