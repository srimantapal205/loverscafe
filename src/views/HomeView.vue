<template>
  <Header />
  <h1 class="text-center">Hello {{ name }} ! Welcome to Home Page</h1>
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
          <div class="card-header bg-transparent border-success text-start">{{restaurantList.name}}</div>
          <div class="card-body text-success text-start">
            <h5 class="card-title">Contact: {{restaurantList.contact}}</h5>
            <p class="card-text">Address : {{restaurantList.address}}.</p>
          </div>
          <div class="card-footer bg-transparent border-success text-start">Footer</div>
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
      name: "",
      restaurantLists:[]
    }
  },

  async mounted() {
    console.warn("mount");
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name
    if (!user) {
      this.$router.push({ name: "signup" })
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurantLists = result.data;
  },
}
</script>
