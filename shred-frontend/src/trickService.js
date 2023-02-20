import axios from 'axios'

const REST_API_URL = 'http://localhost:5000';

export const getFlow = (getRequest) => {
  return axios.post(REST_API_URL + '/', getRequest);
}

export const saveFlow = (saveRequest) => {
  return axios.put(REST_API_URL + '/', saveRequest);
}

export const login = (loginRequest) => {
  return axios.post(REST_API_URL + '/login', loginRequest);
}

export const signup = (signupRequest) => {
  return axios.post(REST_API_URL + '/signup', signupRequest);
}

export const logout = () => {
  return axios.post(REST_API_URL + '/logout');
}


