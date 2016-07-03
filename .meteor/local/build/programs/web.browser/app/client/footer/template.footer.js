(function(){
Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return HTML.SECTION({
    "class": "footer"
  }, "\n		", HTML.DIV({
    "class": "container"
  }, "\n			", HTML.DIV({
    "class": "col-md-12 footerline text"
  }, "\n				", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("Satzung"));
    },
    "class": "footerlink"
  }, "Satzung"), " |\n				", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("Rundbrief"));
    },
    "class": "footerlink"
  }, "Rundbrief"), " |\n				", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("Mitgliedsantrag"));
    },
    "class": "footerlink"
  }, "Mitgliedschaftsantrag"), " |\n				", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("Patenschaftsantrag"));
    },
    "class": "footerlink"
  }, "Patenschaftsantrag"), " |\n				", HTML.Raw('<a href="/Bildergalerie" class="footerlink">Bildergalerie</a>'), " |\n				", HTML.Raw('<a href="/Rundbriefarchiv" class="footerlink">Rundbriefarchiv</a>'), " \n			"), "\n			", HTML.DIV({
    "class": "col-md-12 footerline text"
  }, "\n				", HTML.Raw('<a href="/Impressum" class="footerlink">Impressum</a>'), " | © ", Blaze.View("lookup:getCurrentYear", function() {
    return Spacebars.mustache(view.lookup("getCurrentYear"));
  }), " Eldoret Kids Kenia e.V. - Alle Rechte vorbehalten.\n			"), "\n		"), "\n	");
}));

})();
