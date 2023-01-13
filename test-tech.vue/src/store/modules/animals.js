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
            new AnimalModel({name: 'Pépéroni', species: 'Chat', age: 4, date: "December 17, 1995", appointementType: "vaccin"}),
            new AnimalModel({name: 'Chisa', species: 'Lapin', age: 5,  date: "December 17, 1995", appointementType: "blessure"}),
            new AnimalModel({name: 'Yuki', species: 'Chien', age: 1,  date: "December 17, 1995", appointementType: "vaccin"}),
            new AnimalModel({name: 'Miaoukai', species: 'Chat', age: 4,  date: "December 17, 1995", appointementType: "blessure"}),
            new AnimalModel({name: 'Gnar', species: 'Chat', age: 2,  date: "December 17, 1995", appointementType: "blessure"}),
        ])
    },
    updateAnimalAction({ commit }, param) {
        commit('updateAnimal', param)
    }

}

// mutations
const mutations = {
    setAnimals (state, animals) {
        state.all = animals
    },
    updateAnimal(state, param) {
        let result = state.all.find(animal => animal.id === param.id)
        Object.assign(result, param)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}