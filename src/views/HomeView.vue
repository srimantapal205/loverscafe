<template>
  <Header />
  <h1 class="text-center"> Welcome to Restaurant List Page</h1>
  <div class="container mt-4">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(restaurantList, index) in restaurantLists" :key="index">
        <div class="card">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image
              cap</text>
          </svg>
          <div class="card-header bg-transparent border-success text-start">{{restaurantList.restaurantName}}</div>
          <div class="card-body text-success text-start">
            <h6 class="card-title">Contact: {{restaurantList.restConcat}}</h6>
            <h6 class="card-title">Email: {{restaurantList.restaEmail}}</h6>
            <p class="card-text">Address : {{restaurantList.address}}.</p>
            <p class="card-text">City : {{restaurantList.city}}.</p>
            <p class="card-text">Zip/Pin Code : {{restaurantList.zipCode}}.</p>
          </div>
          <div class="card-footer bg-transparent border-success text-start">
            <div class="row">
              <div class="col">
                <router-link class="btn btn-outline-primary btn-sm" :to="'/update_restaurant/'+restaurantList.id">Update</router-link>
              </div>
              <div class="col text-end">
                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeRestau(restaurantList.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    Header
  },
  data() {
    return {
      restaurantLists:[]
    }
  },
methods: {
  async loadDate(){

    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurantLists = result.data;
},
  async removeRestau(id){
      console.warn(id);
      let result = await axios.delete("http://localhost:3000/restaurants/"+id);
      console.warn(result);
      if (result.status === 200) {
        this.loadDate()
      }
  }

},
   mounted() {
    let user = localStorage.getItem('user-info');  
    if (!user) {
      this.$router.push({ name: "SignIn" }) 
    }
    this.loadDate()
   
  },
}
</script>
