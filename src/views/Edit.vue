<template>
  <div class="card card-body mt-4">
    <h3>Edit Books</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.bookTitle" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Author</label>
        <input v-model="form.author" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBook, updateBook } from "@/firebase";
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
    return { form, update };
  },
};
</script>
