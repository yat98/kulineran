<script setup>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
</script>

<template>
  <Navbar :update-count-cart="carts" />
  <div class="container justify-content-center mt-5 text-center">
    <img src="../assets/img/success.svg" width="250">
    <h2 class="mt-5 mb-1"><strong>Checkout Success</strong></h2>
    <p class="fw-light">Your orders has been processed, please waiting</p>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>