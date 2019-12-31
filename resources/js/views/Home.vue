<template>
  <div id="home">
    <Carousel />
    <ProductList />
  </div>
</template>

<script>
import Carousel from "./../components/HomeCarousel";
import ProductList from "./../components/products/ProductList";
export default {
  name: "Home",
  components: {
    Carousel,
    ProductList
  }
};
</script>
