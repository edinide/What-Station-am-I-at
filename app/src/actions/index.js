import axios from 'axios'
export const FETCH_SUBWAY = 'FETCH_SUBWAY';

export function fetchSubway() {
  const request = axios.get('/subway_app/view/');
  return {
    type: FETCH_SUBWAY,
    payload: request
  }
}