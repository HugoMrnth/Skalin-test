<template>
  <div class="container">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      required: true,
    },
  },
};
</script>

<style>
.container {
  background-color: #5cb85c;
  color: white;
  padding: 0rem 0.5rem;
  border-radius: 5px;
  position: fixed;
  top: 2%;
  right: 2%;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
</style>