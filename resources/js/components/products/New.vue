<template>
    <div>
        <h1 class="text-center display-4">Add New Product</h1>
        <form class="container" autocomplete="on">
            <div class="form-group row">
                <label for="title" class="col-md-4 col-form-label text-md-right">Title</label>
                <div class="col-md-8">
                    <input id="title" type="text" class="form-control" name="title" :class="{ 'is-valid': !form.errors.has('name') && isSubmitted,'is-invalid': form.errors.has('name') }"
                        v-model="form.name" autofocus placeholder="Product Title">
                    <has-error :form="form" field="name"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-md-4 col-form-label text-md-right">Price</label>
                <div class="col-md-8">
                    <input id="price" type="number" class="form-control" name="price" min="0" :class="{ 'is-valid': !form.errors.has('price') && isSubmitted,'is-invalid': form.errors.has('price') }"
                        v-model="form.price" autofocus placeholder="Price of Product in Naira">
                    <has-error :form="form" field="price"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="description" class="col-md-4 col-form-label text-md-right">Description</label>
                <div class="col-md-8">
                    <textarea id="description" class="form-control" name="description" :class="{ 'is-valid': !form.errors.has('description') && isSubmitted,'is-invalid': form.errors.has('description') }"
                        v-model="form.description" autofocus placeholder="Tell us a little about what you are selling"></textarea>
                    <has-error :form="form" field="description"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="description" class="col-md-4 col-form-label text-md-right">Category</label>
                <div class="col-md-8">
                    <select id="category" class="form-control" name="category" :class="{ 'is-valid': !form.errors.has('category_id') && isSubmitted,'is-invalid': form.errors.has('category_id') }"
                        v-model="form.category_id">
                        <option disabled :value="null">Select category</option>
                        <optgroup v-for="parent in categories" :key="parent.id" :label="parent.name">
                            <option v-for="category in parent.subs" :key="category.id" :value="category.id">{{ category.name }}</option>
                        </optgroup>
                    </select>
                    <has-error :form="form" field="category_id"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="discount" class="col-md-4 col-form-label text-md-right">Discount</label>
                <div class="col-md-8 input-group">
                    <input id="discount" type="number" class="form-control" name="discount" max="100" min="0" :class="{ 'is-valid': !form.errors.has('discount') && isSubmitted,'is-invalid': form.errors.has('discount') }"
                        v-model="form.discount" autofocus placeholder="Any ongoing discounts?">
                    <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                    <has-error :form="form" field="discount"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <label for="discount" class="col-md-4 col-form-label text-md-right">Quantity</label>
                <div class="col-md-8">
                    <input id="quantity" type="number" class="form-control" name="quantity" min="0" :class="{ 'is-valid': !form.errors.has('quantity') && isSubmitted,'is-invalid': form.errors.has('quantity') }"
                        v-model="form.quantity" autofocus placeholder="Quantity available">
                    <has-error :form="form" field="quantity"></has-error>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="isDisabled || isEmpty" @click.prevent="addPost">
                        <span v-if="!isDisabled">Add</span>
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
        name: "ProductForm",
        data: () => ({
            form: new Form({
                name: "",
                price: null,
                description: "",
                discount: 0,
                quantity: 1,
                category_id: null
            }),
            categories: [],
            submitted:false,
            disabled:false,
        }),
        methods: {
            addPost(){
                this.disabled = true;
                this.submitted = true;
                this.$Progress.start();
                this.form.post(this.getRoutes.posts.base).then(response=>{
                    this.disabled = false;
                    this.$Progress.finish();
                    new toast({
						type: 'success',
						title: 'Product created successfully!',
                    });
                    this.$router.push("/products/" + response.data.data.id);
                }).catch(()=>{
                    this.disabled = false;
					this.$Progress.fail();
					new toast({
						type: 'error',
						title: 'Error creating product!',
					});
                });
            },
            fetchCategories(){
                axios.get(this.getRoutes.categories.parents).then(response=>{
                    this.categories = response.data;
                }).catch(()=>{
                    new toast({
						type: 'error',
						title: 'Error fetching categories',
					});
                })
            }
        },
        computed: {
            ...mapGetters(["getRoutes"]),
            isDisabled(){return this.disabled},
            isSubmitted(){return this.submitted},
            isEmpty(){ return !(this.form.name && this.form.price && this.form.discount && this.form.quantity) }
        },
        mounted(){
            this.fetchCategories();
        }
    }
</script>

<style scoped>
</style>