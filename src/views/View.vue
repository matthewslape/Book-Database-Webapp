<template>
  <div class="card card-body mt-4">
    <h3>View Book</h3>
    <div class="px-3">
      <div class="d-flex flex-column align-items-start">
        <h1>{{ form.bookTitle }}</h1>
      </div>
      <div class="d-flex flex-column align-items-start">
        <h3>{{ form.author }}</h3>
      </div>
      <router-link :to="`/feed`"
        ><button class="btn btn-secondary mt-3 mx-1">Back</button></router-link
      >
      <router-link :to="`/edit/${bookId}`"
        ><button class="btn btn-primary mt-3 mx-1">Edit</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getBook } from "@/firebase";
export default {
  setup() {
    const route = useRoute();
    const bookId = computed(() => route.params.id);
    const form = reactive({ bookTitle: "", author: "" });
    onMounted(async () => {
      const book = await getBook(bookId.value);
      form.bookTitle = book.bookTitle;
      form.author = book.author;
    });
    return { form, bookId };
  },
};
</script>

<style scoped>
.card {
  margin: 2rem;
  background: #0746c3;
  width: 80vw;
  max-width: 80rem;
  margin: auto;
}
</style>
