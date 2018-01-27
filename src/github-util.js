import axios from 'axios';

const getReadMeContents = (owner, repo) => {
  const baseURL = 'https://api.github.com/repos';
  const requestUrl = `${baseURL}/${owner}/${repo}/readme`;

  return axios.get(requestUrl)
    .then(response => response)
    .catch((err) => {
      // TODO - handle error scenario
      console.log(err); // eslint-disable-line
    });
};

export {
  // eslint-disable-next-line
  getReadMeContents
};
