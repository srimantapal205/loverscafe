<template>
    <img class="logo" src="../assets/logo.png" alt="LoversCafe">
    <h1>Sign Up</h1>
    <div class="register">
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
}
</script>

<style>
.logo {
    width: 120px;
}

.register {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    padding: 15px;
    min-height: 400px;
}

.register input {
    width: 100%;
    display: block;
    min-height: 30px;
    margin-bottom: 30px;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    border: 1px solid rgb(30, 7, 161);
}

.register button {
    min-width: 100px;
    min-height: 32px;
    text-align: center;
    border: 1px solid rgb(30, 7, 161);
    font-weight: 600;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    display: block;
    margin: 0 auto;
    background-color: #fff;
    cursor: pointer;
}

.register button:hover {
    background-color: rgb(30, 7, 161);
    color: #fff;

}
</style>