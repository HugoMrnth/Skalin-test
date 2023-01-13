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
            new AnimalModel({name: 'Pépéroni', species: 'Chat', age: 4}),
            new AnimalModel({name: 'Chisa', species: 'Lapin', age: 5}),
            new AnimalModel({name: 'Yuki', species: 'Chien', age: 1}),
            new AnimalModel({name: 'Miaoukai', species: 'Chat', age: 4}),
            new AnimalModel({name: 'Gnar', species: 'Chat', age: 2}),
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