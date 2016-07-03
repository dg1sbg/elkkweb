(function(){Uploader.localisation = {
    browse: "Durchsuchen",
    cancelled: "Abgebrochen",
    remove: "Entfernen",
    upload: "Hochladen",
    done: "Erfolgeich",
    cancel: "Abbrechen"
}

Meteor.subscribe("pages");
Meteor.subscribe("texts");
Meteor.subscribe("news");
Meteor.subscribe("events");
Meteor.subscribe("persons");
Meteor.subscribe("addresses");
Meteor.subscribe("rundbriefe");
Meteor.subscribe("images");
Meteor.subscribe("albums");
Meteor.subscribe("general");

Session.set("menuisopen", true);

})();
