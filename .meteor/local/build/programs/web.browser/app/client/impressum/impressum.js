(function(){Template.impressum.helpers({
	
	"vorstand": function() {
		
		return Persons.find({group: "Vorstand"});
		
	}
	
});

})();
