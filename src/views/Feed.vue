<template>
  <Nav />
  <div>
    <BookCreate />
    <BookList />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import BookCreate from "@/components/BookCreate.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "Feed",
  components: {
    Nav,
    BookCreate,
    BookList,
  },
};
</script>
