<template>
  <div id="nav">
    <div>
      <router-link to="/">
        <img class="shlf-logo" src="../assets/svgs/Shlf.svg" alt="Shlf Logo"
      /></router-link>
    </div>
    <div>
      <router-link to="/about"
        ><button class="btn btn-outline-light btn-sm mx-2">
          About
        </button></router-link
      >
      <router-link to="/register"
        ><button class="btn btn-outline-light btn-sm mx-2" v-if="!isLoggedIn">
          Register
        </button></router-link
      >
      <router-link to="/sign-in"
        ><button class="btn btn-outline-light btn-sm mx-2" v-if="!isLoggedIn">
          Sign In
        </button></router-link
      >
      <button
        class="btn btn-outline-light btn-sm mx-2"
        @click="handleSignOut"
        v-if="isLoggedIn"
      >
        Sign Out
      </button>
    </div>
  </div>
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
.shlf-logo {
  width: 50%;
  display: flex;
  align-self: flex-start;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: white;
}
</style>
