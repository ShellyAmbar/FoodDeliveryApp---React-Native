import {
  REMOVE_USER_REQUEST_FAILURE,
  REMOVE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAILURE,
  UPDATE_USER_REQUEST_SUCCESS,
} from './types';
const initialState = {
  user: {},
  message: '',
  err: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER_REQUEST_SUCCESS: {
      const message = action.payload.message;

      return {...state, user: {}, message, err: ''};
    }

    case REMOVE_USER_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case UPDATE_USER_REQUEST_SUCCESS: {
      const user = action.user;
      const message = action.payload.message;

      return {...state, user: {...user}, message, err: ''};
    }

    case UPDATE_USER_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    default:
      return state;
  }
};

export {reducer};
