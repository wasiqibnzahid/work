<template>
  <div>
    <h2 @click="messageChange">{{ initialMessage }}</h2>
    <router-link to="/aboutSIES">About</router-link>
    <ul>
      <li v-for="book in books" :key="book.id">
        <h3>{{ book.title }} from {{ book.author }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      initialMessage: "Hello World",
      books: [
        { author: "redman", title: "bigbook" },
        { author: "blueman", title: "smallbook" },
        { author: "blackman", title: "mediumbook" },
      ],
    };
  },
  methods: {
    messageChange() {
      this.initialMessage = "Bye World";
    },
  },
};
</script>
