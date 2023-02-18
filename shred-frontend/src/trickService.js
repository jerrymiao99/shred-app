import axios from 'axios'

const REST_API_URL = 'http://localhost:5000';

export const getNodesEdges = () => {
  return axios.get(REST_API_URL + '/');
}
export const updateNodesEdges = (tricks) => {
  return axios.put(REST_API_URL + '/', tricks);
}

// export const updateNodesEdges = () => {
//   return axios.put(REST_API_URL + '/');
// }



