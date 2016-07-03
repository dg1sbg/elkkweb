(function(){
Template.__checkName("mitgliedsantragbutton");
Template["mitgliedsantragbutton"] = new Template("Template.mitgliedsantragbutton", (function() {
  var view = this;
  return HTML.BUTTON({
    "class": "btn heading-small bt-normal text-weight-thin"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "MitgliedschaftsantragButton");
  }));
}));

})();
