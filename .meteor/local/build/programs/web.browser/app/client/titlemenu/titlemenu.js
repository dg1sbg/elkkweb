(function(){Template.titlemenu.helpers({
	
	"menuisopen": function() {
		
		var menuisopen = Session.get("menuisopen");
		
		if (!menuisopen) {
			
			return false;
			
		}
		
		return true;
		
	}
	
	
});

Template.titlemenu.events({
	
	"click #togglemenu": function(event, template) {
		
		event.preventDefault();
		
		console.log("toggling menu");
		
		var menuisopen = Session.get('menuisopen');
		
		if (!menuisopen) {
			
			Session.set("menuisopen", true);
			
		}
		
		else {
			
			Session.set("menuisopen", false);
			
		}
		
	}
	
});

})();
