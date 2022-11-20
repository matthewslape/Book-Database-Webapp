<template>
  <div class="register">
    <!--<h1>Sign In</h1>-->
    <h6 class="fw-bold" v-if="errMsg">{{ errMsg }}</h6>
    <form class="form container-sm">
      <div class="mb-3 text-start">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-3 text-start">
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
        />
      </div>
    </form>
    <p>
      <button type="button" class="btn btn-primary" @click="signIn">
        Sign In
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("sign in successful");
      router.push("/feed");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email is found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
    });
};
</script>

<style scoped>
.form {
  max-width: 20rem;
  align-items: flex-start;
}
</style>
