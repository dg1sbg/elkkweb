(function(){
Template.__checkName("featurednews");
Template["featurednews"] = new Template("Template.featurednews", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-6 section-column"
  }, "\n        ", HTML.DIV({
    "class": "center-inner-text specialsection-heading heading-medium"
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "                     \n    	", HTML.P({
    "class": "center-inner-text specialsection-text text-large text-weight-thin section-text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), "\n   	");
}));

})();
