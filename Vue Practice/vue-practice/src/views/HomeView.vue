<template>
  <div @click="messageToggler" class="home">
    <h1>{{ initialMessage }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      initialMessage: "Hello World",
    };
  },

  methods: {
    messageToggler() {
      if (this.initialMessage == "Hello World") {
        this.initialMessage = "Bye World";
      } else {
        this.initialMessage = "Hello World";
      }
    },
  },
};
</script>
