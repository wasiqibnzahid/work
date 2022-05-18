<template>
  <div class="about">
    <h1>{{ aboutMessage }}</h1>
    <button @click="addRow">Add Item</button>
    <button @click="removeRow">Remove Item</button>
    <div class="table">
      <table>
        <tr>
          <th>Author Name</th>
          <th>Book Name</th>
          <th>ID Number</th>
        </tr>
        <tr v-for="(book, ID) in books" :key="book.id">
          <td>
            {{ book.bookName }}
          </td>
          <td>{{ book.authorName }}</td>
          <td>{{ ID + 1 }}</td>
        </tr>
      </table>
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
        bookName: `New Book `,
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
td:nth-of-type(3) {
  text-align: center;
}
</style>
