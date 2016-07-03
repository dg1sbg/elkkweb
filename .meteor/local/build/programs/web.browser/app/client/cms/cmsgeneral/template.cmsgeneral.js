(function(){
Template.__checkName("cmsgeneral");
Template["cmsgeneral"] = new Template("Template.cmsgeneral", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n	", HTML.SECTION({
      "class": "titlesection"
    }, "\n            ", Spacebars.include(view.lookupTemplate("cmstitlemenu")), "\n        "), "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        ", HTML.SECTION({
      "class": "margin-top-more margin-bottom-more margin-top-lots"
    }, "\n            ", HTML.DIV("\n                ", HTML.DIV({
      "class": "container section-heading"
    }, "\n                    ", HTML.DIV({
      "class": "col-md-12"
    }, "\n                        ", HTML.P({
      "class": "section-heading-paragraph heading-small"
    }, "Generelles"), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "container"
    }, "\n                ", HTML.DIV({
      "class": "col-md-12"
    }, "\n                    ", HTML.P("Neue Satzung"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Datei"), "\n                        ", Blaze._TemplateWith(function() {
      return {
        multiple: Spacebars.call(false),
        callbacks: Spacebars.call(view.lookup("uploadSatzungCallbacks"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("upload_bootstrap"));
    }), "\n                    "), "\n                                       \n                "), "\n				", HTML.DIV({
      "class": "col-md-12"
    }, "\n                    ", HTML.P("Mitgliedsantrag"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Datei"), "\n                        ", Blaze._TemplateWith(function() {
      return {
        multiple: Spacebars.call(false),
        callbacks: Spacebars.call(view.lookup("uploadMitgliedsantragCallbacks"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("upload_bootstrap"));
    }), "\n                    "), "\n                                       \n                "), "\n				", HTML.DIV({
      "class": "col-md-12"
    }, "\n                    ", HTML.P("Patenschaftsantrag"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput102"
    }, "Datei"), "\n                        ", Blaze._TemplateWith(function() {
      return {
        multiple: Spacebars.call(false),
        callbacks: Spacebars.call(view.lookup("uploadPatenschaftsantragCallbacks"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("upload_bootstrap"));
    }), "\n                    "), "\n                                       \n                "), "\n            "), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        " ];
  });
}));

})();
