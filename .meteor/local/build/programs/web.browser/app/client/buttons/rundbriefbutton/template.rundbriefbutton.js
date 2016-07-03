(function(){
Template.__checkName("rundbriefbutton");
Template["rundbriefbutton"] = new Template("Template.rundbriefbutton", (function() {
  var view = this;
  return HTML.BUTTON({
    "class": "btn heading-small bt-normal text-weight-thin"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "RundbriefButton");
  }));
}));

})();
