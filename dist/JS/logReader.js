/** Log Reader API using chaining design pattern
  * Find and store JSON strings of client states & appcast
  * Convert right JSON strings to JSON objects
  * Export these JSON objects
  * Determine how a client state and an appcast are paired
  */
var LogReader = function(logContent){
      /** Extract client state string */
      this.getClient= function(){
        var clientState ="";
        return clientState;
      }


      /** Extract appcast string */
      this.getAppcast = function(){
        var appcast = "";
        return appcast;
      }
      /** Extract session ID, start and end time - NOT finished */
      this.getSessions=function(){
        var tmp = logContent.substr(0,logContent.length);
        var index=0;
        while(tmp.includes('\"appcast\"')){
          sessions[index]={
            id: TID,
            start: startTimeStamp,
            end: endTimeStamp,
            clientStates: [],
            appcast:""
          }
        }

      }
    };
module.exports= LogReader;
