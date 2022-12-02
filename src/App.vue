<template>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import firebase from "firebase/app";
import { useRouter } from "vue-router"; //import router
const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
    console.log(isLoggedIn.value);
  });
});
</script>

<style>
#app {
  background-color: #141414;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
