import axios from 'axios';

import {ACTION_TYPE, API_URLS, API_ENDPOINTS, APP_KEYS} from '../constants/constant'

export function fetchPosts() {

  const request = axios.get(`${API_URLS.BASE_URL}${API_ENDPOINTS.POSTS}${APP_KEYS.API_KEY}`)

  return {type: ACTION_TYPE.FETCH_POSTS, payload: request};
}

export function createPost(values, callback) {
  const request = axios
    .post(`${API_URLS.BASE_URL}${API_ENDPOINTS.POSTS}${APP_KEYS.API_KEY}`, values)
    .then(() => callback());

  return {type: ACTION_TYPE.CREATE_POST, payload: request}
}

export function fetchPost(id) {
  const request = axios.get(`${API_URLS.BASE_URL}${API_ENDPOINTS.POSTS}/${id}${APP_KEYS.API_KEY}`);

  return {type: ACTION_TYPE.FETCH_POST, payload: request}
}

export function deletePost(id,callback) {
  const request = axios.delete(`${API_URLS.BASE_URL}${API_ENDPOINTS.POSTS}/${id}${APP_KEYS.API_KEY}`)
  .then(() => callback() );

  return {type: ACTION_TYPE.DELETE_POST, payload: id}
}