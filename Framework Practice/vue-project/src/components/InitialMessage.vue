<template>
  <div>
    <h1>{{ message }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis debitis
      neque eum omnis repudiandae consequatur accusamus at quo quasi
      exercitationem, laborum distinctio consequuntur cupiditate aspernatur
      dignissimos? Magnam aliquam fugiat nobis.
    </p>
    
  </div>
</template>

<script>
export default {
  name: "InitialMessage",
  props: {
    message: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

* {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
