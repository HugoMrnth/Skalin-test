<template>
  <div class="animal-info">
    <b>{{ animal.name }}</b>
    <span><u>Espèce</u>: {{ animal.species }}</span>
    <span><u>Age</u>: {{ animal.age }}</span>

    <br />
    <p class="instructions">
      // TODO Ajouter les informations du dernier RDV chez le vétérinaire via un
      modèle AppointementModel dans le store
    </p>
    <ul class="instructions">
      <li>Date du rdv: Date</li>
      <li>Type de rdv: string parmi {contrôle, blessure, vaccin}</li>
    </ul>
    <br />
    <button @click="onEdit">Modifier</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit');
    }
  }
}
</script>

<style scoped>
.animal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
</style>