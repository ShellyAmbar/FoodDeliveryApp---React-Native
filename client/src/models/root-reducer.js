import {reducer as employeesReducer} from './employee/reducer';
import {reducer as authReducer} from './auth/reducer';
import {reducer as userReducer} from './user/reducer';

import {combineReducers} from 'redux';

const reducer = combineReducers({
  employees: employeesReducer,
  auth: authReducer,
  user: userReducer,
});

export {reducer};
