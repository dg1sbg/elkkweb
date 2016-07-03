(function(){Meteor.publish('pages', function() {
	
	return Pages.find();
	
});

Meteor.publish('texts', function() {
	
	return Texts.find();
	
});

Meteor.publish('news', function() {
	
	return News.find();
	
});

Meteor.publish('events', function() {
	
	return Events.find();
	
});

Meteor.publish('persons', function() {
	
	return Persons.find();
	
});

Meteor.publish('addresses', function() {
	
	return Addresses.find();
	
});

Meteor.publish('rundbriefe', function() {
	
	return Rundbriefe.find();
	
});

Meteor.publish('images', function() {
	
	return Images.find();
	
});

Meteor.publish('albums', function() {
	
	return Albums.find();
	
});

Meteor.publish('general', function() {
	
	return General.find();
	
});

Pages.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Texts.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

News.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Events.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Persons.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Addresses.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Rundbriefe.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Images.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

Albums.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

General.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    return userId;
  },
  remove: function (userId, doc) {
    return userId;
  }
});

})();
