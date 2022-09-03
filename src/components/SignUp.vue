<template>
    <img class="logo" src="../assets/logo.png" alt="LoversCafe">
    <h1>Sign Up</h1>
    <div class="register userinputBox">
        <input type="text" v-model="name" name="name" id="uName" placeholder="Enter Name">
        <input type="email" v-model="email" name="email" id="emailId" placeholder="Enter Email ">
        <input type="password" v-model="password" name="password" id="pwd" placeholder="Enter Password">
        <button type="submit" @click="signUp">Sign Up</button>
    </div>
</template>  
<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            })
            console.warn(result);
            if (result.status === 201) {
                console.log("Sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name:"home"})
            }
            this.name = "";
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
