(function(){
Template.__checkName("org");
Template["org"] = new Template("Template.org", (function() {
  var view = this;
  return [ HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n"), "\n	 ", HTML.SECTION({
    "class": "titlesection titlepicture-org"
  }, "\n           ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), "\n        ", HTML.SECTION({
    "class": "specialsection section"
  }, "\n            ", HTML.DIV({
    "class": "section-title"
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.P({
    "class": "section-heading-paragraph"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "OrgOrgTitle");
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", HTML.DIV({
    "class": "section-column col-md-12"
  }, "\n                    ", HTML.P({
    "class": "specialsection-text text-large text-weight-thin section-text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "OrgOrgDescription"));
  })), "\n                "), "\n            "), "\n        "), "\n\n        ", HTML.SECTION({
    "class": "specialsection section"
  }, "\n            ", HTML.DIV({
    "class": "section-title"
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.P({
    "class": "section-heading-paragraph"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "OrgVorstandTitle");
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("vorstand"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "section-column col-md-4 center-inner-text col-sm-4"
    }, "\n                    ", HTML.DIV({
      "class": "org-vorstand-image"
    }, "\n                        ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("url"));
      },
      "class": "holgerdembek org-vorstand-img",
      height: "100%"
    }), "\n                    "), "\n                    ", HTML.P({
      "class": "specialsection-text text-large text-weight-thin section-text margin-top-little"
    }, Blaze.View("lookup:firstName", function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }), " ", Blaze.View("lookup:lastName", function() {
      return Spacebars.mustache(view.lookup("lastName"));
    })), "\n                    ", HTML.P({
      "class": "specialsection-text text-weight-thin section-text text text-italic margin-top-narrower"
    }, Blaze.View("lookup:functionInGroup", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("functionInGroup")));
    })), "\n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "specialsection section"
  }, "\n            ", HTML.DIV({
    "class": "section-title"
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.P({
    "class": "section-heading-paragraph"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "OrgAusschuesseTitle");
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", HTML.DIV({
    "class": "col-md-6 section-column"
  }, "\n                    ", HTML.DIV({
    "class": "heading-small"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "OrgProjektausschussTitle");
  })), "\n                    ", HTML.P({
    "class": "text text-weight-thin"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "OrgProjektausschussDescription"));
  })), "\n                "), "\n                ", HTML.DIV({
    "class": "col-md-6 section-column"
  }, "\n                    ", HTML.DIV({
    "class": "heading-small"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "OrgOeffentlichkeitsausschussTitle");
  })), "\n                    ", HTML.P({
    "class": "text text-weight-thin"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "OrgOeffentlichkeitsausschussDescription"));
  })), "\n                "), "\n            "), "\n        ") ];
}));

})();
