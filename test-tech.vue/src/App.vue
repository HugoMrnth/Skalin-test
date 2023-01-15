<template>
  <div id="app">
    <h1>Mon animalerie</h1>
    <AnimalList />
  </div>
</template>

<script>
import AnimalList from "./components/AnimalList.vue";

export default {
  name: "app",
  components: {
    AnimalList,
  },
  created() {
    this.$store.dispatch("animals/initializeAnimals");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  background-image: url("../public/petrebels-kuzJU_dlBls-unsplash.jpg");
  background-size: cover;
}
body {
  padding: 0;
  margin: 0;
}
h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 3rem;
}
</style>
