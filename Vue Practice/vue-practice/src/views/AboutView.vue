<template>
  <div @click="messageToggler" class="about">
    <h1>{{ aboutMessage }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutMessage: "Welcome to the about page",
    };
  },
  methods: {
    messageToggler() {
      if (this.aboutMessage == "Welcome to the about page") {
        this.aboutMessage = "toggled about message";
      } else {
        this.aboutMessage = "Welcome to the about page";
      }
    },
  },
};
</script>
