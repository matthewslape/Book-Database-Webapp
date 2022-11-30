<template>
  <div class="cardContainer">
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`/edit/${id}`"
      class="card"
      v-for="{ id, bookTitle, author } in books"
      :key="id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img class="card-img" src="../assets/logo.png" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title title">
              {{ bookTitle }}
            </h5>
            <h6 class="card-title">{{ author }}</h6>
            <p class="card-text">
              <small class="text-muted">FINISHED ON...</small>
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useLoadBooks } from "@/firebase";
export default {
  setup() {
    const books = useLoadBooks();
    return { books };
  },
};
</script>

<style scoped>
.cardContainer {
  margin: 1rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  padding: 1rem;
}
.card {
  background: white;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
}

.card-img {
  background: #acccf8;
  border-radius: 0;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
}

.title {
  text-align: left;
  font-weight: bold;
}

h5,
h6 {
  color: black;
}
</style>
