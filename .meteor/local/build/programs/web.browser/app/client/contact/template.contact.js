(function(){
Template.__checkName("contact");
Template["contact"] = new Template("Template.contact", (function() {
  var view = this;
  return [ HTML.SECTION("\n            ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), HTML.Raw('\n        <section class="titlesection-special picture-contact">\n</section>\n        '), HTML.SECTION({
    "class": "margin-top-more margin-bottom-more margin-bottom-contact"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "section-heading-paragraph heading-small"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "ContactTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12 section-column"
  }, " \n                    ", HTML.P({
    "class": "section-text-special text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ContactDescription1"));
  }), "\n"), "\n					", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Kontaktadresse");
  }, function() {
    return [ "\n                    ", HTML.P({
      "class": "text-weight-bold section-text text"
    }, Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    })), "\n					" ];
  }), "\n                    ", HTML.P({
    "class": "section-text text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ContactDescription2"));
  })), " \n                "), "\n            "), "\n        "), "\n        ", HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n") ];
}));

})();
