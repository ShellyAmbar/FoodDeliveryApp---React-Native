import {
  removeUserActionError,
  removeUserActionSuccess,
  updateUserActionError,
  updateUserActionSuccess,
} from './actionFunctions';
import {REMOVE_USER_REQUEST, UPDATE_USER_REQUEST} from './types';
import {updateUserCall, deleteUserCall} from './calls';

const removeUser = (user, token, callback) => {
  return dispatch => {
    try {
      deleteUserCall(user._id, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(removeUserActionSuccess(response.data));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      removeUserActionError(error);
      callback();
    }
  };
};

const updateUser = (user, token, callback) => {
  console.log('user', user);
  return dispatch => {
    try {
      updateUserCall(user, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(updateUserActionSuccess(response.data, user));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      console.log(error);
      updateUserActionError(error);
      callback();
    }
  };
};

export {removeUser, updateUser};
