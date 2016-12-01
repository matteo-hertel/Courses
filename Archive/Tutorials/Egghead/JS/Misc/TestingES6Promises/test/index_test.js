const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");

const index = require("./../index");

chai.use(chaiAsPromised);


describe('Function foo', function() {
    it('it should resolve any number except 1', () => {
        let promise = index.foo(0);
        return expect(promise).to.eventually.equal(0);
    });
    it('it should reject when supplied a 1', () => {
        let promise = index.foo(1);
        return expect(promise).to.be.rejected;
    });
});
