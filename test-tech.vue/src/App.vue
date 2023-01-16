<template>
  <div id="app">
    <h1>Mon animalerie</h1>
    <button @click="openModal" class="btn">Ajouter un animal</button>
    <transition name="fade">
      <Toast message="Ajout d'un nouvel animal avec succès" v-if="toast" />
    </transition>
    <NewAnimalModalForm @closeModal="closeModal" @showToast="showToast" v-if="isModalOpen"/>
    <AnimalList />
  </div>
</template>

<script>
import AnimalList from "./components/AnimalList.vue";
import NewAnimalModalForm from "./components/NewAnimalModalForm.vue";
import Toast from "./components/Toast.vue";
export default {
  name: "app",
  components: {
    AnimalList,
    NewAnimalModalForm,
    Toast
},
  created() {
    this.$store.dispatch("animals/initializeAnimals");
  },
  data() {
    return {
      isModalOpen: false,
      toast: false
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true
    },
    showToast() {
      this.toast = true;
      setTimeout(() => {
        this.toast = false;
      }, 3000);
    }
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
  margin-bottom: 2rem;
}
.btn {
  background-color: #5bc0de;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 15%;
  margin-bottom: 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>