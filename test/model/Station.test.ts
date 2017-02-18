import Station from '../../src/model/Station';

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('Station', () => {

    var station : Station;

    describe('Constructor', () => {
      it('should create a new `Station`', () => {
          station = new Station(2, "Atocha");
          let name = station.getName;
          let id = station.getId;
          expect(name).to.equal("Atocha");
          expect(id).to.equal(2);
      });
    });

    describe('Getters and setters', () => {

        beforeEach(function () {
            station = new Station(1, "Sol");
        });

        it('should return the correct `id`', () => {
            let id : number = station.getId;
            expect(id).to.equal(1);
        });

        it('should return the correct `name`', () => {
            let name : string = station.getName;
            expect(name).to.equal("Sol");
        });

        it('should be able to change the `id`', () => {
            station.setId = 3;
            let new_id = station.getId;
            expect(new_id).to.equal(3);
        });

        it('should be able to change the `name`', () => {
            station.setName = "Chamartín";
            let new_name = station.getName;
            expect(new_name).to.equal("Chamartín");
        });
    });

    describe('To String', () => {
      before(()=>{
        station = new Station(1, "Atocha");
      });

      it("should return a string with the information of the object", ()=>{
        expect(station.toString()).to.equal("id: 1, name: Atocha");
      });
    });
});
