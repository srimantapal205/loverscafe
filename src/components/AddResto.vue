<template>
   <Header />
  <div  id="addresto">
    <h1 class="text-center">Welcome to Add Restaurant Page </h1>
 <div class="container">

  <form class="row g-3">
    <div class="col-md-4">
    <label for="inputRestaurantName" class="form-label">Restaurant Name</label>
    <input type="email" class="form-control" id="inputRestaurantName">
  </div>
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-4">
    <label for="inputContactNo" class="form-label">Contact</label>
    <input type="text" class="form-control" id="inputContactNo">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>

  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add New Restaurant</button>
  </div>
</form>

 </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';

// @ is an alias to /src

export default {
  name: 'AddRestaurant',
  components: {
    Header
  },
  mounted () {

  },
}
</script>