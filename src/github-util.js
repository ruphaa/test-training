import axios from 'axios';

const getReadMeFile = (owner, repo) => {
  const baseURL = 'https://api.github.com/repos';
  const requestUrl = `${baseURL}/${owner}/${repo}/readme`;

  return axios.get(requestUrl)
    .then(res => res)
    .catch(err => null); //eslint-disable-line
};

const decodeBase64String = (base64String) => {
  if (typeof base64String !== 'string') return null;
  const decodedString = Buffer.from(base64String, 'base64');
  return decodedString.toString();
};

const getReadMeData = (owner, repo) =>
  getReadMeFile(owner, repo)
    .then((res) => {
      if (res && res.data && res.data.content) decodeBase64String(res.data.content);
      return null;
    });

export {
  // eslint-disable-next-line
  getReadMeFile,
  decodeBase64String,
  getReadMeData
};
