<template >
  <div id="signup">
    <div class="container">
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" v-model="email" />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <button @click="signUp">Sign Up</button>
      <p>
        Have an account?
        <router-link to="/login"> <i>Login</i> </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function () {
      //log the user in
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
              user.data
            alert("¡Te has registrado correctamente!");
          },
          (err) => {
              err
            alert("Ingresa correctamente todos los datos");
          }
        );
    },
  },
};
</script>

<style >
</style>