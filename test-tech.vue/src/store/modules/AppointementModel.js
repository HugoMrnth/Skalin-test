import uuidv4 from 'uuid/v4';

export default class AppointementModel {
    constructor({date, appointementType}) {
      if(appointementType !== "contrôle" && appointementType !== "blessure" && appointementType !== "vaccin" ) {
        alert('Appointement type must be contrôle, blessure or vaccin')
        throw('Appointement type must be contrôle, blessure or vaccin')
      }
        this.id = uuidv4().substr(0, 8);
        this.date = new Date(date).toLocaleDateString();
        this.appointementType = appointementType
    }
}