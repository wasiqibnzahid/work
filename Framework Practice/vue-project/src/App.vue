<template>
  <div id="id">
    <InitialMessage message="Hello World" />
  </div>
</template>

<script>
import InitialMessage from "./components/InitialMessage";

export default {
  name: "App",
  components: {
    InitialMessage,
  },
};
</script>
