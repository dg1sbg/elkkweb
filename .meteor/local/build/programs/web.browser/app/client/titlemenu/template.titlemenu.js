(function(){
Template.__checkName("titlemenu");
Template["titlemenu"] = new Template("Template.titlemenu", (function() {
  var view = this;
  return [ HTML.NAV({
    "class": "navbar-fixed-top largemenu"
  }, "\n                ", HTML.DIV({
    "class": "container container-main"
  }, "\n                    ", HTML.DIV({
    "class": "col-sm-12 col-md-12 col-lg-12 col-xs-12 titlemenu"
  }, "\n                        ", HTML.Raw('<div class="fullheight center-inner-text col-md-2 col-xs-6 nomargin col-sm-1 logo-image">\n                            <img src="eldokids_logo.png" class="logo-image">                             \n                        </div>'), "\n                        ", HTML.DIV({
    "class": "col-md-10 col-xs-6 nomargin col-sm-11"
  }, "\n                                    \n                             ", HTML.NAV({
    role: "navigation",
    "class": "text"
  }, "\n                                    ", HTML.Raw('<a href="/" class="titlemenulink">\n                                    <div class="col-md-2 navitem background-white col-sm-2"> \n                                        Home\n    </div></a>'), "\n                                    ", HTML.Raw('<a href="/Verein" class="titlemenulink">\n                                    <div class="col-md-2 fullheight navitem background-white col-sm-2"> \n                                        Verein\n    </div></a>'), "\n                                    ", HTML.Raw('<a href="/Projekt" class="titlemenulink">\n                                    <div class="col-md-2 fullheight navitem background-white col-sm-2">Projekt</div></a>'), "\n                                    ", HTML.Raw('<a href="/Unterstuetzung" class="titlemenulink">\n                                    <div class="col-md-2 fullheight navitem background-white col-sm-2">Unterstützung</div></a>'), "\n                                    ", HTML.Raw('<a href="/Kontakt" class="titlemenulink">\n                                    <div class="col-md-2 fullheight navitem background-white col-sm-2"> \n                                        Kontakt\n    </div></a>'), "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("Rundbrief"));
    },
    "class": "titlemenulink"
  }, "\n                                    ", HTML.Raw('<div class="col-md-2 fullheight navitem background-white col-sm-2"> \n                                        Rundbrief\n    </div>')), "                               \n                                "), "    \n                                                         \n                        "), " \n                                      \n                    "), "\n                "), "\n            "), "\n	", HTML.NAV({
    "class": "navbar-fixed-top smallmenu"
  }, "\n                ", HTML.DIV({
    "class": "container container-main"
  }, "\n                    ", HTML.DIV({
    "class": "col-sm-12 col-md-12 col-lg-12 col-xs-12 titlemenu"
  }, "\n                        ", HTML.Raw('<div class="fullheight center-inner-text col-md-2 col-xs-6 nomargin col-sm-1 logo-image">\n                            <img src="eldokids_logo.png" class="logo-image">                             \n                        </div>'), "\n                        ", HTML.DIV({
    "class": "fullheight col-md-10 col-xs-6 nomargin col-sm-11"
  }, "\n                            ", HTML.Raw('<div class="fullheight div-hamburgernav div-hamburger">\n                                <a href="" id="togglemenu"><div class="col-xs-12 fullheight nav-hamburger"> \n                                </div></a>\n                            </div>'), "\n                            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("menuisopen"));
  }, function() {
    return [ "\n                            ", HTML.NAV({
      role: "navigation",
      "class": "text"
    }, "\n                                    ", HTML.A({
      href: "/",
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 navitem background-white col-sm-2"
    }, " \n                                        Home\n    ")), "\n                                    ", HTML.A({
      href: "/Verein",
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 fullheight navitem background-white col-sm-2"
    }, " \n                                        Verein\n    ")), "\n                                    ", HTML.A({
      href: "/Projekt",
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 fullheight navitem background-white col-sm-2"
    }, "Projekt")), "\n                                    ", HTML.A({
      href: "/Unterstuetzung",
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 fullheight navitem background-white col-sm-2"
    }, "Unterstützung")), "\n                                    ", HTML.A({
      href: "/Kontakt",
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 fullheight navitem background-white col-sm-2"
    }, " \n                                        Kontakt\n    ")), "\n                                    ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("Rundbrief"));
      },
      "class": "titlemenulink"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-2 fullheight navitem background-white col-sm-2"
    }, " \n                                        Rundbrief\n    ")), "                               \n                                "), "   \n                                " ];
  }), "                          \n                        "), "                         \n                    "), "\n                "), "\n            ") ];
}));

})();
