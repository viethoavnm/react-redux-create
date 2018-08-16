import axios from 'axios';

const JWT = '';

function makeConf(conf) {
  if (!conf.noAuth && JWT) {
    conf.headers = {
      'Authorize': `Bearer ${JWT}`,
      'Content-Type': 'application/json',
      ...conf.headers
    }
  }
  return conf;
}

export function makeRequest(request, method = 'GET') {
  return axios({ method, ...makeConf(request) });
}

export function get(request) {
  return makeRequest(request);
}
export function post(request) {
  return makeRequest(request, 'POST')
}

export function put(request) {
  return makeRequest(request, 'PUT')
}

export function remove(request) {
  return makeRequest(request, 'DELETE')
}

export default {
  get,
  put,
  post,
  delete: remove,
  makeRequest
}