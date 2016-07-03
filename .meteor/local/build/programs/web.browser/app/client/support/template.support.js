(function(){
Template.__checkName("support");
Template["support"] = new Template("Template.support", (function() {
  var view = this;
  return [ HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n"), "\n	", HTML.SECTION("\n           ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), HTML.Raw('\n	<section class="titlesection-special picture-support">\n</section>\n        '), HTML.SECTION({
    "class": "support-submenu background-gray"
  }, "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                 ", HTML.A({
    href: "/Unterstuetzung/Spenden"
  }, HTML.DIV({
    "class": "col-md-3 support-submenu-link text col-xs-6 col-sm-3"
  }, "\n                   ", Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportDonateTitle");
  }), "\n                ")), " \n                ", HTML.A({
    href: "/Unterstuetzung/Patenschaft"
  }, HTML.DIV({
    "class": "col-md-3 support-submenu-link text col-xs-6 col-sm-3"
  }, "\n                    ", Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportPatenschaftTitle");
  }), "\n                ")), " \n                ", HTML.A({
    href: "/Unterstuetzung/Mitgliedschaft"
  }, HTML.DIV({
    "class": "col-md-3 support-submenu-link text col-xs-6 col-sm-3"
  }, "\n                    ", Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportMitgliedTitle");
  }), " \n                ")), "\n                 ", HTML.A({
    href: "/Unterstuetzung/Mitarbeit"
  }, HTML.DIV({
    "class": "col-md-3 support-submenu-link text col-xs-6 col-sm-3"
  }, "\n                   ", Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportMitarbeitTitle");
  }), "\n                ")), " \n            "), "\n        "), "\n        ", HTML.SECTION({
    id: "Spenden",
    "class": "margin-bottom-more margin-top-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "heading-small green-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportDonateTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "section-column col-md-8"
  }, " \n                   ", Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "SupportDonateDescription1"));
  }), "\n                    ", Spacebars.include(view.lookupTemplate("donatebutton")), "\n                    ", Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "SupportDonateDescription2"));
  }), "\n                "), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Spendenkonto");
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-4 section-column background-gray"
    }, "\n                    ", HTML.P({
      "class": "section-heading"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), " \n                    ", HTML.P({
      "class": "section-text text-weight-bold"
    }, Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    })), " \n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    id: "Patenschaft",
    "class": "margin-bottom-more margin-top-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "heading-small green-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportPatenschaftTitle");
  })), " \n                    \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "section-column col-md-8"
  }, " \n                    ", HTML.P({
    "class": "section-text text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "SupportPatenschaftDescription"));
  })), "\n                    ", Spacebars.include(view.lookupTemplate("patenschaftsantragbutton")), "\n                "), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Kontaktadresse");
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-4 section-column background-gray"
    }, "\n                    ", HTML.P({
      "class": "section-heading"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), " \n                    ", HTML.P({
      "class": "section-text text-weight-bold"
    }, Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    })), " \n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    id: "Mitgliedschaft",
    "class": "margin-bottom-more margin-top-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "heading-small green-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportMitgliedTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "section-column col-md-8"
  }, " \n                    ", HTML.P({
    "class": "section-text text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "SupportMitgliedDescription"));
  })), "\n                    ", Spacebars.include(view.lookupTemplate("mitgliedsantragbutton")), "\n                "), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Mitgliedsbeiträge");
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-4 section-column background-gray"
    }, "\n                    ", HTML.P({
      "class": "section-heading"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), " \n                    ", HTML.P({
      "class": "section-text text-weight-bold"
    }, "\n                     ", Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    }), "\n                ")), "\n                " ];
  }), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Kontaktadresse");
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-4 section-column background-gray"
    }, "\n                    ", HTML.P({
      "class": "section-heading"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), " \n                    ", HTML.P({
      "class": "section-text text-weight-bold"
    }, "\n", Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    })), " \n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    id: "Mitarbeit",
    "class": "margin-bottom-more margin-top-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "heading-small green-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "SupportMitarbeitTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "section-column col-md-8"
  }, " \n                    ", HTML.P({
    "class": "section-text text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "SupportMitarbeitDescription"));
  })), "\n                "), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getAddress"), "Weitere Informationen");
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-4 section-column background-gray"
    }, "\n                    ", HTML.P({
      "class": "section-heading"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), " \n                    ", HTML.P({
      "class": "section-text text-weight-bold"
    }, "\n                        ", Blaze.View("lookup:value", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));
    }), "\n                    "), " \n                "), "\n                " ];
  }), "\n            "), "\n        ") ];
}));

})();
