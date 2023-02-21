import axios from 'axios'

axios.defaults.baseURL = 'https://shredapp.click';

export const getFlow = (getRequest) => {
  return axios.post('/', getRequest);
}

export const saveFlow = (saveRequest) => {
  return axios.put('/', saveRequest);
}

export const login = (loginRequest) => {
  return axios.post('/login', loginRequest);
}

export const signup = (signupRequest) => {
  return axios.post('/signup', signupRequest);
}

export const logout = () => {
  return axios.post('/logout');
}


