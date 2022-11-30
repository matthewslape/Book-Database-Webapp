<template>
  <div class="card card-body">
    <form @submit.prevent="onSubmit">
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
      <button type="submit" class="btn btn-success mt-3">Create Book</button>
    </form>
  </div>
</template>

<script>
import { createBook } from "@/firebase";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({ bookTitle: "", author: "" });
    const onSubmit = async () => {
      await createBook({ ...form });
      form.bookTitle = "";
      form.author = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style scoped>
.card {
  margin: 2rem;
  background: #0746c3;
}
</style>
