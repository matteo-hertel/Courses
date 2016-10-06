/* jshint esversion:6 */
/* jshint node:true */
/* global fetch */
'use strict';

const user = "matteo-hertel";
const url = `https://api.github.com/users/${user}`;

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
