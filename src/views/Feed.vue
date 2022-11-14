<template>
  <div class="register">
    <h1>Feed</h1>
    <BookCreate />
    <BookList />
  </div>
</template>

<script>
// @ is an alias to /src
import BookCreate from "@/components/BookCreate.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "Home",
  components: {
    BookCreate,
    BookList,
  },
};
</script>
