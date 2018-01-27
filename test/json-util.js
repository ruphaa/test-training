import { expect } from 'chai';
import stringArrayToObjectArray from '../src/json-util';

describe('json util', () => {
  it('should return object array for string array', () => {
    const input = ['a', 'b', 'c'];
    const expectedOutput = [
      { a: 'a' },
      { b: 'b' },
      { c: 'c' }
    ];
    const output = stringArrayToObjectArray(input);
    expect(output).to.deep.equal(expectedOutput, 'Oops! Failed');
  });

  it('should return null for monkey inputs', () => {
    let input = ['a', 1, 'c'];
    let output = stringArrayToObjectArray(input);
    expect(output).to.be.null;
    input = 22;
    output = stringArrayToObjectArray(input);
    expect(output).to.be.null;
    input = null;
    output = stringArrayToObjectArray(input);
    expect(output).to.be.null;
    input = [null, null, null];
    output = stringArrayToObjectArray(input);
    expect(output).to.be.null;
    input = ['', '', ''];
    output = stringArrayToObjectArray(input);
    expect(output).to.be.null;
  });
});
