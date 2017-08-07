import axios from 'axios';

import { ACTION_TYPE,API_URLS,API_ENDPOINTS,APP_KEYS } from '../constants/constant'

export function fetchPosts() {

    const request = axios.get(`${API_URLS.BASE_URL}${API_ENDPOINTS.POST_LIST}${APP_KEYS.API_KEY}`)
    
  return {
    type : ACTION_TYPE.FETCH_POST,
    payload: request
  };
} 