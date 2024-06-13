import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 50 }, // ramp up to 50 VUs over 1 minute
    { duration: '5m', target: 50 }, // stay at 50 VUs for 5 minutes
    { duration: '1m', target: 0 }, // ramp down to 0 VUs over 1 minute
  ],
};

export default function () {
  let response = http.get('https://example.com');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
