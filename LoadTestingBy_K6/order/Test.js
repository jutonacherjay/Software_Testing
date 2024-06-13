
import http from 'k6/http';
import { check, sleep, group } from 'k6';

export const options = {
  scenarios: {
    concurrency_test: {
      executor: 'constant-arrival-rate',
      rate: 10,
      timeUnit: '1s',
      duration: '10s',
      preAllocatedVUs: 5,
      maxVUs: 50,
      exec: 'concurrencyTest',
    },
    load_test: {
      executor: 'constant-arrival-rate',
      rate: 5,
      timeUnit: '1s',
      duration: '20s',
      preAllocatedVUs: 3,
      maxVUs: 10,
      exec: 'loadTest',
    },
    stress_test: {
      executor: 'constant-arrival-rate',
      rate: 5,
      timeUnit: '1s',
      duration: '15s',
      preAllocatedVUs: 2,
      maxVUs: 10,
      exec: 'stressTest',
    },
  },
};

export function concurrencyTest() {
  group('concurrency test', () => {
    let response = http.get('http://127.0.0.1:8000/orders/complete-1');
    check(response, {
      'status is 200': (r) => r.status === 200,
    });
    sleep(1);
  });
}

export function loadTest() {
  group('load test', () => {
    http.get('http://127.0.0.1:8000/orders/complete-1');
    sleep(0.5);
  });
}

export function stressTest() {
  group('stress test', () => {
    http.get('http://127.0.0.1:8000/orders/complete-1');
    sleep(1); // adjust as needed
  });
}
