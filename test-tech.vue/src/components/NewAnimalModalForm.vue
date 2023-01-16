<template>
  <div class="container">
    <div class="animal-input">
      <h2 class="title">Ajouter un nouvel animal</h2>
      <div class="main-content">
        <div>
          <div class="input-container">
            <label class="category">Nom de l'animal: </label>
            <input type="text" v-model="newAnimal.name" required/>
          </div>
          <div class="input-container">
            <label class="category">Age de l'animal:</label>
            <input type="number" min="1" max="20" v-model="newAnimal.age" />
          </div>
          <div class="input-container">
            <label class="category">Espèce de l'animal: </label>
            <select v-model="newAnimal.species">
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
              <input type="date" v-model="newAnimal.date" />
            </li>
            <li class="input-container">
              <label> Type: </label>
              <select v-model="newAnimal.appointementType">
                <option value="contrôle">contrôle</option>
                <option value="blessure">blessure</option>
                <option value="vaccin">vaccin</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div class="btn-container">
        <button @click="onAdd" class="btn">Ajouter</button>
        <button @click="closeModal" class="btn close-btn">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newAnimal: {
        name: "",
        age: 1,
        species: "Chat",
        date: Date.now(),
        appointementType: "contrôle",
      },
    };
  },
  methods: {
    onAdd() {
      this.$store.dispatch("animals/addNewAnimalAction", this.newAnimal);
      this.$emit("closeModal");
      this.$emit("showToast")
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  color: black;
}
.title {
  margin: auto;
  color: black;
}
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
  width: 50%;
  min-height: 40vh;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2.2rem;
  background-color: white;
  position: absolute;
  top: 10%;
  left: 25%;
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
.main-content {
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
.close-btn {
  background: red;
}
.btn-container {
  display: flex;
  justify-content: space-between;
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