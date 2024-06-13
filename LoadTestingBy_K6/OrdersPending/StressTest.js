import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 5 }, // ramp up to 50 VUs over 2 minutes
    { duration: '2m', target: 10 }, // hold at 50 VUs for 5 minutes
    { duration: '1m', target: 15 }, // ramp up to 100 VUs over 2 minutes
    { duration: '1m', target: 20 }, // hold at 100 VUs for 5 minutes
     // hold at 1000 VUs for 5 minutes
    { duration: '1m', target: 0 } // ramp down to 0 VUs over 10 minutes
  ],
};

export default () => {
  http.get('http://127.0.0.1:8000/orders/pending');
  sleep(1); // adjust as needed
};
