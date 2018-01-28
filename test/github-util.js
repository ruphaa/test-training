import { expect } from 'chai';
import { getReadMeFile, decodeBase64String, getReadMeData } from '../src/github-util';

describe.only('github util', () => {
  it('get Readme Contents - should return json', (done) => {
    const owner = 'k88hudson';
    const repo = 'git-flight-rules';
    getReadMeFile(owner, repo).then((res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });

  it('decode the base64 string', () => {
    const input = 'SSBsb3ZlIFRERCA8Mw==';
    const output = decodeBase64String(input);
    expect(output).to.equal('I love TDD <3');
  });

  it('monkey test - base64 decode', () => {
    let input = 22;
    let output = decodeBase64String(input);
    expect(output).to.be.null;
    input = null;
    output = decodeBase64String(input);
    expect(output).to.be.null;
  });

  it('get readme data', () => {
    const owner = 'k88hudson';
    const repo = 'git-flight-rules';
    getReadMeData(owner, repo).then((data) => {
    console.log(data); // eslint-disable-line
    });
  });

  it('should return null when something goes wrong', (done) => {
    const owner = 'k88hudcson';
    const repo = 'git-flight-rules';
    getReadMeData(owner, repo).then((data) => {
      expect(data).to.be.null;
      done();
    });
  });
}).timeout(5000);
