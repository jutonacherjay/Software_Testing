import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 50 }, // ramp up to 50 VUs over 1 minute
    { duration: '5s', target: 50 }, // stay at 50 VUs for 5 minutes
    { duration: '1s', target: 0 }, // ramp down to 0 VUs over 1 minute
  ],
};

export default function () {
  let response = http.get('http://127.0.0.1:8000/units/centimeters');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
