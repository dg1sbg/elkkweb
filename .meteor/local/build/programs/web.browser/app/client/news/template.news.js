(function(){
Template.__checkName("news");
Template["news"] = new Template("Template.news", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12 newsevent"
  }, "\n                        ", HTML.DIV({
    "class": "fullheight section-column col-md-4"
  }, "\n                            ", HTML.DIV({
    "class": "center-inner-text center-horizontal event-date"
  }, "\n                                ", HTML.P({
    "class": "text-weight-thin event-date-text"
  }, " \n                                    ", Blaze.View("lookup:day", function() {
    return Spacebars.mustache(view.lookup("day"));
  }), " \n                                "), "\n                                ", HTML.P({
    "class": "text-secondary"
  }, Blaze.View("lookup:month", function() {
    return Spacebars.mustache(view.lookup("month"));
  })), "\n                            "), "\n                            ", HTML.P({
    "class": "center-inner-text event-date-time"
  }, Blaze.View("lookup:time", function() {
    return Spacebars.mustache(view.lookup("time"));
  })), "\n                            ", HTML.P({
    "class": "center-inner-text event-date-location"
  }, Blaze.View("lookup:location", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("location")));
  })), " \n                        "), "\n                        ", HTML.DIV({
    "class": "fullheight section-column col-md-8"
  }, "\n                            ", HTML.P({
    "class": "heading-small event-heading"
  }, "\n    ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n                            ", HTML.P({
    "class": "text-weight-thin section-text text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), " \n                        "), "                         \n	");
}));

})();
