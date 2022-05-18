<template>
  <div id="app">
    <HelloWorld bleh="Hello World" />
  </div>
</template>

<script>
import HelloWorld from "./components/InitialMEssage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
