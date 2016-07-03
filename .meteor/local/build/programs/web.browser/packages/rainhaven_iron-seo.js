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
var _ = Package.underscore._;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Iron = Package['iron:core'].Iron;

/* Package-scope variables */
var mn, mk, prop, metaTag, mnt, mpt;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rainhaven:iron-seo/rainhaven:iron-seo.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var metaNameTags = {};                                                                                              // 1
var metaPropertyTags = {};                                                                                          // 2
                                                                                                                    // 3
var getSelector = function (tagType, value) {                                                                       // 4
  var selector = 'meta[' + tagType + '="' + value + '"]';                                                           // 5
  return selector;                                                                                                  // 6
}                                                                                                                   // 7
                                                                                                                    // 8
var hasTag = function (tagType, value) {                                                                            // 9
  var selector = getSelector(tagType, value);                                                                       // 10
  return $(selector).length > 0;                                                                                    // 11
}                                                                                                                   // 12
                                                                                                                    // 13
var insertNewTags = function (metaNames, metaProperties) {                                                          // 14
  var self = this;                                                                                                  // 15
  for (mn in metaNames) {                                                                                           // 16
    metaNameTags[mn] = metaNames[mn];                                                                               // 17
  }                                                                                                                 // 18
  for (mk in metaProperties) {                                                                                      // 19
    metaPropertyTags[mk] = metaProperties[mk];                                                                      // 20
  }                                                                                                                 // 21
                                                                                                                    // 22
  if (! _.isEmpty(metaNameTags)) {                                                                                  // 23
    for (prop in metaNameTags) {                                                                                    // 24
      if (_.isString(metaNameTags[prop])) {                                                                         // 25
        if (hasTag('name', prop)) {                                                                                 // 26
          var selector = getSelector('name', prop);                                                                 // 27
          $(selector).attr('content', metaNameTags[prop]);                                                          // 28
        } else {                                                                                                    // 29
          metaTag = document.createElement('meta');                                                                 // 30
          metaTag.name = prop;                                                                                      // 31
          metaTag.content = metaNameTags[prop];                                                                     // 32
          document.getElementsByTagName('head')[0].appendChild(metaTag);                                            // 33
        }                                                                                                           // 34
      } else if (_.isFunction(metaNameTags[prop])) {                                                                // 35
        if (hasTag('name', prop)) {                                                                                 // 36
          var selector = getSelector('name', prop);                                                                 // 37
          $(selector).attr('content', metaNameTags[prop].call(self));                                               // 38
        } else {                                                                                                    // 39
          metaTag = document.createElement('meta');                                                                 // 40
          metaTag.name = prop;                                                                                      // 41
          metaTag.content = metaNameTags[prop].call(self);                                                          // 42
          document.getElementsByTagName('head')[0].appendChild(metaTag);                                            // 43
        }                                                                                                           // 44
      } else {                                                                                                      // 45
        console.warn("Meta Tag: " + prop + " needs to be either a string or function");                             // 46
      }                                                                                                             // 47
                                                                                                                    // 48
    }                                                                                                               // 49
  }                                                                                                                 // 50
  if (! _.isEmpty(metaPropertyTags)) {                                                                              // 51
    for (prop in metaPropertyTags) {                                                                                // 52
      if (_.isString(metaPropertyTags[prop])) {                                                                     // 53
        if (hasTag('property', prop)) {                                                                             // 54
          var selector = getSelector('property', prop);                                                             // 55
          $(selector).attr('content', metaPropertyTags[prop]);                                                      // 56
        } else {                                                                                                    // 57
          $('head').append('<meta property="' + prop + '" content="' + metaPropertyTags[prop] + '" />');            // 58
        }                                                                                                           // 59
                                                                                                                    // 60
      } else if (_.isFunction(metaPropertyTags[prop])) {                                                            // 61
        if (hasTag('property', prop)) {                                                                             // 62
          var selector = getSelector('property', prop);                                                             // 63
          $(selector).attr('content', metaPropertyTags[prop].call(self));                                           // 64
        } else {                                                                                                    // 65
          $('head').append('<meta property="' + prop + '" content="' + metaPropertyTags[prop].call(self) + '" />'); // 66
        }                                                                                                           // 67
      } else {                                                                                                      // 68
        console.warn("Meta Tag: " + prop + " needs to be either a string or function");                             // 69
      }                                                                                                             // 70
    }                                                                                                               // 71
  }                                                                                                                 // 72
}                                                                                                                   // 73
                                                                                                                    // 74
var removeTag = function (tagType, value) {                                                                         // 75
  var selector = getSelector(tagType, value);                                                                       // 76
                                                                                                                    // 77
  $(selector).remove();                                                                                             // 78
                                                                                                                    // 79
  if (tagType === 'name')                                                                                           // 80
    delete metaNameTags[value];                                                                                     // 81
                                                                                                                    // 82
  if (tagType === 'property')                                                                                       // 83
    delete metaPropertyTags[value];                                                                                 // 84
                                                                                                                    // 85
}                                                                                                                   // 86
                                                                                                                    // 87
var deleteOldTags = function (metaNames, metaProperties) {                                                          // 88
  var metaNames = metaNames || {};                                                                                  // 89
  var metaProperties = metaProperties || {};                                                                        // 90
                                                                                                                    // 91
  for (mnt in metaNameTags) {                                                                                       // 92
    if (_.isUndefined(metaNames[mnt]))                                                                              // 93
      removeTag('name', mnt);                                                                                       // 94
  }                                                                                                                 // 95
                                                                                                                    // 96
  for (mpt in metaPropertyTags) {                                                                                   // 97
    if (_.isUndefined(metaProperties[mpt]))                                                                         // 98
      removeTag('property', mpt);                                                                                   // 99
  }                                                                                                                 // 100
}                                                                                                                   // 101
                                                                                                                    // 102
Router.onAfterAction(function () {                                                                                  // 103
                                                                                                                    // 104
  var self = this,                                                                                                  // 105
      metaTag,                                                                                                      // 106
      titleTag = this.lookupOption('title'),                                                                        // 107
      metaNames = this.lookupOption('metaNames'),                                                                   // 108
      metaProperties = this.lookupOption('metaProperties');                                                         // 109
                                                                                                                    // 110
  if (_.isEmpty(metaNameTags) && _.isEmpty(metaPropertyTags)) {                                                     // 111
    insertNewTags.call(self, metaNames, metaProperties);                                                            // 112
  } else {                                                                                                          // 113
    deleteOldTags(metaNames, metaProperties);                                                                       // 114
    insertNewTags.call(self, metaNames, metaProperties);                                                            // 115
  }                                                                                                                 // 116
                                                                                                                    // 117
  if (! _.isUndefined(titleTag)) {                                                                                  // 118
    if(_.isString(titleTag))                                                                                        // 119
      document.title = titleTag;                                                                                    // 120
    else if(_.isFunction(titleTag))                                                                                 // 121
      document.title = titleTag.call(self);                                                                         // 122
    else                                                                                                            // 123
      console.warn("Title tag needs to be either a string or function");                                            // 124
  }                                                                                                                 // 125
                                                                                                                    // 126
                                                                                                                    // 127
  // this.next();                                                                                                   // 128
});                                                                                                                 // 129
                                                                                                                    // 130
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rainhaven:iron-seo'] = {};

})();
