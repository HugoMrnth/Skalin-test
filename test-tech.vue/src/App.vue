<template>
  <div id="app">
    <h1>Mon animalerie</h1>
    <AnimalList />
  </div>
</template>

<script>
import AnimalList from './components/AnimalList.vue'

export default {
  name: 'app',
  components: {
    AnimalList
  },
  created() {
    this.$store.dispatch('animals/initializeAnimals')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.instructions {
  color: blueviolet !important;
}
</style>
