import {
  loginActionError,
  loginActionSuccess,
  signupActionError,
  signupActionSuccess,
  logoutActionError,
  logoutActionSuccess,
  getTokenActionError,
  getTokenActionSuccess,
} from './actionFunctions';
import {LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT_REQUEST} from './types';
import {loginUser, signupUser, logoutUser, getUserToken} from './calls';

const login = (username, password, callback) => {
  return dispatch => {
    try {
      let user = {
        username: username,
        password: password.toString(),
      };

      loginUser(user)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(loginActionSuccess(response.data));
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
      dispatch(loginActionError(error));
      callback();
    }
  };
};

const signup = (
  email,
  fistName,
  lastName,
  organization,
  phone,
  password,
  callback,
) => {
  return dispatch => {
    try {
      const user = {
        firstName: fistName,
        lastName: lastName,
        photoUrl: '',
        email: email,
        phone: '767869868768',
        password: password.toString(),
        organisation: organization,
      };

      signupUser(user)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(signupActionSuccess(response.data));
            callback();
          } else {
            throw new Error('Something went wrong');
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      console.log(error);
      dispatch(signupActionError(error));
      callback();
    }
  };
};

const logout = (refreshToken, token, callback) => {
  return dispatch => {
    try {
      logoutUser(refreshToken, token)
        .then(response => {
          console.log('responseLogout', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(logoutActionSuccess(response.data));
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
      dispatch(logoutActionError(error));
      callback();
    }
  };
};

const getToken = (refreshToken, callback) => {
  return dispatch => {
    try {
      getUserToken(refreshToken)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(getTokenActionSuccess(response.data));
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
      dispatch(getTokenActionError(error));
      callback();
    }
  };
};

export {login, signup, logout, getToken};
