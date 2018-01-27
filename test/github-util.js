import { expect } from 'chai';
import { getReadMeContents } from '../src/github-util';

describe.only('github util', () => {
  it.only('Get Readme Contents - should return readme data', (done) => {
    const owner = 'k88hudson';
    const repo = 'git-flight-rules';
    getReadMeContents(owner, repo).then((res) => {
      console.log(res.status);
      expect(res.status).to.equal(200);
      done();
    });
  }).timeout(5000);
});
