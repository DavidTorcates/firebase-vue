<template >
  <div id="login">
    <div class="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" v-model="email" />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <button @click="login">Login</button>
      <p>
        Need an account?
        <router-link to="/signup"> <i>Sign Up</i> </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      //log the user in
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
              user.data
                this.$router.replace('home');
          },
          (err) => {
              err;
            alert("Necesitas una cuenta");
          }
        );
    },
  },
};
</script>

<style >
body{
   
    background: linear-gradient(#264653 ,#1d607bb3  );
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.container{
   background: rgba(193, 189, 189, 0.421);
   width: 50%;
   border-radius: 20px;
   margin: 3% 25%;
}
h1,p{
    color: white;
    margin-bottom: 15px;
}
input{
    border-radius: 15px;
    padding-left: 5px;
    border: none;
    margin-bottom: 20px;
}
button{
    width: 100px;
    border-radius: 10px;
    border: none;
    box-shadow:5px 0px 1px 2px #264653;
    padding: 5px;
    color:  #264653;
    font-weight: bold;
}
button:active{
    box-shadow:2px 0px 1px 2px #41677ac2;
    
    transition: 0.2s;
}
i{
    color: #264653;
    font-style: normal;
}

</style>