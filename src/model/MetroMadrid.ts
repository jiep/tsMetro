import Metro from "./Metro";
import WeightedGraph from "../graphs/WeightedGraph";
import GraphClass from "../graphs/GraphClass";
import Station from "./Station";
declare function require(name:string);
const data = require("../data/stations");
const distances = require("../data/distances");

export default class MetroMadrid extends Metro {

  private distances_graph : WeightedGraph;

  constructor(){
    let stations : Array<Station> = [];
    data.forEach(s => stations.push(new Station(s.id, s.name)));
    super(stations);
    let n = data.length;
    this.distances_graph = new WeightedGraph(GraphClass.UNDIRECTED, n);
    distances.forEach((distance) =>{
      this.distances_graph.connect(distance.source, distance.destination, distance.distance);
    });
  }

  public getShortestPath(source : Station, destination : Station) : Array<any> {
    let stations_and_distance : Array<any> = [];
    if(source.getId != destination.getId){
      stations_and_distance = this.distances_graph.shortestPath(source.getId, destination.getId);
      var stations = stations_and_distance[0];
      var distance = stations_and_distance[1];
      var a = [];
      stations.forEach(station_id => a.push(this.getStationById(station_id)));
    }else{
      return [source, 0];
    }

    return [a, distance];
  }

}
