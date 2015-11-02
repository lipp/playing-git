var expect = require('chai').expect;
var pg = require('../lib/playing-git');

describe('The playing-git module "pg"', function() {

    it('should be an object/dictionary', function() {
        expect(pg).to.be.an('object');
    });

    describe('pg.sum', function() {
        var sum = pg.sum;

        it('is a function', function() {
            expect(sum).to.be.a('function');
        });

        it('(1,2) returns 3', function() {
            expect(sum(1, 2)).to.equal(3);
        });
    });

});