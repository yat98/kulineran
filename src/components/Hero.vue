<template>
  <div class="row mt-2">
    <div class="col-md-6 order-2 order-md-1 mt-5 mt-md-0">
      <div class="d-flex align-items-center h-100 text-center text-md-start">
        <div class="w-100">
          <h2>
            <strong>Delicious Food Menu,</strong>
            <br />
            in Your Gadget
          </h2>
          <p class="mt-1 mb-4 fw-light">
            Lets choose and order your favorite foods
          </p>
          <RouterLink
            class="btn btn-lg btn-success text-white fw-normal btn-icon"
            to="/foods"
          >
            <i class="bi bi-arrow-right"></i>
            Order
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="col-md-6 text-center text-lg-end order-1 order-md-2">
      <img src="../assets/img/hero.svg" height="350" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
