(function(){
Template.__checkName("project");
Template["project"] = new Template("Template.project", (function() {
  var view = this;
  return [ HTML.SECTION("\n            ", Spacebars.include(view.lookupTemplate("titlemenu")), "\n        "), HTML.Raw('\n        <section class="titlesection-special picture-streetkids">\n</section>\n        '), HTML.SECTION({
    "class": "margin-top-more margin-bottom-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "section-heading-paragraph heading-small"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "ProjectStreetKidsTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12 section-column"
  }, " \n                    ", HTML.P({
    "class": "section-text-special text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ProjectStreetKidsDescription"));
  })), " \n                "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "titlesection-special picture-bizi margin-top-more background-gray margin-bottom-lot"
  }, "\n            ", HTML.DIV({
    "class": "container fullheight"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                    ", HTML.DIV({
    "class": ""
  }, "\n                        ", HTML.DIV({
    "class": "section-heading"
  }, "\n                            ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                                ", HTML.P({
    "class": "section-heading-paragraph heading-small black-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "ProjectBiziTitle");
  })), " \n                            "), "\n                        "), "\n                    "), "                     \n                "), "\n                ", HTML.DIV({
    "class": "col-md-12 margin-top-little"
  }, "\n                    ", HTML.Raw('<img src="bizi.jpg" class="bizi" align="left" height="350px">'), "\n                    ", HTML.P({
    "class": "section-text text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ProjectBiziDescription1"));
  }), " ", Blaze.View("lookup:getAge", function() {
    return Spacebars.mustache(view.lookup("getAge"), Spacebars.dot(view.lookup("bizi"), "dob"));
  }), " ", Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ProjectBiziDescription2"));
  })), " \n                "), "\n            "), "\n        "), HTML.Raw('\n        <section class="picture-project titlesection-special"></section>\n        '), HTML.SECTION({
    "class": "margin-top-more margin-bottom-more"
  }, "\n            ", HTML.DIV({
    "class": ""
  }, "\n                ", HTML.DIV({
    "class": "container section-heading"
  }, "\n                    ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                        ", HTML.P({
    "class": "section-heading-paragraph heading-small green-elkk"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.mustache(view.lookup("getText"), "ProjectBMCTitle");
  })), " \n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "container"
  }, "\n                ", HTML.DIV({
    "class": "col-md-12 section-column"
  }, " \n                    ", HTML.P({
    "class": "section-text-special text"
  }, Blaze.View("lookup:getText", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getText"), "ProjectBMCDescription"));
  })), " \n                "), "\n            "), "\n        "), "\n        ", HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-69822465-1', 'auto');\n  ga('send', 'pageview');\n\n") ];
}));

})();
