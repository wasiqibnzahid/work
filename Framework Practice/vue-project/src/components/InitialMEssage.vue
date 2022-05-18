<template>
  <div>
    <h1>{{ bleh }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea
      asperiores, omnis necessitatibus incidunt fugit deleniti cupiditate
      facilis itaque voluptate vel praesentium et doloribus numquam facere
      dolore cumque quam architecto!
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    bleh: String,
  },
};
</script>
