Template.rundbriefarchiv.helpers({
	
	years: function() {
			
		var years = [];
		var yearvalues = [];
		
		Rundbriefe.find().forEach(function(rundbrief) {
			
			console.log("each rundbrief");
			console.log(parseInt(rundbrief.year));
			console.log(yearvalues);
			console.log($.inArray(parseInt(rundbrief.year), yearvalues));
			
			if ($.inArray(parseInt(rundbrief.year), yearvalues) == -1 && rundbrief.year) {
	
				years.push({value: rundbrief.year});
				yearvalues.push(parseInt(rundbrief.year));
			}
			
		});	
		
		years.sort(function(a, b) {
			
			return a.value - b.value;
			
		});
		
		return years;
			
	},
	
	rundbriefe: function(year) {
		
		return Rundbriefe.find({year: year});
		
	}
	
});