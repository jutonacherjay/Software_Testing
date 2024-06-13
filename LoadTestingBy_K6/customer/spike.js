import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 5 }, // 100 users for 1 minute
    { duration: '10s', target: 5 }, // stay at 100 users for 1 minute
    { duration: '10s', target: 10 }, // stay at 100 users for 1 minute
    { duration: '10s', target: 0 }, // ramp down to 0 users for 1 minute
  ],
  thresholds: {
    // Ensure throughput remains above 1000 requests/second during the entire test
    'http_req_duration{type:GET}': ['p(95)<500'], // 95% of requests should complete within 500ms
    'http_req_duration{type:GET}': ['p(99)<1000'], // 99% of requests should complete within 1000ms
    'http_req_duration{type:GET}': ['p(100)<2000'], // maximum request duration should be less than 2000ms
    'http_reqs': ['rate>1000'], // Ensure throughput remains above 1000 requests/second
  },
};

export default function () {
  http.get('http://127.0.0.1:8000/orders/pending');
  sleep(1);
}
