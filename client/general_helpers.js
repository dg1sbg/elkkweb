Template.registerHelper('getText', function(textName) {
	
	var text = Texts.findOne({name: textName});
	
	if (text) {
		
		return text.value;
		
	}
	
});

Template.registerHelper('getCurrentYear', function() {
	
	return new Date().getFullYear();
	
});

Template.registerHelper('checkIfNotEmpty', function(collection) {
	
	return collection.fetch().length != 0;
	
});

Template.registerHelper('checkIfNotEmptyObject', function(object) {
	
	console.log("Checking if object is not empty");
	
	for (var key in object) {
	
		return true;
		
	}
	
	return false;
	
});

Template.registerHelper('getAddress', function(name) {
	
	return Addresses.findOne({title: name});
	
});

Template.registerHelper('Satzung', function() {
	
	return General.findOne({name: "Satzung"}).value;
	
});

Template.registerHelper('Mitgliedsantrag', function() {
	
	return General.findOne({name: "Mitgliedsantrag"}).value;
	
});

Template.registerHelper('Patenschaftsantrag', function() {
	
	return General.findOne({name: "Patenschaftsantrag"}).value;
	
});

Template.registerHelper('Rundbrief', function() {
	
	return General.findOne({name: "Rundbrief"}).value;
	
});

Template.registerHelper('getAge', function(dob) {

    var today = new Date();
    var birthDate = dob;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
	
});