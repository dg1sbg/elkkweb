(function(){Template.rundbriefbutton.events({
	
	'click .btn': function(event, template) {
		
		event.preventDefault();
		
		window.location.href = General.findOne({name: "Rundbrief"}).value;
		
	}
	
});

})();
