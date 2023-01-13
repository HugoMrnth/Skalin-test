<template>
  <div class="animal-input">
    <p class="instructions">
      // TODO modifer ce composant pour permettre de modifier l'animal et de le
      sauvegarder via le store      
    </p>
    <ul class="instructions">
        <li>Nom de l'animal: <input type="text" v-model='animaltoUpdate.name' :placeholder="animal.name"></li>
        <li>Age de l'animal: <input type="number" min="1" max="20" v-model="animaltoUpdate.age" :placeholder="animal.age"></li>
        <li>Espèce de l'animal: 
          <select v-model="animaltoUpdate.species">
            <option value="Chat">Chat</option>
            <option value="Chien">Chien</option>
            <option value="Lapin">Lapin</option>
          </select>
        </li>
        <li>
            Dernier rdv chez le vétérinaire 
            <ul>
                <li>
                    Date du rdv: <input type="date" v-model="animaltoUpdate.lastAppointement.date">
                </li>
                <li>
                    Type de rdv: 
                    <select v-model="animaltoUpdate.lastAppointement.appointementType">
                      <option value="contrôle">contrôle</option>
                      <option value="blessure">blessure</option>
                      <option value="vaccin">vaccin</option>
                    </select>
                </li>
            </ul>
        </li>
    </ul>
    <br />
    <button @click="onSave">Sauvegarder</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true
    }
  },
  data() {
    return {
      animaltoUpdate: this.animal
    }
  },
  methods: {
    onSave() {
      this.$emit('save', this.animaltoUpdate)
    }
  }
}
</script>

<style>
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
}
</style>