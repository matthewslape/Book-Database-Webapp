<template>
  <div class="card m-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, bookTitle, author } in books" :key="id">
          <td>{{ bookTitle }}</td>
          <td>{{ author }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteBook(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadBooks, deleteBook } from "@/firebase";
export default {
  setup() {
    const books = useLoadBooks();
    return { books, deleteBook };
  },
};
</script>
