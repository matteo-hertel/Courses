/* jshint node:true */
/* jshint esnext:true */
'use strict';
// standard mode
var foo;

if (!foo) {
    console.error("Foo wasn't set");
}
//assert mode
console.assert(foo, "Foo wans't set");
