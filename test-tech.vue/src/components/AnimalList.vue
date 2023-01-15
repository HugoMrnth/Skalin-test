<template>
  <div class="animal-list">
    <animal-card
      v-for="animal in animals"
      :key="animal.id"
      :animal="animal"
      class="animal-card"
    />
  </div>
</template>

<script>
import AnimalCard from "./AnimalCard";
export default {
  components: { AnimalCard },
  computed: {
    animals: function() {
      return this.$store.getters["animals/getAllAnimals"];
    },
  },
};
</script>

<style scoped>
.animal-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  width: 100%;
}
.animal-card {
  margin: 0.5rem auto;
}
</style>