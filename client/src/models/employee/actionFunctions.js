import {
  ADD_EMPLOYEE_REQUEST_FAILURE,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEE_REQUEST_FAILURE,
  GET_EMPLOYEE_REQUEST_SUCCESS,
  REMOVE_EMPLOYEE_REQUEST_FAILURE,
  REMOVE_EMPLOYEE_REQUEST_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST_FAILURE,
  UPDATE_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEES_REQUEST_SUCCESS,
  GET_EMPLOYEES_REQUEST_FAILURE,
} from './types';
//GET

const getEmployeesActionSuccess = data => {
  console.log(data);
  return {
    type: GET_EMPLOYEES_REQUEST_SUCCESS,
    payload: data,
  };
};
const getEmployeesActionError = error => {
  return {
    type: GET_EMPLOYEES_REQUEST_FAILURE,
    err: error,
  };
};

const getEmployeeActionSuccess = data => {
  return {
    type: GET_EMPLOYEE_REQUEST_SUCCESS,
    payload: data,
  };
};
const getEmployeeActionError = error => {
  return {
    type: GET_EMPLOYEE_REQUEST_FAILURE,
    err: error,
  };
};
//SET

const addEmployeeActionSuccess = data => {
  return {
    type: ADD_EMPLOYEE_REQUEST_SUCCESS,
    payload: data,
  };
};
const addEmployeeActionError = error => {
  return {
    type: ADD_EMPLOYEE_REQUEST_FAILURE,
    err: error,
  };
};

//DELETE

const removeEmployeeActionSuccess = (data, employeeId) => {
  return {
    type: REMOVE_EMPLOYEE_REQUEST_SUCCESS,
    payload: data,
    employeeId,
  };
};
const removeEmployeeActionError = error => {
  return {
    type: REMOVE_EMPLOYEE_REQUEST_FAILURE,
    err: error,
  };
};

// Update
const updateEmployeeActionSuccess = (data, employeeData) => {
  return {
    type: UPDATE_EMPLOYEE_REQUEST_SUCCESS,
    payload: data,
    employeeData,
  };
};
const updateEmployeeActionError = error => {
  return {
    type: UPDATE_EMPLOYEE_REQUEST_FAILURE,
    err: error,
  };
};

export {
  getEmployeeActionError,
  getEmployeeActionSuccess,
  getEmployeesActionError,
  getEmployeesActionSuccess,
  addEmployeeActionError,
  addEmployeeActionSuccess,
  removeEmployeeActionError,
  removeEmployeeActionSuccess,
  updateEmployeeActionError,
  updateEmployeeActionSuccess,
};
