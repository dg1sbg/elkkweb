(function(){Template.mehrerfahrenbutton.events({
	
	'click .btn': function(event, template) {
		
		event.preventDefault();
		
		Router.go('/Projekt');
		
	}
	
});

})();
