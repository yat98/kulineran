<template>
  <div class="card card-food shadow">
    <img :src="`assets/img/foods/${food.image}`" class="card-img-top img-top" height="250" />
    <div class="card-body">
      <h5 class="card-title">{{ food.name }}</h5>
      <p class="card-text">Rp.{{ food.price }}</p>
      <a href="#" class="btn btn-success btn-icon">
        <i class="bi bi-bag-plus"></i>
        Order
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["food"],
};
</script>

<style>
</style>