Template.project.helpers({
	"bizi": function() {
		return Persons.findOne({group: "Heimleitung", functionInGroup: "Heimleiterin"});
	}
});