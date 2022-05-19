<template>
  <div id="id">
    <div>abc</div>
    <InitialMessage message="Hello World Vue" />
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
