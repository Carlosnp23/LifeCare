const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const should = chai.should();
const expect = chai.expect;

require('../index')


describe('GET /Patient/findAllPatient', () => {
    it('should return a list of films when called', done => {
      chai
        .request(app)
        .get('/Patient/findAllPatient')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.deep.equal();
          done();
        });
    });
  });
  