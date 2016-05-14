/* jshint node:true */
/* jshint esnext:true */
'use strict';
console.time("CreateArray");
var array = [];
console.time("Looping");
for (let i = 0; i < 10000000; i++) {
    array.push(i);
}
console.timeEnd("Looping");
console.timeEnd("CreateArray");
