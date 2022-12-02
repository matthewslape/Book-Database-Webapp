<template>
  <div class="container">
    <div class="register">
      <img class="pt-4 pb-4" src="../assets/svgs/Shlf.svg" alt="Shlf Logo" />
      <form class="form container-sm">
        <div class="mb-4 text-start">
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-4 text-start">
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </form>
      <p><button class="btn btn-primary" @click="register">Register</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("registration successful");
      router.push("/feed");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

const signInWithGoogle = () => {};
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
