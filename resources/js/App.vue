<template>
  <div>
    <app-nav-bar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";

export default {
  name: "App",
  components: {
    "app-nav-bar": Header,
    "app-footer": Footer
  }
};
</script>
