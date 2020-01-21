<template>
    <div id="sidebar">
        <div id="categories" class="block">
            <h5>CATEGORIES</h5>
            <select class="category form-control">
                <option>Apple Car</option>
            </select>
            <select class="category form-control">
                <option>Air Port & wireless</option>
            </select>
            <select class="category form-control">
                <option>Cable & Docks</option>
            </select>
            <select class="category form-control">
                <option>Cases & Films</option>
            </select>
            <select class="category form-control">
                <option>Charging Devices</option>
            </select>
            <select class="category form-control">
                <option>Connected Home</option>
            </select>
            <select class="category form-control">
                <option>Headphones</option>
            </select>
        </div>
        <div class="block" id="prices">
            <h5>PRICES</h5>
            <p class="d-flex justify-content-between">
                <span>Ranger:</span>
                <span>$13.99 - $25.99</span>
            </p>
            <div class="row">
                <div class="col-6">
                    <input type="number" class="form-control" placeholder="Low">
                </div>
                <div class="col-6">
                    <input type="number" class="form-control" placeholder="High">
                </div>
            </div>
        </div>
        <div id="brands" class="block">
            <h5>BRANDS</h5>
            <router-link to="" class="brand">Apple</router-link>
            <router-link to="" class="brand">LG</router-link>
            <router-link to="" class="brand">Samsung</router-link>
            <router-link to="" class="brand">Cases & Films</router-link>
            <router-link to="" class="brand">Siemens</router-link>
        </div>
    </div>
</template>

<style scoped>
    .block{
        background: #F6F7F8;
        color: #000000;
        padding: 1rem;
        margin: 0 0 2rem;
    }
    .block h5{
        font-size: 1.29rem;
        font-weight: bold;
        margin: 0 0 0.5rem;
    }
    .block .category{
        display: block !important;
        color: #000000;
        margin: 0.5rem 0;
        border: none;
        background: #00000000;
    }
    .block .brand{
        display: block;
        color: #000000;
        margin: 0.5rem 0;
    }
    .block p{
        font-weight: bold;
    }
</style>