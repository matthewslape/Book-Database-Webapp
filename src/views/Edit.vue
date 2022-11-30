<template>
  <div class="card card-body mt-4">
    <h3>Edit Book</h3>
    <form @submit.prevent="update">
      <div class="row px-3">
        <div class="form-group d-flex flex-column align-items-start col">
          <label>Title</label>
          <input v-model="form.bookTitle" class="form-control" required />
        </div>

        <div class="form-group d-flex flex-column align-items-start col">
          <label>Author</label>
          <input v-model="form.author" class="form-control" required />
        </div>
      </div>
      <button class="btn btn-danger btn mt-3 mx-1" @click="del">Delete</button>
      <button type="submit" class="btn btn-primary mt-3 mx-1">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBook, updateBook, deleteBook } from "@/firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const bookId = computed(() => route.params.id);
    const form = reactive({ bookTitle: "", author: "" });
    onMounted(async () => {
      const book = await getBook(bookId.value);
      form.bookTitle = book.bookTitle;
      form.author = book.author;
    });
    const update = async () => {
      await updateBook(bookId.value, { ...form });
      router.push("/feed");
      form.bookTitle = "";
      form.author = "";
    };

    const del = () => {
      deleteBook(bookId.value);
      router.push("/feed");
    };

    return { form, update, del };
  },
};
</script>

<style scoped>
.card {
  margin: 2rem;
  background: #0746c3;
}
</style>
