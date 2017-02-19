import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../src/api/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/metro/stations', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/metro/stations')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(274);
      });
  });

  it('should include all fields', () => {
    return chai.request(app).get('/api/v1/metro/stations/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys(['message','station']);
      });
  });

});
