const axios = require('axios');

const getEmployeeCall = (employeeId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/getEmployee';

  return axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    params: {employeeId: employeeId},
  });
};

const getEmployeesCall = (userId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/getEmployees';

  return axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    params: {userId: userId},
  });
};

const updateEmployeeCall = (employeeData, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/updateEmployee';

  return axios({
    method: 'put',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    data: {...employeeData},
  });
};

const setEmployeeCall = (employee, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/setEmployee';
  console.log('setEmployeeCall', employee);
  return axios({
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    data: {...employee},
  });
};

const deleteEmployeeCall = (employeeId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/deleteEmployee';

  return axios({
    method: 'delete',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
    data: {employeeId: employeeId},
  });
};

export {
  getEmployeeCall,
  getEmployeesCall,
  updateEmployeeCall,
  setEmployeeCall,
  deleteEmployeeCall,
};
