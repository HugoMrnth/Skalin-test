import AnimalModel from './AnimalModel';


// initial state
const state = () => ({
    all: []
});

// getters
const getters = {
    getAllAnimals: state => state.all
}

// actions
const actions = {
    initializeAnimals ({ commit }) {
        commit('setAnimals', [
            new AnimalModel({name: 'Pépéroni', species: 'Chat', age: 4, date: "December 17, 1995", appointementType: "blessure"}),
            new AnimalModel({name: 'Chisa', species: 'Lapin', age: 5,  date: "December 17, 1995", appointementType: "blessure"}),
            new AnimalModel({name: 'Yuki', species: 'Chien', age: 1,  date: "December 17, 1995", appointementType: "vaccin"}),
            new AnimalModel({name: 'Miaoukai', species: 'Chat', age: 4,  date: "December 17, 1995", appointementType: "blessure"}),
            new AnimalModel({name: 'Gnar', species: 'Chat', age: 2,  date: "December 17, 1995", appointementType: "blessure"}),
        ])
    }
}

// mutations
const mutations = {
    setAnimals (state, animals) {
        state.all = animals
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}