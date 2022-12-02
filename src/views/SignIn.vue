<template>
  <div class="container">
    <div class="register">
      <img class="pt-4 pb-4" src="../assets/svgs/Shlf.svg" alt="Shlf Logo" />
      <form class="form container-sm">
        <h6 class="alert alert-warning fw-bold fst-italic" v-if="errMsg">
          {{ errMsg }}
        </h6>
        <div class="mb-4 text-start">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-4 text-start">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase";
import "firebase/auth";
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
      router.push("/feed");
      console.log("sign in successful");
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
  width: 80vw;
  min-width: 15rem;
  max-width: 20rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
