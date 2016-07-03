(function(){
Template.__checkName("imagearchive");
Template["imagearchive"] = new Template("Template.imagearchive", (function() {
  var view = this;
  return [ HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n"), "\n    ", HTML.DIV({
    "class": "imagegallery-singleview-overlay",
    id: "imagegallery-singleview-overlay",
    style: "visibility: hidden"
  }, "\n            ", HTML.DIV({
    "class": "imagegallery-singleview background-white"
  }, "\n                ", HTML.Raw('<section class="imagegallery-singleview-albumtitle heading-medium background-gray heading-no-margin-bottom green-elkk">\n                    <p class="imagegallery-singleview-albumtitle-paragraph">Eröffnungsfeier Projekthaus Januar 2015</p>\n                    <div class="imagegallery-close"></div>\n                </section>'), "\n                ", HTML.SECTION({
    "class": "imagegallery-singleview-albumnav background-gray"
  }, "\n                    \n                    ", HTML.DIV({
    "class": "albumnav-prev"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("prevalbum"));
  }, function() {
    return [ "\n                        ", HTML.IMG({
      id: "#prevalbum",
      src: "iconmonstr-arrow-25-icon-256%20Kopie.png",
      width: "30px",
      "class": "albumnav-prev",
      height: "30px"
    }), "\n                        ", HTML.P({
      "class": "text text-weight-thin"
    }, "Vorheriges Album"), "\n                        " ];
  }), "\n                    "), "\n                    \n                    \n                    ", HTML.DIV({
    "class": "albumnav-next"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("nextalbum"));
  }, function() {
    return [ "\n                        ", HTML.IMG({
      id: "#nextalbum",
      src: "iconmonstr-arrow-25-icon-256.png",
      width: "30px",
      "class": "albumnav-next",
      height: "30px"
    }), "\n                        ", HTML.P({
      "class": "text text-weight-thin"
    }, "Nächstes Album"), "\n                        " ];
  }), "\n                    "), "\n                    \n                "), "\n                ", HTML.SECTION({
    "class": "imagegallery-singleview-image",
    style: function() {
      return [ "background-image: url(", Spacebars.mustache(view.lookup("selectedimage")), ")" ];
    }
  }), "\n                ", HTML.SECTION({
    "class": "image-gallery-singleview-imagenav"
  }, "\n                    ", HTML.DIV({
    "class": "imagenav-prev"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("previmage"));
  }, function() {
    return [ "\n                        ", HTML.IMG({
      id: "#previmage",
      src: "iconmonstr-arrow-25-icon-256%20Kopie.png",
      width: "30px",
      height: "30px",
      "class": "imagenav-prev"
    }), "\n                        ", HTML.P({
      "class": "text text-weight-thin"
    }, "Vorheriges Bild"), "\n                        " ];
  }), "\n                    "), "\n                    ", HTML.DIV({
    "class": "imagenav-next"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("nextimage"));
  }, function() {
    return [ "\n                        ", HTML.IMG({
      id: "#nextimage",
      src: "iconmonstr-arrow-25-icon-256.png",
      width: "30px",
      height: "30px",
      "class": "imagenav-next"
    }), "\n                        ", HTML.P({
      "class": "text text-weight-thin"
    }, "Nächstes Bild"), "\n                        " ];
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n	", HTML.SECTION("\n           ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n    "), HTML.Raw('\n        <section class="titlesection-special picture-streetkids">\n</section>\n        '), HTML.SECTION({
    "class": "margin-top-more margin-bottom-more"
  }, "\n            ", HTML.Raw('<div class="">\n                <div class="container section-heading">\n                    <div class="col-md-12">\n                        <p class="section-heading-paragraph heading-small">Bildergalerie</p>\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n				 ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("albums"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "col-md-12 margin-top-more"
    }, "\n                    ", HTML.P({
      "class": "heading-medium text-weight-thin heading-no-margin-bottom background-gray"
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n                "), "\n                ", Blaze.Each(function() {
      return Spacebars.dataMustache(view.lookup("images"), view.lookup("name"));
    }, function() {
      return [ "\n                ", HTML.DIV({
        "class": "section-column col-md-3 imagegallery-container"
      }, "\n                    ", HTML.DIV({
        id: function() {
          return Spacebars.mustache(view.lookup("url"));
        },
        "class": "imagegallery-image imagegallery-bg",
        style: function() {
          return [ "background-image: url(", Spacebars.mustache(view.lookup("url")), ")" ];
        }
      }, "\n                        ", HTML.DIV({
        "class": "imagegallery-image-overlay",
        "data-pg-collapsed": ""
      }, "\n                            ", HTML.IMG({
        src: "iconmonstr-fullscreen-icon-256.png",
        "class": "imagegallery-image-overlay-image"
      }), "\n                        "), "\n                    "), "    \n                "), "\n                " ];
    }), "\n                " ];
  }), "\n            "), "\n        ") ];
}));

})();
