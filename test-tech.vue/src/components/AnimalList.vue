<template>
  <div class="animal-list">
      <p class="instructions">
          // TODO: utiliser display: grid pour afficher 2 animal-card sur chaque ligne
      </p>
      <p class="instructions">          
          // TODO: afficher un message temporaire (text qui disparait) lorsqu'un animal est mis à jour pour confirmer la sauvegarde
      </p>
    <animal-card v-for="animal in animals" :key="animal.id" :animal="animal" />
  </div>
</template>

<script>
import AnimalCard from './AnimalCard'
export default {
  components: { AnimalCard },
  computed: {
    animals: function () {
      return this.$store.getters['animals/getAllAnimals']
    }
  }


}
</script>

<style scoped>
.animal-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>