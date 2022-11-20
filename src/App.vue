<template>
  <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/about">About</router-link> -
    <router-link to="/register">Register</router-link> -
    <router-link to="/sign-in">Sign In</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import firebase from "firebase/app";
import { useRouter } from "vue-router"; //import router
const router = useRouter();
const isLoggedIn = ref(false);

/*let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
    } else {
      isLoggedIn.value = false;
    }
});*/
onMounted(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("sign out successfull");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      console.log("error in sign out");
    });
};
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
