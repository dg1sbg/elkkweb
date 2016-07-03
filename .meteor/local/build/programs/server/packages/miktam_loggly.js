(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Loggly;

(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/miktam:loggly/logglyServer.js                                            //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var loggly = Npm.require('loggly');                                                  // 1
                                                                                     // 2
Loggly = function(options) {                                                         // 3
  this.client = loggly.createClient(options);                                        // 4
};                                                                                   // 5
                                                                                     // 6
/**                                                                                  // 7
 * Native wrapper for log method - just pass the arguments                           // 8
 */                                                                                  // 9
Loggly.prototype.log = function (param, tag) {                                       // 10
  this.client.log(param, tag);                                                       // 11
};                                                                                   // 12
                                                                                     // 13
/**                                                                                  // 14
 * Set of useful methods to log with the tag                                         // 15
 *                                                                                   // 16
 * @example: Loggly.warn("error message") will add tag `warn` to the `error message` // 17
 */                                                                                  // 18
                                                                                     // 19
Loggly.prototype._applyArguments = function (args, tag) {                            // 20
  if (args && args.length === 1) {                                                   // 21
    this.client.log(args[0], tag);                                                   // 22
  } else {                                                                           // 23
    this.client.log(args, tag);                                                      // 24
  }                                                                                  // 25
};                                                                                   // 26
                                                                                     // 27
Loggly.prototype.trace = function () {                                               // 28
  this._applyArguments(arguments, 'trace');                                          // 29
};                                                                                   // 30
                                                                                     // 31
Loggly.prototype.info = function () {                                                // 32
  this._applyArguments(arguments, 'info');                                           // 33
};                                                                                   // 34
                                                                                     // 35
Loggly.prototype.warn = function () {                                                // 36
  this._applyArguments(arguments, 'warn');                                           // 37
};                                                                                   // 38
                                                                                     // 39
Loggly.prototype.error = function () {                                               // 40
  this._applyArguments(arguments, 'error');                                          // 41
};                                                                                   // 42
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/miktam:loggly/logglyMeteorMethods.js                                     //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
/***                                                                                 // 1
 * loggerSet - checks to see if the Logger object has been created on server         // 2
 * @returns {boolean} - return true if the Logger object has been created on server  // 3
 */                                                                                  // 4
var loggerSet = function () {                                                        // 5
  if (typeof Logger !== 'undefined' && Logger !== null) {                            // 6
    return true;                                                                     // 7
  }                                                                                  // 8
  console.log('Logger object was not created on the Meteor Server');                 // 9
  return false;                                                                      // 10
};                                                                                   // 11
                                                                                     // 12
Meteor.methods({                                                                     // 13
  logglyLog: function(param, tag) {                                                  // 14
    if (loggerSet()){                                                                // 15
      Logger.log(param, tag);                                                        // 16
    }                                                                                // 17
  },                                                                                 // 18
  logglyTrace: function(param, tag) {                                                // 19
    if (loggerSet()){                                                                // 20
      Logger.trace(param, tag);                                                      // 21
    }                                                                                // 22
  },                                                                                 // 23
  logglyInfo: function(param, tag) {                                                 // 24
    if (loggerSet()){                                                                // 25
      Logger.info(param, tag);                                                       // 26
    }                                                                                // 27
  },                                                                                 // 28
  logglyWarn:  function(param, tag) {                                                // 29
    if (loggerSet()){                                                                // 30
      Logger.warn(param, tag);                                                       // 31
    }                                                                                // 32
  },                                                                                 // 33
  logglyError:  function(param, tag) {                                               // 34
    if (loggerSet()) {                                                               // 35
      Logger.error(param, tag);                                                      // 36
    }                                                                                // 37
  }                                                                                  // 38
});                                                                                  // 39
                                                                                     // 40
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['miktam:loggly'] = {
  Loggly: Loggly
};

})();

//# sourceMappingURL=miktam_loggly.js.map
