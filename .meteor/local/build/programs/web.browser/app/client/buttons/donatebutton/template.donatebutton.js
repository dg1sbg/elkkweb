(function(){
Template.__checkName("donatebutton");
Template["donatebutton"] = new Template("Template.donatebutton", (function() {
  var view = this;
  return HTML.BUTTON({
    "class": "btn bt-special heading-small text-weight-bold"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "Donatebutton");
  }));
}));

})();
