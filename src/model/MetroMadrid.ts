import Metro from "./Metro";
import WeightedGraph from "../graphs/WeightedGraph";
import GraphClass from "../graphs/GraphClass";
import Station from "./Station";
import * as _ from "underscore";
declare function require(name:string);
const data = require("../data/stations");
const distances = require("../data/distances");

export default class MetroMadrid extends Metro {

  private distances_graph : WeightedGraph;

  constructor(){
    super(data);
    let n = data.length;
    this.distances_graph = new WeightedGraph(GraphClass.UNDIRECTED, n);
    distances.forEach((distance) =>{
      this.distances_graph.connect(distance.source, distance.destination, distance.distance);
    });
  }

  public getShortestPath(source : Station, destination : Station) : Array<Station> {
    let stations : Array<Station> = [];
    if(source.getId != destination.getId){
      stations = this.distances_graph.shortestPath(source.getId, destination.getId);
    }

    stations.forEach(station_id => {
      console.log("Id", station_id, "Station", this.getStationById(station_id.getId));
      return this.getStationById(station_id.getId)
    });

    return stations;
  }

}
