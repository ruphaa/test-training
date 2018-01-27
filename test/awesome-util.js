import { assert, should, expect } from 'chai';
import defaultAwesomeFunction, { awesomeFunction as awesomeShorty } from '../src/awesome-util';

describe('Awesome test - using assert', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
    const returnVal = defaultAwesomeFunction('Dinesh');
    assert(returnVal === expectedVal, 'Default not awesome :(');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function';
    assert(awesomeShorty() === expectedVal, 'Named awesome :(');
  });
});

describe('Awesome test - using should', () => {
  should();

  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Ruphaa';
    const returnVal = defaultAwesomeFunction('Ruphaa');
    returnVal.should.equal(expectedVal, 'Default not awesome');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function';
    const returnVal = awesomeShorty();
    returnVal.should.equal(expectedVal, 'Named not awesome');
  });
});

describe('Awesome test - using expect', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
    const returnVal = defaultAwesomeFunction('Dinesh');
    expect(returnVal).to.equal(expectedVal, 'Default not awesome');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function';
    const returnVal = awesomeShorty();
    expect(returnVal).to.equal(expectedVal, 'Named not awesome');
  });
});
