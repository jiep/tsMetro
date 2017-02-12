import Station from '../../src/model/Station';

export default class Metro {

  private stations : Array<Station>;

  constructor(stations : Array<Station>){
    this.stations = stations;
  }

  get getStations() : Array<Station> {
    return this.stations;
  }

  set setStations(stations : Array<Station>) {
    this.stations = stations;
  }

  getStationsNumber() : number {
    return this.getStations.length;
  }

  addStation(station : Station){
    this.stations.push(station);
  }
}
