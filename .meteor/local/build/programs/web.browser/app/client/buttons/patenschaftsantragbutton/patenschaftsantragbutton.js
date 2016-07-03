(function(){Template.patenschaftsantragbutton.events({
	
	'click .btn': function(event, template) {
		
		event.preventDefault();
		
		window.location.href = General.findOne({name: "Patenschaftsantrag"}).value;
		
	}
	
});

})();
