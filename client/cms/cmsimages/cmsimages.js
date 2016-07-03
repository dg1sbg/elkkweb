Template.cmsimages.helpers({
	
	uploadImageCallbacks: function() {
		
		return {
			
			finished: function(index, fileInfo, context) {
				
				Images.insert({
					
					album: $('#imageuploadalbumname').val(),
					date: new Date(),
					url: fileInfo.url
					
				});
				
			}
			
		}
		
		
	},
	
	albums: function() {
		
		return Albums.find({}, {sort: {order: 1}});
		
	},
	
	images: function(albumName) {
		
		return Images.find({album: albumName});
		
	}
});

Template.cmsimages.events({
	
	"click #addAlbum": function(event, template) {
		
		event.preventDefault();
		
		Albums.insert({
			
			name: $('#addAlbumName').val(),
			order: $('#addAlbumOrder').val()
			
		});
		
	}
	
	
});