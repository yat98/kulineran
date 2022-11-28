<script setup>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded">
          <ol class="breadcrumb p-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-dark text-decoration-none"
                >Home</RouterLink
              >
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/foods" class="text-dark text-decoration-none"
                >Foods</RouterLink
              >
            </li>
            <li
              class="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              Food Order
            </li>
          </ol>
        </nav>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="`/assets/img/foods/${food.image}`"
            class="img-fluid shadow rounded-4"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ food.name }}</strong>
          </h2>
          <hr />
          <h4 class="mb-4">
            Price: <strong>Rp.{{ food.price }}</strong>
          </h4>
          <form action="">
            <div class="mb-3">
              <label for="total_order" class="form-label">Total Order</label>
              <input type="text" class="form-control" id="total_order" />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                id="description"
                rows="4"
                class="form-control"
                placeholder="Description Example: Nasi setengah..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-icon btn-success">
              <i class="bi bi-bag"></i>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: {},
    };
  },
  methods: {
    setFood(data) {
      this.food = data;
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/foods/" + this.$route.params.id,
    })
      .then((response) => this.setFood(response.data))
      .catch((error) => console.log("Error", error));
  },
};
</script>

<style>
</style>