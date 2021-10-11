const axios = require('axios');

const updateUserCall = (user, token) => {
  const url = 'http://192.168.1.45:3000/api/user/updateUser';
  console.log('updateUserCall', user);
  return axios({
    method: 'put',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    data: {...user},
  });
};

const deleteUserCall = (userId, token) => {
  const url = 'http://192.168.1.45:3000/api/user/deleteUser';

  return axios({
    method: 'delete',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    data: {userId: userId},
  });
};
export {updateUserCall, deleteUserCall};
