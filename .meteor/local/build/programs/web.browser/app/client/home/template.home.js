(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n"), HTML.Raw("\n  <!-- TEST -->\n	"), HTML.SECTION({
    "class": "titlesection titlepicture-home"
  }, "\n            ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "titleslogan col-md-5 heading-medium col-sm-5"
  }, "\n                    ", HTML.SPAN({
    "class": "text-weight-bold"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeTitleSlogan");
  })), "\n                    ", HTML.Raw("<br>"), "\n                    ", Spacebars.include(view.lookupTemplate("mehrerfahrenbutton")), "\n                "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "section-titleslogan"
  }, "\n            ", HTML.DIV({
    "class": "container container-titleslogan"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                    ", HTML.SPAN({
    "class": "text-weight-bold"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeTitleSlogan");
  })), "\n                    ", HTML.Raw("<br>"), "\n                    ", HTML.A({
    href: "/Projekt"
  }, HTML.BUTTON({
    "class": "btn bt-special text-weight-bold"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeMehrErfahrenButton");
  }))), "\n                "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "specialsection section quicknav"
  }, "\n            ", HTML.DIV({
    "class": "container fullheight nopadding"
  }, "\n                ", HTML.DIV({
    "class": "section-column quicknav-donateonline col-md-8 home-firstsection-margin"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                        ", HTML.P({
    "class": "section-heading"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeQuicknavHeading1");
  })), "\n                        ", HTML.P({
    "class": "section-text text quicknav-text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "HomeQuicknavText1"));
  })), "\n                        ", Spacebars.include(view.lookupTemplate("rundbriefbutton")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                        ", HTML.P({
    "class": "section-heading"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeQuicknavHeading2");
  })), "\n                        ", HTML.P({
    "class": "section-text text quicknav-text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "HomeQuicknavText2"));
  })), "\n                        ", Spacebars.include(view.lookupTemplate("patenschaftsantragbutton")), "\n                    "), "\n                "), "\n                ", HTML.DIV({
    "class": "section-column col-md-4 quicknav-donateonline background-gray home-firstsection-margin"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "section-heading"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeQuicknavHeading3");
  })), "\n                        ", HTML.P({
    "class": "section-text text quicknav-text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "HomeQuicknavText3"));
  })), "\n                            ", Spacebars.include(view.lookupTemplate("donatebutton")), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "specialsection section background-gray"
  }, "\n            ", HTML.DIV({
    "class": "section-title"
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.P({
    "class": "section-heading-paragraph"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeAktuellesSectionTitle");
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("featured_news"));
  }, function() {
    return [ "\n                    ", Spacebars.include(view.lookupTemplate("featurednews")), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("checkIfNotEmpty"), view.lookup("events"));
  }, function() {
    return [ "\n        ", HTML.SECTION({
      "class": "featuredeventsection section"
    }, "\n            ", HTML.DIV({
      "class": "section-title"
    }, "\n                ", HTML.DIV({
      "class": "container section-heading"
    }, "\n                    ", HTML.P({
      "class": "section-heading-paragraph"
    }, Blaze.View("lookup:getText", function() {
      return Spacebars.mustache(view.lookup("getText"), "HomeVeranstaltungenSectionTitle");
    })), "\n                "), "\n            "), "\n            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("events"));
    }, function() {
      return [ "\n                ", Spacebars.include(view.lookupTemplate("nexteventtmpl")), "\n            " ];
    }), "\n        "), "\n        " ];
  }), "\n        ", HTML.SECTION({
    "class": "featuredeventsection section"
  }, "\n            ", HTML.DIV({
    "class": "section-title"
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.P({
    "class": "section-heading-paragraph"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "HomeNeuigkeitenSectionTitle");
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", HTML.DIV({
    "class": "fullheight section-column col-md-6"
  }, "\n                    ", HTML.Raw('<p class="heading-medium">\n    Aus Kenia</p>'), "\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("checkIfNotEmpty"), view.lookup("news_kenya"));
  }, function() {
    return [ "\n                    ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("news_kenya"));
    }, function() {
      return [ "\n                        ", Spacebars.include(view.lookupTemplate("news")), "\n                    " ];
    }), "\n                    " ];
  }, function() {
    return [ "\n                    ", HTML.P({
      "class": "text"
    }, HTML.I("Keine Neuigkeiten")), "\n                    " ];
  }), "\n                "), "\n                ", HTML.DIV({
    "class": "fullheight section-column col-md-6"
  }, "\n                    ", HTML.Raw('<p class="heading-medium">\n    Aus Deutschland</p>'), "\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("checkIfNotEmpty"), view.lookup("news_germany"));
  }, function() {
    return [ "\n                    ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("news_germany"));
    }, function() {
      return [ "\n                        ", Spacebars.include(view.lookupTemplate("news")), "\n                    " ];
    }), "\n                    " ];
  }, function() {
    return [ "\n                    ", HTML.P({
      "class": "text"
    }, HTML.I("Keine Neuigkeiten")), "\n                    " ];
  }), "\n                "), "\n            "), "\n        ") ];
}));

})();
