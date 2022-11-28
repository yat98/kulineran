<template>
  <div class="card card-food shadow">
    <img
      :src="`assets/img/foods/${food.image}`"
      class="card-img-top img-top"
      height="250"
    />
    <div class="card-body">
      <h5 class="card-title">{{ food.name }}</h5>
      <p class="card-text">Rp.{{ food.price }}</p>
      <RouterLink class="btn btn-success btn-icon" :to="`/foods/${food.id}`">
        <i class="bi bi-bag-plus"></i>
        Order
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: ["food"],
  components: { RouterLink },
};
</script>

<style>
</style>