(function(){
Template.__checkName("rundbriefarchiv");
Template["rundbriefarchiv"] = new Template("Template.rundbriefarchiv", (function() {
  var view = this;
  return [ HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n"), "\n	", HTML.SECTION("\n            ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), "\n        ", HTML.SECTION({
    "class": "margin-top-more margin-bottom-more margin-top-lots"
  }, "\n            ", HTML.Raw('<div class="">\n                <div class="container section-heading">\n                    <div class="col-md-12">\n                        <p class="section-heading-paragraph heading-small">Rundbriefarchiv</p>\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("years"));
  }, function() {
    return [ "\n                    ", HTML.DIV({
      "class": "col-md-12 margin-top-more"
    }, "\n                        ", HTML.P({
      "class": "heading-medium text-weight-thin heading-no-margin-bottom background-gray"
    }, Blaze.View("lookup:value", function() {
      return Spacebars.mustache(view.lookup("value"));
    })), "\n                    "), "\n                    ", Blaze.Each(function() {
      return Spacebars.dataMustache(view.lookup("rundbriefe"), view.lookup("value"));
    }, function() {
      return [ "\n                        ", HTML.DIV({
        "class": "section-column col-md-3 imagegallery-container"
      }, "\n                            ", HTML.DIV({
        "class": "pg-empty-placeholder rb-image"
      }), "\n                            ", HTML.DIV({
        "class": "rb-name text-weight-thin text green-elkk"
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "                    \n                        "), "\n                    " ];
    }), "\n                " ];
  }), "\n            "), "\n        ") ];
}));

})();
