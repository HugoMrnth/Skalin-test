import AnimalModel from "./AnimalModel";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {
  getAllAnimals: (state) => state.all,
};

// actions
const actions = {
  initializeAnimals({ commit }) {
    commit("setAnimals", [
      new AnimalModel({
        name: "Pépéroni",
        species: "Chat",
        age: 4,
        date: "December 17, 2022",
        appointementType: "vaccin",
      }),
      new AnimalModel({
        name: "Chisa",
        species: "Lapin",
        age: 5,
        date: "December 17, 2022",
        appointementType: "blessure",
      }),
      new AnimalModel({
        name: "Yuki",
        species: "Chien",
        age: 1,
        date: "December 17, 2022",
        appointementType: "vaccin",
      }),
      new AnimalModel({
        name: "Miaoukai",
        species: "Chat",
        age: 4,
        date: "December 17, 2022",
        appointementType: "blessure",
      }),
      new AnimalModel({
        name: "Gnar",
        species: "Chat",
        age: 2,
        date: "December 17, 2022",
        appointementType: "blessure",
      }),
    ]);
  },
  updateAnimalAction({ commit }, animal) {
    commit("updateAnimal", animal);
  },
  addNewAnimalAction({ commit }, animal) {
    commit("addNewAnimal", animal);
  },
};

// mutations
const mutations = {
  setAnimals(state, animals) {
    state.all = animals;
  },
  updateAnimal(state, animal) {
    let animalToUpdate = state.all.find((item) => item.id === animal.id);
    if (animal.age < 1) {
      alert("L'age de l'animal ne peut être inferieur à 1 ans");
      throw "animal a can't be under 1";
    }
    if (animal.lastAppointement.date !== animalToUpdate.lastAppointement.date) {
      animal.lastAppointement.date = new Date(
        animal.lastAppointement.date
      ).toLocaleDateString();
    }
    Object.assign(animalToUpdate, animal);
  },
  addNewAnimal(state, animal) {
    if (animal.age < 1) {
      alert("L'age de l'animal ne peut être inferieur à 1 ans");
      throw "animal a can't be under 1";
    }
    if (animal.name === "") {
      alert("Veuillez choisir un nom à l'animal");
      throw "animal name can't be empty";
    }
    state.all = [...state.all, new AnimalModel({
        name: animal.name,
        age: animal.age,
        species: animal.species,
        date: animal.date,
        appointementType: animal.appointementType,
      }),
    ];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
