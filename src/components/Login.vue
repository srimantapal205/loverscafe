<template>
    <div class="container ">
        <div class="col">

        </div>
        <div class="row justify-content-md-center ">
            <div class="col">
                <div class="signIn userinputBox mt-5">
                    <div class="text-center">
                        <img class="logo mx-auto d-block" src="../assets/logo.png" alt="LoversCafe">
                    </div>
                    <h1 class="text-center">Sign In</h1>
                    <input type="email" v-model="email" name="email" id="emailId" placeholder="Enter Email ">
                    <input type="password" v-model="password" name="password" id="pwd" placeholder="Enter Password">
                    <button type="submit" @click="signin">Sign In</button>
                    <p>
                        <router-link to="/signup">Sign Up</router-link>
                    </p>
                </div>
            </div>

        </div>
        <div class="col">

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignIn",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async signin() {
            let getResult = await axios.get(`
            http://localhost:3000/users?email=${this.email}&password=${this.password}
            `)
            //http://localhost:3000/users?email=sri@test.com&password=sri@123
            console.log(getResult)
            if (getResult.status === 200 && getResult.data.length > 0) {
                console.log("Sign up done");
                localStorage.setItem("user-info", JSON.stringify(getResult.data[0]));
                this.$router.push({ name: "home" })
            }
        }
    },
    mounted() {
        console.warn("mount");
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: "home" })
        }
    },

}
</script>

<style lang="scss" scoped>
</style>