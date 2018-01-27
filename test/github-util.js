import { expect } from 'chai';
import { getReadMeContents } from '../src/github-util';

describe.only('github util', () => {
  it.only('get Readme Contents - should return json', (done) => {
    const owner = 'k88hudson';
    const repo = 'git-flight-rules';
    getReadMeContents(owner, repo).then((res) => {
      expect(res.status).to.equal(200);
      done();
    });
  }).timeout(5000);
});
