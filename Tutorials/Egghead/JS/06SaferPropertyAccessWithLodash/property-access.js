/* jshint esversion: 6 */
/* jshint node:true*/
const _get = require("lodash.get");
const person = {
    firstname: "Jon",
    lastname: "Snow",
    details: {
        // pets: [{
        //     name: "Ghost"
        // }, {
        //     name: "Drogon"
        // }]
    }
};
//string version
const pets = _get(person, "details.pets", []);

// array version
const name = _get(person, ["details", "pets", 0, "name"]);

let ns = ["details", "pets"];

const secondName = _get(person, ns.concat(1, "name"));

if (pets.length) {
    console.log(pets);
} else {
    console.log("person has no pets");
}
console.log(name, secondName);
