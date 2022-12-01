<template>
  <div class="register">
    <img class="pt-4 pb-4" src="../assets/svgs/Shlf.svg" alt="Shlf Logo" />
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
