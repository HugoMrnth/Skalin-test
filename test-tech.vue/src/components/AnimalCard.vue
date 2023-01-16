<template>
  <div class="animal-card">
    <transition name="fade">
      <Toast message="Mise à jour de la carte avec succès" v-if="toast" />
    </transition>
    <animal-input v-if="isEditMode" :animal="animal" @save="saveInfos" />
    <animal-info v-else :animal="animal" @edit="isEditMode = true" />
  </div>
</template>

<script>
import AnimalInput from "./AnimalInput";
import AnimalInfo from "./AnimalInfo";
import Toast from "./Toast.vue";

export default {
  components: { AnimalInfo, AnimalInput, Toast },
  props: {
    animal: {
      required: true,
    },
  },
  data() {
    return {
      isEditMode: false,
      toast: false,
    };
  },
  methods: {
    saveInfos(param) {
      this.$store.dispatch("animals/updateAnimalAction", param);
      this.isEditMode = false;
      this.toast = true;
      setTimeout(() => {
        this.toast = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.animal-card {
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 12px;
  padding: 24px;
  width: 80ch;
  background-color: white;
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