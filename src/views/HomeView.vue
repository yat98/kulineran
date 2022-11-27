<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import CardFood from "../components/CardFood.vue";
import axios from "axios";
</script>

<template>
  <Navbar />
  <div class="container">
    <Hero />
    <main>
      <div class="row mt-5">
        <div class="col">
          <h2><strong>Popular</strong> Food</h2>
        </div>
        <div class="col text-end">
          <RouterLink to="/foods" class="btn btn-success text-end btn-icon">
            <i class="bi bi-eye"></i>
            See all
          </RouterLink>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="food in foods" :key="food.id">
          <CardFood :food="food"></CardFood>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [],
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/popular",
    }).then((response) => this.setFoods(response.data))
    .catch((error) => console.log('Error',error))
  },
};
</script>
