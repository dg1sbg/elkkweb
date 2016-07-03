//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Logger;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/miktam:loggly/logglyClient.js                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Logger = {};                                                         // 1
                                                                     // 2
Logger.log = function (param, tag) {                                 // 3
  Meteor.call('logglyLog', param, tag, function() {});               // 4
};                                                                   // 5
                                                                     // 6
Logger.trace = function (param, tag) {                               // 7
  Meteor.call('logglyTrace', param, tag, function() {});             // 8
};                                                                   // 9
                                                                     // 10
Logger.info = function (param, tag) {                                // 11
  Meteor.call('logglyInfo', param, tag, function() {});              // 12
};                                                                   // 13
                                                                     // 14
Logger.warn = function (param, tag) {                                // 15
  Meteor.call('logglyWarn', param, tag, function() {});              // 16
};                                                                   // 17
                                                                     // 18
Logger.error = function (param, tag) {                               // 19
  Meteor.call('logglyError', param, tag, function() {});             // 20
};                                                                   // 21
                                                                     // 22
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['miktam:loggly'] = {
  Logger: Logger
};

})();
