Template.imagearchive.helpers({
	
	albums: function() {
		
		return Albums.find({}, {sort: {order: 1}});
		
	},
	
	images: function(albumName) {
		
		return Images.find({album: albumName});
		
	},
	
	imageselected: function() {
		
		return Session.get("imageselected");
		
	},
	
	selectedimage: function() {
		
		return Session.get('selectedimage');
		
	},
	nextalbum: function() {
		
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		var curalbumOrder = Albums.findOne({name: thisalbum}).order;
		
		var nextalbum = {};
		var curAlbumFound = false;
		var nextalbumFound = false;
		Albums.find({}, {order: 1}).forEach(function(album) {
			
			if (curAlbumFound && !nextalbumFound) {
				
				nextalbum = album;
				nextalbumFound = true;
				
			}
			
			if (album.order == curalbumOrder && !curAlbumFound) {
				
				curAlbumFound = true;
				
			}
			
		});
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image.album == nextalbum.name && !nextimagefound) {
				nextimage = image;
				nextimagefound = true;
			}
			
		});
		
		if (nextimage.url != null) {
			
			return true;
			
		}
		
		else {
			
			return false;
			
		}
		
	},
	prevalbum: function() {
		
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		var curalbumOrder = Albums.findOne({name: thisalbum}).order;
		
		var nextalbum = {};
		var curAlbumFound = false;
		Albums.find({}, {order: 1}).forEach(function(album) {
			
			if (album.order == curalbumOrder && !curAlbumFound) {
				
				curAlbumFound = true;
				
			}
			
			if (!curAlbumFound) {
				
				nextalbum = album;
				
			}
			
		});
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image.album == nextalbum.name && !nextimagefound) {
				nextimage = image;
				nextimagefound = true;
			}
			
		});
		
		if (nextimage.url != null) {
			
			return true;
			
		}
		
		else {
			
			return false;
			
		}
		
	},
	nextimage: function() {
		
		console.log("checking for next image");
		
		var thisimageid = Images.findOne({url: Session.get('selectedimage')})._id;
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		
		var nextimage = {};
		var nextimagefound = false;
		var found = false;
		
		Images.find().forEach(function(image) {
			
			console.log("Checking image");
			
			if (nextimagefound && !found) {
				
				console.log("nextimagefound and not found");
				
				nextimage = image;
				found = true;
				
			}
			
			if (image._id == thisimageid && image.album == thisalbum && !nextimagefound) {
				
				console.log("nextimagefound");
				nextimagefound = true;
			}
			
		});
		
		if (nextimage.url != null) {
			
			return true;
			
		}
		
		else {
			
			return false;
			
		}
	},
	previmage: function() {
		
		var thisimageid = Images.findOne({url: Session.get('selectedimage')})._id;
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image._id == thisimageid && image.album == thisalbum && !nextimagefound) {
		
				nextimagefound = true;
			}
			
			if (!nextimagefound) {
				
				nextimage = image;
				
			}
			
		});
		
		if (nextimage.url != null) {
			
			return true;
			
		}
		
		else {
			
			return false;
			
		}
		
	}

});

Template.imagearchive.onRendered(function() {
	
	$('.imagegallery-singleview').css('left', (($(window).width() / 2) - $('.imagegallery-singleview').width() / 2));
	$(window).resize(function() {
		
		$('.imagegallery-singleview').css('left', ((document.width / 2) - $('.imagegallery-singleview').width() / 2));
		
	});
	
});

Template.imagearchive.events({
	
	'click .imagegallery-bg': function(event, template) {
		
		Session.set('selectedimage', event.currentTarget.id);
		console.log("selectedimage", Session.get('selectedimage'));
		Session.set('imageselected', true);
		$('#imagegallery-singleview-overlay').css('visibility', 'visible');
		
	},
	
	'click #prevalbum': function(event, template) {
		
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		var curalbumOrder = Albums.findOne({name: thisalbum}).order;
		
		var nextalbum = {};
		var curAlbumFound = false;
		Albums.find({}, {order: 1}).forEach(function(album) {
			
			if (album.order == curalbumOrder && !curAlbumFound) {
				
				curAlbumFound = true;
				
			}
			
			if (!curAlbumFound) {
				
				nextalbum = album;
				
			}
			
		});
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image.album == nextalbum.name && !nextimagefound) {
				nextimage = image;
				nextimagefound = true;
			}
			
		});
		
		Session.set('selectedimage', nextimage.url);
	},
	'click #nextalbum': function(event, template) {
		
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		var curalbumOrder = Albums.findOne({name: thisalbum}).order;
		
		var nextalbum = {};
		var curAlbumFound = false;
		var nextalbumFound = false;
		Albums.find({}, {order: 1}).forEach(function(album) {
			
			if (curAlbumFound && !nextalbumFound) {
				
				nextalbum = album;
				nextalbumFound = true;
				
			}
			
			if (album.order == curalbumOrder && !curAlbumFound) {
				
				curAlbumFound = true;
				
			}
			
		});
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image.album == nextalbum.name && !nextimagefound) {
				nextimage = image;
				nextimagefound = true;
			}
			
		});
		
		Session.set('selectedimage', nextimage.url);
		
	},
	'click #previmage': function(event, template) {
		
		var thisimageid = Images.findOne({url: Session.get('selectedimage')})._id;
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		
		var nextimage = {};
		var nextimagefound = false;
		
		Images.find().forEach(function(image) {
			
			if (image._id == thisimageid && image.album == thisalbum && !nextimagefound) {
		
				nextimagefound = true;
			}
			
			if (!nextimagefound) {
				
				nextimage = image;
				
			}
			
		});
		
		Session.set('selectedimage', nextimage.url);
		
	},
	'click #nextimage': function(event, template) {
		
		var thisimageid = Images.findOne({url: Session.get('selectedimage')})._id;
		var thisalbum = Images.findOne({url: Session.get('selectedimage')}).album;
		
		var nextimage = {};
		var nextimagefound = false;
		var found = false;
		
		Images.find().forEach(function(image) {
			
			if (nextimagefound && !found) {
				
				nextimage = image;
				found = true;
				
			}
			
			if (image._id == thisimageid && image.album == thisalbum && !nextimagefound) {
		
				nextimagefound = true;
			}
			
		});
		
		Session.set('selectedimage', nextimage.url);
		
	},
	'click .imagegallery-close': function(event, template) {
		
		Session.set('imageselected', false);
		$('#imagegallery-singleview-overlay').css('visibility', 'hidden');
		
	}
	
	
});