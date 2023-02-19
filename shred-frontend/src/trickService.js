import axios from 'axios'

const REST_API_URL = 'http://localhost:5000';

export const getNodesEdges = () => {
  return axios.get(REST_API_URL + '/');
}
export const updateNodesEdges = (tricks) => {
  return axios.put(REST_API_URL + '/', tricks);
}

export const login = (loginRequest) => {
  return axios.post(REST_API_URL + '/login', loginRequest);
}

export const signup = (signupRequest) => {
  return axios.post(REST_API_URL + '/signup', signupRequest);
}

export const logout = () => {
  return axios.get(REST_API_URL + '/logout');
}

// export const updateNodesEdges = () => {
//   return axios.put(REST_API_URL + '/');
// }



