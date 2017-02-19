import MetroMadrid from "../../model/MetroMadrid";
import Station from "../../model/Station";

export module MetroMadridService {

  var metro : MetroMadrid = new MetroMadrid();

  export function findById(id : number) : Station {
    return metro.getStationById(id);
  }

  export function getAll() : Array<Station> {
    return metro.getStations;
  }

  export function getShortestPath(source : Station, destination : Station) : Array<Station> {
    return metro.getShortestPath(source, destination);
  }
}
