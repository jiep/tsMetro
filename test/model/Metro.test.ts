import Station from '../../src/model/Station';
import Metro from '../../src/model/Metro';

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('Metro', () => {

    var metro : Metro;
    var stations : Array<Station>;

    before(function () {
        let station1 : Station = new Station(1, "Sol");
        let station2 : Station = new Station(2, "Atocha");
        let station3 : Station = new Station(3, "Chamartín");
        stations = [station1, station2, station3];
    });

    describe('Constructor', () => {

      it('should create a new `Metro`', () => {
          let metro = new Metro(stations);
          expect(stations.length).to.equal(3);
      });
    });

    describe('Getters and setters', () => {

        var sol = new Station(1, "Sol");
        var atocha = new Station(2, "Atocha");
        var chamartin = new Station(3, "Chamartín");

        beforeEach(function () {
            metro = new Metro(stations);
        });

        it('should return the correct `stations`', () => {
            let stations : Array<Station> = metro.getStations;
            let station1 : Station = stations[0];
            let station2 : Station = stations[1];
            let station3 : Station = stations[2];

            expect(station1).to.eql(sol);
            expect(station2).to.eql(atocha);
            expect(station3).to.eql(chamartin);

        });

        it('should be able to change the `stations`', () => {
            let new_station = new Station(4, "Nuevos Ministerios");
            metro.setStations = [new_station];
            expect(metro.getStations.length).to.equal(1);
        });
    });
});
