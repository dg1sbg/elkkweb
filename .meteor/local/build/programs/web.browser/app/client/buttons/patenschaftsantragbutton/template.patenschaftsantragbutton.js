(function(){
Template.__checkName("patenschaftsantragbutton");
Template["patenschaftsantragbutton"] = new Template("Template.patenschaftsantragbutton", (function() {
  var view = this;
  return HTML.BUTTON({
    "class": "btn heading-small bt-normal text-weight-thin"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "PatenschaftsantragButton");
  }));
}));

})();
