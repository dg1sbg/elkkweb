(function(){
Template.__checkName("mehrerfahrenbutton");
Template["mehrerfahrenbutton"] = new Template("Template.mehrerfahrenbutton", (function() {
  var view = this;
  return HTML.BUTTON({
    "class": "btn bt-special heading-small text-weight-bold"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeMehrErfahrenButton");
  }));
}));

})();
