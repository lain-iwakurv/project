'use strict';

let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    continue;
    i++;
  }
  else {
    console.log(i);
    i++;
  }
}   
