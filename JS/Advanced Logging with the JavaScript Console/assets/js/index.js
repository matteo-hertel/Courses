/* jshint node:true */
/* jshint esnext:true */
'use strict';

for (let i = 0; i < 100; i++) {
    let num = Math.random() * 100;
    console.groupCollapsed("Picking a random number");
    console.log("N > 10?", num > 10);
    console.log("N > 50?", num > 50);
    console.groupCollapsed("Nested group");
    console.log(num);
    console.groupEnd();
    console.groupEnd();
}
