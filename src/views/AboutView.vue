<template>
  <div class="about">
    <h1>{{ aboutMessage }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMessage: "Hello World but on about page",
    };
  },
};
</script>
