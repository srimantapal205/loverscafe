<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col"><a class="navbar-brand" href="#"><img class="navLogo" src="../assets/logo.png"
              alt="LoversCafe"></a></div>
        <div class="col">


          <nav class="nav-bar">
            <ul>
              <li><router-link to="/">Home</router-link> </li>
              <li><router-link to="/add_restaurant"> Add Restaurant</router-link></li>

            </ul>
          </nav>

        </div>
        <div class="col text-end">
          <nav class="nav-bar">
            <ul>
              <li class="text-center"> <button type="button" class="btn  btn-sm btn-light" @click="logOut">Sign
                  Off</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {

    }
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "SignIn" })
    }
  },
}
</script>

<style lang="scss">
.navLogo {
  width: 50px;
}
</style>