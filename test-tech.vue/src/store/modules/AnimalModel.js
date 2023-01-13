import uuidv4 from 'uuid/v4';
import AppointementModel from './AppointementModel';

export default class AnimalModel {
    constructor({name, species, age, date, appointementType}) {
        this.id = uuidv4().substr(0, 8);
        this.name = name;
        this.species = species;
        this.age = age;
        this.lastAppointement = new AppointementModel({date: date, appointementType: appointementType})

        // TODO: ajouter `this.lastAppointement` de type AppointementModel
    }
}