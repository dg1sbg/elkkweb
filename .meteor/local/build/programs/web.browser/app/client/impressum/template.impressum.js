(function(){
Template.__checkName("impressum");
Template["impressum"] = new Template("Template.impressum", (function() {
  var view = this;
  return [ HTML.SECTION({
    "class": ""
  }, "\n            ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), "\n        ", HTML.SECTION({
    "class": "margin-top-more margin-bottom-more margin-top-lots"
  }, "\n            ", HTML.Raw('<div class="">\n                <div class="container section-heading">\n                    <div class="col-md-12">\n                        <p class="section-heading-paragraph heading-small">Impressum</p>\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                    ", HTML.P({
    "class": "text section-text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "Impressum1"));
  }), "\n                        ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Kontaktadresse");
  }, function() {
    return [ "\n", Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    }), "\n" ];
  }), "\n", Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "Impressum2"));
  }), "\n", Blaze.Each(function() {
    return Spacebars.call(view.lookup("vorstand"));
  }, function() {
    return [ "\n", Blaze.View("lookup:firstName", function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }), " ", Blaze.View("lookup:lastName", function() {
      return Spacebars.mustache(view.lookup("lastName"));
    }), HTML.BR(), "\n" ];
  }), HTML.Raw("<br>"), "\n", Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "Impressum3"));
  })), "                      \n                "), "\n            "), "\n        "), "\n        ", HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n") ];
}));

})();
