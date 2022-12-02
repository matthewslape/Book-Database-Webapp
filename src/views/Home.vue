<template>
  <Nav />
  <div class="container">
    <div class="home">
      <img class="pt-4 pb-4" src="../assets/svgs/Shlf.svg" alt="Shlf Logo" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

img {
  scale: 1.5;
  transition: ease-in-out;
  transition-duration: 0.8s;
}

.home:hover > img {
  scale: 2;
  filter: sepia();
}

.home {
  transform: translateY(-5rem);
}
</style>
