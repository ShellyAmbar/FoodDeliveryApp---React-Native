import {
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
} from './actionFunctions';

import {
  getEmployeeCall,
  getEmployeesCall,
  updateEmployeeCall,
  setEmployeeCall,
  deleteEmployeeCall,
} from './calls';

const getEmployees = (userId, token, callback) => {
  return dispatch => {
    try {
      getEmployeesCall(userId, token)
        .then(response => {
          if (response.status === 200 || response.status === 201) {
            console.log('response', response.status);
            dispatch(getEmployeesActionSuccess(response.data.response));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })
        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      dispatch(getEmployeesActionError(error));
      callback();
    }
  };
};
const getEmployee = (employeeId, token, callback) => {
  return dispatch => {
    try {
      getEmployeeCall(employeeId, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(getEmployeeActionSuccess(response.data));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      dispatch(getEmployeeActionError(error));
      callback();
    }
  };
};
const addEmployee = (employee, token, callback) => {
  return dispatch => {
    try {
      setEmployeeCall(employee, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(addEmployeeActionSuccess(response.data));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      dispatch(addEmployeeActionError(error));
      callback();
    }
  };
};

const removeEmployee = (employeeId, token, callback) => {
  return dispatch => {
    try {
      deleteEmployeeCall(employeeId, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(removeEmployeeActionSuccess(response.data, employeeId));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      dispatch(removeEmployeeActionError(error));
      callback();
    }
  };
};

const updateEmployee = (employeeData, token, callback) => {
  return dispatch => {
    try {
      updateEmployeeCall(employeeData, token)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(updateEmployeeActionSuccess(response.data, employeeData));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      dispatch(updateEmployeeActionError(error));
      callback();
    }
  };
};

export {getEmployee, getEmployees, addEmployee, updateEmployee, removeEmployee};
