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

    describe('pg.diff', function() {
        var diff = pg.diff;

        it('is a function', function() {
            expect(diff).to.be.a('function');
        });

        it('(1,2) returns -1', function() {
            expect(diff(1, 2)).to.equal(-1);
        });
    });

    describe('pg.divide', function() {
        var divide = pg.divide;

        it('is a function', function() {
            expect(divide).to.be.a('function');
        });

        it('(4,2) returns 2', function() {
            expect(divide(4, 2)).to.equal(2);
        });
    });

});
