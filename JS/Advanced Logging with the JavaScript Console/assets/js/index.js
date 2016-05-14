/* jshint node:true */
/* jshint esnext:true */
'use strict';
for (let i = 0; i < 100; i++) {
    let num = Math.random() * 100;
    num > 50 ? console.count("Greater than 50") : console.count("Less than 50");
}
