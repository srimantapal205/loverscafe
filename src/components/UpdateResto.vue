<template>
  <Header />
 <div  id="addresto">
   <h1 class="text-center">Welcome to Update Restaurant Page </h1>
<div class="container">

 <form class="row g-3">
   <div class="col-md-4">
   <label for="inputRestaurantName" class="form-label">Restaurant Name</label>
   <input type="text" v-model="restaurant.restaurantName" class="form-control" id="inputRestaurantName">
 </div>
 <div class="col-md-4">
   <label for="inputEmail4" class="form-label">Email</label>
   <input type="email" v-model="restaurant.restaEmail" class="form-control" id="inputEmail4">
 </div>
 <div class="col-md-4">
   <label for="inputContactNo" class="form-label">Contact</label>
   <input type="text" v-model="restaurant.restConcat" class="form-control" id="inputContactNo">
 </div>
 <div class="col-12">
   <label for="inputAddress" class="form-label">Address</label>
   <input type="text" v-model="restaurant.address" class="form-control" id="inputAddress" placeholder="1234 Main St">
 </div>
 <div class="col-md-6">
   <label for="inputCity" class="form-label">City</label>
   <input type="text" v-model="restaurant.city" class="form-control" id="inputCity">
 </div>

 <div class="col-md-2">
   <label for="inputZip" class="form-label">Zip</label>
   <input type="text" v-model="restaurant.zipCode" class="form-control" id="inputZip">
 </div>

 <div class="col-12">
   <button type="button" class="btn btn-primary" @click="UpdateRestodetail">UpdateRestaurant</button>
 </div>
</form>

</div>
 </div>
</template>
<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
// @ is an alias to /src

export default {
 name: 'AddRestaurant',
 components: {
   Header
 },
 data() {
   return {
     restaurant:{
     restaurantName:"",
     restaEmail:"",
     restConcat:"",
     address:"",
     city:"",
     zipCode:""
     }
   }
 },
 methods: {
  async UpdateRestodetail() {
     const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
       restaurantName:this.restaurant.restaurantName,
     restaEmail:this.restaurant.restaEmail,
     restConcat:this.restaurant.restConcat,
     address:this.restaurant.address,
     city:this.restaurant.city,
     zipCode:this.restaurant.zipCode
     });
     if(result.status == 200 ){
       this.$router.push({ name: "home" })
     }
   }
 },
 async mounted () {

       let user = localStorage.getItem('user-info')
       if (!user) {
           this.$router.push({ name: "signup" })
       }
       console.warn(this.$route.params.id);
       const  result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
       console.warn(result);
       this.restaurant = result.data;
 },
}
</script>