import {
  REMOVE_USER_REQUEST_FAILURE,
  REMOVE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAILURE,
  UPDATE_USER_REQUEST_SUCCESS,
} from './types';
//GET

//DELETE

const removeUserActionSuccess = payload => {
  return {
    type: REMOVE_USER_REQUEST_SUCCESS,
    payload: payload,
  };
};
const removeUserActionError = error => {
  return {
    type: REMOVE_USER_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

// Update
const updateUserActionSuccess = (payload, user) => {
  return {
    type: UPDATE_USER_REQUEST_SUCCESS,
    payload: payload,
    user,
  };
};
const updateUserActionError = error => {
  return {
    type: UPDATE_USER_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

export {
  removeUserActionError,
  removeUserActionSuccess,
  updateUserActionError,
  updateUserActionSuccess,
};
