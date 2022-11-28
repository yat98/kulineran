<script setup>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
</script>

<template>
  <Navbar :update-count-cart="carts" />
  <div class="container">
    <div class="row mt-4">
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
              Cart
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <h2>My <strong>Cart</strong></h2>
        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
              <tr>
                <th class="fw-bold">#</th>
                <th class="fw-bold">Image</th>
                <th class="fw-bold">Food</th>
                <th class="fw-bold">Description</th>
                <th class="fw-bold">Amount</th>
                <th class="fw-bold">Price</th>
                <th class="fw-bold">Total Price</th>
                <th class="fw-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <td>{{ index + 1 }}</td>
                <td>
                  <img
                    :src="`assets/img/foods/${cart.food.image}`"
                    class="rounded-4 shadow"
                    width="180"
                  />
                </td>
                <td>
                  <strong>{{ cart.food.name }}</strong>
                </td>
                <td>{{ cart.description ? cart.description : "-" }}</td>
                <td>{{ cart.totalOrder }}</td>
                <td align="right">Rp.{{ cart.food.price }}</td>
                <td align="right">
                  <strong>Rp.{{ cart.food.price * cart.totalOrder }}</strong>
                </td>
                <td align="right">
                  <i
                    class="bi bi-trash text-danger"
                    @click="removeCart(index)"
                  ></i>
                </td>
              </tr>
              <tr>
                <td colspan="6" align="right">
                  <strong>Total Price</strong>
                </td>
                <td align="right">
                  <strong>Rp.{{ totalPrice }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    fetchCarts() {
      axios({
        method: "get",
        url: "http://localhost:3000/carts",
      })
        .then((response) => this.setCarts(response.data))
        .catch((error) => console.log("Error", error));
    },
    setCarts(data) {
      this.carts = data;
    },
    async removeCart(index) {
      const $toast = useToast();
      await axios({
        method: "delete",
        url: "http://localhost:3000/carts/" + this.carts[index].id,
      })
        .then((response) => {
          $toast.error("Success remove from cart!", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          this.fetchCarts();
        })
        .catch((error) => console.log("Error", error));
      await this.$router.push({ path: "/cart" });
    },
  },
  mounted() {
    this.fetchCarts();
  },
  computed: {
    totalPrice() {
      return this.carts.reduce((total, cart) => {
        return total + cart.food.price * cart.totalOrder;
      }, 0);
    },
  },
};
</script>

<style>
</style>