import Station from '../../src/model/Station';
import MetroMadrid from '../../src/model/MetroMadrid';
declare function require(name:string);
const stations = require('../../src/data/stations');

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('Metro Madrid', () => {

  var metro : MetroMadrid = new MetroMadrid();

  describe('Contructor', () =>{
    it('should create the Madrid metro with 274 stations', () => {
      expect(metro.getStations.length).to.equal(274);
    });

    it("should create the metro with the specific stations", () => {
      expect(metro.getStations).to.eql(stations);
    });
  });

  describe('Find the station by id', () => {
    it("should return the the station given the id", () => {
      let s1 : Station = metro.getStationById(1);
      let station = new Station(1, "Acacias");
      expect(s1).to.eql(station);
    });
  });

  describe('Shortest path', () =>{
    it("should return the shortest path between the two given stations", () => {
      let station1 : Station = metro.getStationById(1);
      let station2 : Station = metro.getStationById(2);
      expect(metro.getShortestPath(station1, station2)).to.eql([]);
    });
  });
});
