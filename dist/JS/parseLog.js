/** To retrieve file from UI and parse it for JSON objects */
/** TODO:
  * - [x] Retrieve file from UI
  * For displaying multiple objects, consider defining JSON schema appropriately
  * Write automated test to double confirm if the extracted info is right
  */
module.exports=function(){
var LogReader= require("./logReader.js");
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  /** Practice Design Patterns for functions? */

  /** Avoid hoisting issue with declaration first */
  var clientState ="";
  var appcast ="";
  var startTimeStamp = "";
  var endTimeStamp ="";
  //var fileContent="";
  /** Each session is an object from 0 to n
    * e.g.
    * 0:{
    *    id: TID#,
    *    start: startTimeStamp,
    *    end: endTimeStamp,
    *    clientStates: [],
    *    appcast:""
    *    }
    */

    var sessions={};

    document.getElementById('log-input').addEventListener('change', handleFileSelect, false);
    //console.log(clientState);


    /** Get file from <input type="file" id="file"> */
    function handleFileSelect(event){
      console.log(event.target)
      var file = event.target.files[0];
      console.log(file.name);
      if (file) {
       var reader = new FileReader();

       reader.onload = function(e){
        /** How to avoid using a global scope variable here? */
        var fileContent =e.target.result;
      }

        // Read the content of the file.
        reader.readAsText(file);
      }else{
        alert("Failed to load file");
      }
    }




  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

};