import {
  GET_TOKEN_REQUEST_FAILURE,
  GET_TOKEN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILURE,
  LOGOUT_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILURE,
  SIGNUP_REQUEST_SUCCESS,
} from './types';
const initialState = {
  user: {},
  err: '',
  message: '',
  token: '',
  refreshToken: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const user = action.payload.userObj;
      const err = '';
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;
      console.log('LOGIN_REQUEST_SUCCESS', message, user);

      return {...state, message, user: {...user}, err, token, refreshToken};
    }

    case LOGIN_REQUEST_FAILURE: {
      const err = action.err;

      return {...state, err};
    }

    case SIGNUP_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const user = action.payload.userObj;
      const err = '';
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;

      return {message, user: {...user}, err, token, refreshToken};
    }

    case SIGNUP_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case LOGOUT_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;
      console.log('refreshToken', action.payload);
      return {message, token, refreshToken, err: '', user: {}};
    }

    case LOGOUT_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case GET_TOKEN_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;
      console.log('refreshToken', action.payload);
      return {...state, message, token, refreshToken, err: ''};
    }

    case GET_TOKEN_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    default:
      return state;
  }
};

export {reducer};
