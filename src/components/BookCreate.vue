<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.bookTitle" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Author</label>
        <input
          v-model="form.author"
          class="form-control"
          type="string"
          required
        />
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
      form.email = "";
    };
    return { form, onSubmit };
  },
};
</script>
