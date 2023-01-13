<template>
  <div class="animal-card">
    <animal-input v-if="isEditMode" :animal="animal" @save="saveInfos" />
    <animal-info v-else :animal="animal" @edit="isEditMode = true" />
  </div>
</template>

<script>
import AnimalInput from './AnimalInput'
import AnimalInfo from './AnimalInfo'

export default {
  components: { AnimalInfo, AnimalInput },
  props: {
    animal: {
      required: true
    }
  },
  data() {
    return {
      isEditMode: false
    }
  },
  methods: {
    saveInfos(param){
      this.$store.dispatch('animals/updateAnimalAction', param)
      this.isEditMode = false
    }
  }
}
</script>

<style scoped>
.animal-card {
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 12px;
  padding: 24px;
  width: 65ch;
}
</style>