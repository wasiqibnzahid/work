<template>
  <div class="about">
    <h1>{{ aboutMessage }}</h1>
    <div class="table">
      <table>
        <tr>
          <th>Author Name</th>
          <th>Book Name</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
          <td>
            {{ book.bookName }}
          </td>
          <td>{{ book.authorName }}</td>
        </tr>
      </table>
      <button @click="addRow">Add Item</button>
      <button @click="removeRow">Remove Item</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutMessage: "Welcome to the about page",
      books: [
        { bookName: "Percy Jackson", authorName: "Super Writer Man" },
        { bookName: "Peaky Blinders", authorName: "Alfie Solomons" },
        { bookName: "Spider Man Chronicles", authorName: "Stan Lee" },
        { bookName: "Batman", authorName: "Bruce Wayne" },
      ],
    };
  },
  methods: {
    addRow() {
      this.books.push({
        bookName: "New Book",
        authorName: "New Author",
      });
    },
    removeRow() {
      this.books.splice(-1, 1);
    },
  },
};
</script>

<style scoped>
table {
  text-align: left;
  border-spacing: 100px;
}
</style>
