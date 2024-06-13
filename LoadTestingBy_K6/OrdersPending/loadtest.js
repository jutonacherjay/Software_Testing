import http from 'k6/http';
 import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
export const options = {

stages: [

{ duration: '1m', target: 50 }, 
{ duration: '2m', target: 100 }, 
{ duration: '0m', target: 0 }
],
};



export default () => {

 http.get('http://127.0.0.1:8000/orders/pending');
  sleep(1); 
};