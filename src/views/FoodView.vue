<script setup>
import Navbar from "../components/Navbar.vue";
import CardFood from "../components/CardFood.vue";
import axios from "axios";
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row mt-3">
      <h2><strong>Food</strong> List</h2>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search your favorite foods"
            aria-label="search"
            aria-describedby="basic-addon1"
            v-model="search"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="basic-addon1">
            <i class="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-4 mt-4" v-for="food in foods" :key="food.id">
        <CardFood :food="food"></CardFood>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [],
      search: "",
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    },
    searchFood() {
      axios({
        method: "get",
        url: "http://localhost:3000/foods?q=" + this.search,
      })
        .then((response) => this.setFoods(response.data))
        .catch((error) => console.log("Error", error));
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/foods",
    })
      .then((response) => this.setFoods(response.data))
      .catch((error) => console.log("Error", error));
  },
};
</script>