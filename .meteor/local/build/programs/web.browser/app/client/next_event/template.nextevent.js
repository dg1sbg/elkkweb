(function(){
Template.__checkName("nexteventtmpl");
Template["nexteventtmpl"] = new Template("Template.nexteventtmpl", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", HTML.DIV({
    "class": "col-md-4 fullheight section-column"
  }, "\n                    ", HTML.DIV({
    "class": "featuredevent-date center-inner-text center-horizontal"
  }, "\n                        ", HTML.P({
    "class": "text-weight-thin featuredevent-date-text"
  }, Blaze.View("lookup:day", function() {
    return Spacebars.mustache(view.lookup("day"));
  })), "\n                        ", HTML.P({
    "class": "text-large text-weight-bold"
  }, Blaze.View("lookup:month", function() {
    return Spacebars.mustache(view.lookup("month"));
  })), "\n                    "), "\n                    ", HTML.P({
    "class": "center-inner-text featuredevent-date-time"
  }, Blaze.View("lookup:time", function() {
    return Spacebars.mustache(view.lookup("time"));
  })), "\n                    ", HTML.P({
    "class": "featuredevent-date-location center-inner-text"
  }, Blaze.View("lookup:location", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("location")));
  })), " \n                "), "\n                ", HTML.DIV({
    "class": "col-md-8 fullheight section-column"
  }, "\n                    ", HTML.P({
    "class": "heading-medium featuredevent-heading"
  }, "\n    ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n                    ", HTML.P({
    "class": "text-weight-thin section-text text-large featuredevent-text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), " \n                "), "\n            ");
}));

})();
