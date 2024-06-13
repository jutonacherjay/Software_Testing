import http from 'k6/http';
 import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
export const options = {

stages: [

{ duration: '5s', target: 50 }, // ramp up
{ duration: '10s', target: 100 }, // stable { duration: '5m', target: 0}, // ramp-down to 8
{ duration: '0s', target: 0 }
],
};

// const dates = new SharedArray('dates', function () {
//     var dates=[];
//     var currentDate = new Date();
    
//     var minDate = new Date();
    
//     minDate.setFullYear(currentDate.getFullYear() - 100);
    
//     for (var i=0; 1 < 100; 1++) {
    
//     var randomTime= Math.random() *(currentDate.getTime() -minDat .getTime())
//     var randomDate = new Date(minDate.getTime()+ randomTime);
//      dates.push(randomDate.toISOString());
//     return dates;
//     }
//     });

export default () => {

 http.get('http://127.0.0.1:8000/units/centimeters/edit-1');
  sleep(1); 
};