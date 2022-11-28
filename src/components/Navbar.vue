<script setup>
import axios from "axios";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Kulineran</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/foods" class="nav-link">Foods</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/cart" class="nav-link">
              Cart
              <i class="bi bi-bag"></i>
              <span class="badge bg-success ms-2">{{ countCart }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      countCart: 0,
    };
  },
  methods: {
    setCountCart(data){
      console.log(data)
      this.countCart = data.length
    }
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/carts",
    })
      .then((response) => this.setCountCart(response.data))
      .catch((error) => console.log("Error", error));
  },
};
</script>

<style>
</style>