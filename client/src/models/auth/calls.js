const axios = require('axios');
const signupUser = user => {
  const url = 'http://192.168.1.45:3000/api/auth/register';
  return axios.post(url, user);
};

const loginUser = user => {
  const url = 'http://192.168.1.45:3000/api/auth/login';
  return axios.post(url, user);
};

const logoutUser = (refreshToken, token) => {
  const url = 'http://192.168.1.45:3000/api/auth/logout';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + token,
  };

  return axios.post(
    url,
    {refreshToken: refreshToken, token: token},
    {
      headers: headers,
    },
  );
};

const getUserToken = refreshToken => {
  const url = 'http://192.168.1.45:3000/api/auth/refresh-token';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + refreshToken,
  };

  return axios.post(
    url,
    {refreshToken: refreshToken},
    {
      headers: headers,
    },
  );
};

export {loginUser, signupUser, getUserToken, logoutUser};
