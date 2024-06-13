import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 5 }, 
    { duration: '2m', target: 20 }, 
    { duration: '30s', target: 0 }, 
  ],
};

export default () => {
  http.get('http://127.0.0.1:8000/customers/');
  sleep(1); // adjust as needed
};
