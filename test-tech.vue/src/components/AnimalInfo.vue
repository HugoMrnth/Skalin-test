<template>
  <div class="animal-info">
    <h3 class="title">{{ animal.name }}</h3>
    <div class="info-container">
      <div>
        <p><span class="category">Espèce:</span> {{ animal.species }}</p>
        <p><span class="category">Age</span>: {{ animal.age }}</p>
      </div>
      <div>
        <p class="rdv-title">Dernier rendez-vous :</p>
        <ul>
          <li>Date: {{ animal.lastAppointement.date }}</li>
          <li>Type: {{ animal.lastAppointement.appointementType }}</li>
        </ul>
      </div>
    </div>
    <br />
    <button @click="onEdit" class="btn">Modifier</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true,
    },
  },
  methods: {
    onEdit() {
      this.$emit("edit");
    },
  },
};
</script>

<style scoped>
.animal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.title {
  font-size: 2rem;
}
.info-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.rdv-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.category {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 2rem 0;
}
.btn {
  background-color: #5bc0de;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}
ul,
li {
  list-style: none;
  color: black;
}
p {
  margin: 0%;
}
</style>