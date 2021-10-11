import {
  ADD_EMPLOYEE_REQUEST_FAILURE,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEE_REQUEST_FAILURE,
  GET_EMPLOYEE_REQUEST_SUCCESS,
  REMOVE_EMPLOYEE_REQUEST_FAILURE,
  REMOVE_EMPLOYEE_REQUEST_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST_FAILURE,
  UPDATE_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEES_REQUEST_FAILURE,
  GET_EMPLOYEES_REQUEST_SUCCESS,
} from './types';
const initialState = {
  employees: [],
  err: '',
  message: '',
  employee: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST_SUCCESS: {
      const employee = action.payload;

      return {...state, employee, err: ''};
    }
    case GET_EMPLOYEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }
    case GET_EMPLOYEES_REQUEST_SUCCESS: {
      const employees = action.payload;

      return {...state, employees: [...employees], err: ''};
    }
    case GET_EMPLOYEES_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }
    case ADD_EMPLOYEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const employee = action.payload.employee;

      return {
        ...state,
        employees: [...state.employees, employee],
        err: '',
        message,
      };
    }

    case ADD_EMPLOYEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case REMOVE_EMPLOYEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const employeeId = action.employeeId;

      const newList = state.employees.filter(el => el._id !== employeeId);

      return {...state, employees: [...newList], message, err: ''};
    }

    case REMOVE_EMPLOYEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case UPDATE_EMPLOYEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const employeeId = action.employeeData._id;
      const employeeData = action.employeeData;
      console.log('employeeId', employeeData._id);
      const newList = state.employees.map(el =>
        el._id === employeeId ? {...employeeData} : el,
      );

      return {...state, employees: [...newList], message, err: ''};
    }

    case UPDATE_EMPLOYEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    default:
      return state;
  }
};

export {reducer};
