<template>
    <img class="logo" src="../assets/logo.png" alt="LoversCafe">
    <h1>Sign In</h1>
    <div class="signIn userinputBox">
        <input type="email" v-model="email" name="email" id="emailId" placeholder="Enter Email ">
        <input type="password" v-model="password" name="password" id="pwd" placeholder="Enter Password">
        <button type="submit" @click="signin">Sign In</button>
        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from "axios"; 
export default {
    name: "SignIn",
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods: {
       async signin(){
            let getResult = await axios.get(`
            http://localhost:3000/users?email=${this.email}&password=${this.password}
            `)
            //http://localhost:3000/users?email=sri@test.com&password=sri@123
            console.log(getResult)
            if (getResult.status === 200 && getResult.data.length>0) {
                console.log("Sign up done");
                localStorage.setItem("user-info", JSON.stringify(getResult.data[0]));
                this.$router.push({name:"home"})
            }
            this.email = "";
            this.password = "";
        }
    },
    mounted () {
        console.warn("mount");
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({name:"home"})
        }
    },

}
</script>

<style lang="scss" scoped>
</style>