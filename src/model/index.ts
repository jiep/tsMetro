import MetroMadrid from "../../src/model/MetroMadrid";
import Metro from "../../src/model/Metro";
import Station from "./Station";

var metro : MetroMadrid = new MetroMadrid();
var station1 : Station = new Station(1, "Sol");
var station2 : Station = new Station(2, "Atocha");

let m = new MetroMadrid();
let s1 = m.getStationById(1);
let s2 = m.getStationById(2);
//let shortestPath = m.getShortestPath(s1, s2);
console.log(s1);
