Template.mitgliedsantragbutton.events({
	
	'click .btn': function(event, template) {
		
		event.preventDefault();
		
		window.location.href = General.findOne({name: "Mitgliedsantrag"}).value;
		
	}
	
});