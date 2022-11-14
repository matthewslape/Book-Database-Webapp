import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyD4SWgsMNoXneWZk7oBfn349QAJEibEvgY",
  authDomain: "book-database-webapp.firebaseapp.com",
  projectId: "book-database-webapp",
  storageBucket: "book-database-webapp.appspot.com",
  messagingSenderId: "60312778322",
  appId: "1:60312778322:web:cbea7bca7b01c7c22dd18b",
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const bookCollection = db.collection("books");

//FUNCTIONS

export const createBook = (book) => {
  return bookCollection.add(book);
};

export const getBook = async (id) => {
  const book = await bookCollection.doc(id).get();
  return book.exists ? book.data() : null;
};

export const updateBook = (id, book) => {
  return bookCollection.doc(id).update(book);
};

export const deleteBook = (id) => {
  return bookCollection.doc(id).delete();
};

export const useLoadBooks = () => {
  const books = ref([]);
  const close = bookCollection.onSnapshot((snapshot) => {
    books.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return books;
};
