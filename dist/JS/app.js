/** Single entry point for building with webpack */

var ClientState= require("./clientDisplay.js");
var Appcast = require("./appcastDisplay.js");
var filterSession=require("./filterSession.js");
var parseLog=require("./parseLog.js");
ClientState();
parseLog();