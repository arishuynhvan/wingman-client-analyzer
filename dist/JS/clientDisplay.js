/** Client Display */

const JSONEditor = require('jsoneditor');
var container = document.getElementById("jsoneditor");

/** Read only fields */
var options = {
  onEditable: function (node) {return false;}
};
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
editor.get(json);


// container = document.getElementById("jsonobj2");
// editor = new JSONEditor(container, options);

// editor.set(json);
// editor.get(json);
// display json
//var json = editor.get();