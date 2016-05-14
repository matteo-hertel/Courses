/* jshint node:true */
/* jshint esnext:true */
'use strict';

function Character(name, power) {
    this.name = name;
    this.power = power;

}

var buffy = new Character("Buffy", "slayer");

var willow = new Character("willow", "witch");
var spike = new Character("Spike", "vampire");

var chars = [buffy, willow, spike];

console.table(chars);

var charsNames = {
    "Buffy": buffy,
    "Willow": willow,
    "Spike": spike
};

console.table(charsNames, ["power"]);
