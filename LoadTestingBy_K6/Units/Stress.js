import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 }, 
    { duration: '10s', target: 10 }, 
    { duration: '15s', target: 5 }, 
  ],
};

export default () => {
  http.get('http://127.0.0.1:8000/units/centimeters');
  sleep(1); // adjust as needed
};
