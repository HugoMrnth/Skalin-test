<template>
  <div class="animal-input">
    <div class="main-container">
      <div>
        <div class="input-container">
          <label class="category">Nom de l'animal: </label>
          <input
            type="text"
            v-model="animaltoUpdate.name"
            :placeholder="animal.name"
          />
        </div>
        <div class="input-container">
          <label class="category">Age de l'animal:</label>
          <input
            type="number"
            min="1"
            max="20"
            v-model="animaltoUpdate.age"
            :placeholder="animal.age"
          />
        </div>
        <div class="input-container">
          <label class="category">Espèce de l'animal: </label>
          <select v-model="animaltoUpdate.species">
            <option value="Chat">Chat</option>
            <option value="Chien">Chien</option>
            <option value="Lapin">Lapin</option>
          </select>
        </div>
      </div>
      <div>
        <p class="category">Dernier rdv chez le vétérinaire</p>
        <ul>
          <li class="input-container">
            <label>Date:</label>
            <input type="date" v-model="animaltoUpdate.lastAppointement.date" />
          </li>
          <li class="input-container">
            <label> Type: </label>
            <select v-model="animaltoUpdate.lastAppointement.appointementType">
              <option value="contrôle">contrôle</option>
              <option value="blessure">blessure</option>
              <option value="vaccin">vaccin</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <button @click="onSave" class="btn">Sauvegarder</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true,
    },
  },
  data() {
    return {
      animaltoUpdate: JSON.parse(JSON.stringify(this.animal)),
    };
  },
  methods: {
    onSave() {
      this.$emit("save", this.animaltoUpdate);
    },
  },
};
</script>

<style scoped>
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
  width: 100%;
  padding-top: 2.2rem;
}
input,
select {
  border: 1px solid gray;
  background-color: rgb(226 232 240);
  font-size: 1rem;
  width: 50%;
  border-radius: 4px;
  padding: 0.2rem 0.2rem;
  margin-left: 0.2rem;
}
.main-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.input-container {
  margin-bottom: 1rem;
}
.category {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.btn {
  background-color: #5bc0de;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 25%;
}
ul,
li {
  list-style: none;
  color: black;
}
p {
  margin: 0 0 1.2rem 0;
}
</style>