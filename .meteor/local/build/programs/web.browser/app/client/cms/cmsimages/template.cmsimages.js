(function(){
Template.__checkName("cmsimages");
Template["cmsimages"] = new Template("Template.cmsimages", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n	 ", HTML.SECTION({
      "class": "titlesection"
    }, "\n            ", Spacebars.include(view.lookupTemplate("cmstitlemenu")), "\n        "), "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        ", HTML.SECTION({
      "class": "margin-top-more margin-bottom-more margin-top-lots"
    }, "\n            ", HTML.DIV("\n                ", HTML.DIV({
      "class": "container section-heading"
    }, "\n                    ", HTML.DIV({
      "class": "col-md-12"
    }, "\n                        ", HTML.P({
      "class": "section-heading-paragraph heading-small"
    }, "Bilder"), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "container"
    }, "\n                ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                    ", HTML.P("Bild hinzufügen"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Datei"), "\n                        ", Blaze._TemplateWith(function() {
      return {
        multiple: Spacebars.call(false),
        callbacks: Spacebars.call(view.lookup("uploadImageCallbacks"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("upload_bootstrap"));
    }), "\n                    "), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Album"), "\n                        ", HTML.SELECT({
      "class": "form-control",
      id: "imageuploadalbumname"
    }, " \n                            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("albums"));
    }, function() {
      return [ "\n                            ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("name"));
        }
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "                             \n                            " ];
    }), "                        \n                        "), "\n                    "), "\n                                       \n                "), "\n                ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                    ", HTML.P("Album hinzufügen"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Name"), "\n                        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "addAlbumName",
      value: ""
    }), "\n                    "), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Position\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "addAlbumOrder",
      value: ""
    }), "\n                    "), "\n                    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-default",
      id: "addAlbum"
    }, "Hinzufügen"), "                     \n                "), "\n                ", Blaze.Each(function() {
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
          "class": "imagegallery-image imagegallery-bg",
          style: function() {
            return [ "background-image: url(", Spacebars.mustache(view.lookup("url")), ")" ];
          }
        }, "\n"), "    \n                "), "\n                " ];
      }), "\n                " ];
    }), "\n            "), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        " ];
  });
}));

})();
