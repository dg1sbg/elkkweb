(function(){
Meteor.startup(function() { $('body').attr({"class":"body black-elkk background-white"}); });

Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

})();
