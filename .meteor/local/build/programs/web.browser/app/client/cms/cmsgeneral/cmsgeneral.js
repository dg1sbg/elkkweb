(function(){Template.cmsgeneral.helpers({
	
	uploadSatzungCallbacks: function() {
		
		return {
			
			finished: function(index, fileInfo, context) {
				
				General.update(General.findOne({name: "Satzung"})._id, {$set: {value: fileInfo.url}});
				
			}
			
		}
		
		
	},
	uploadMitgliedsantragCallbacks: function() {
		
		return {
			
			finished: function(index, fileInfo, context) {
				
				General.update(General.findOne({name: "Mitgliedsantrag"})._id, {$set: {value: fileInfo.url}});
				
			}
			
		}
		
	},
	uploadPatenschaftsantragCallbacks: function() {
		
		return {
			
			finished: function(index, fileInfo, context) {
				
				General.update(General.findOne({name: "Patenschaftsantrag"})._id, {$set: {value: fileInfo.url}});
				
			}
			
		}
		
		
	}
	
});

})();
