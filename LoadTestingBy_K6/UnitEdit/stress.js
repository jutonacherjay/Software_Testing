import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 }, 
    { duration: '20s', target: 20 }, 
    { duration: '1s', target: 0 }, 
  ],
};

export default () => {
  http.get('http://127.0.0.1:8000/units/centimeters/edit-1');
  sleep(1); // adjust as needed
};
