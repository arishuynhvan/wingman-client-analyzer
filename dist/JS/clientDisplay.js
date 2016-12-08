/** Client Display */

const JSONEditor = require('jsoneditor');
var container = document.getElementById("jsoneditor");
var options = {};
var editor = new JSONEditor(container, options);

// mock json

var json = {
    "Array": [1, 2, 3],
    "Boolean": true,
    "Null": null,
    "Number": 123,
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
editor.set(json);

// display json
var json = editor.get();