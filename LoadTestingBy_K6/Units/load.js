import http from 'k6/http';
 import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
export const options = {

stages: [

{ duration: '10s', target: 5 }, // ramp up
{ duration: '20s', target: 10 }, // stable { duration: '5m', target: 0}, // ramp-down to 8
{ duration: '3s', target: 0 }
],
};


export default () => {

 http.get('http://127.0.0.1:8000/units/centimeters');
  sleep(0.5); 
};