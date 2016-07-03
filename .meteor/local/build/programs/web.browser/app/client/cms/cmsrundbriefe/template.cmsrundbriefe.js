(function(){
Template.__checkName("cmsrundbriefe");
Template["cmsrundbriefe"] = new Template("Template.cmsrundbriefe", (function() {
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
    }, "Rundbriefe"), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "container"
    }, "\n                ", HTML.DIV({
      "class": "col-md-12"
    }, " \n                    ", HTML.P({
      "class": "heading-medium"
    }, "Rundbrief hinzufügen"), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput88"
    }, "Datei"), "\n                         ", Blaze._TemplateWith(function() {
      return {
        fileTypes: Spacebars.call(".pdf"),
        multiple: Spacebars.call(false),
        callbacks: Spacebars.call(view.lookup("uploadRundbriefCallbacks"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("upload_bootstrap"));
    }), "\n                    "), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput88"
    }, "Name"), "\n                        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "rundbriefuploadname",
      value: ""
    }), "\n                    "), "\n                    ", HTML.DIV({
      "class": "form-group"
    }, " \n                        ", HTML.LABEL({
      "class": "control-label",
      "for": "formInput88"
    }, "Jahr"), "\n                        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "rundbriefuploadyear",
      value: ""
    }), "\n                    "), "\n                    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-default"
    }, "Hinzufügen"), "\n                "), "\n                ", Blaze.Each(function() {
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
    }), "\n            "), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        " ];
  });
}));

})();
