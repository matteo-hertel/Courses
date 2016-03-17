/* jshint node : true */
/* jshint esnext : true */
"use strict";

var Horseman = require("node-horseman");
var validUrl = require("valid-url");
var fs = require("fs");
var prompt = require("prompt");
var program = require("commander");

const PATH_TO_PHANTOM = 'C:\phantomjs-2.0.0\bin';

program
.version("0.0.1")
.option("-x --action-to-perform [string]", "Type of action to perform.")
.option("-u --url [string]", "Option URL used by certain actions.")
.parse(process.argv);
