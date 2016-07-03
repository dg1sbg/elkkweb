(function(){Template.cmsrundbriefe.helpers({
	
	uploadRundbriefCallbacks: function() {
		
		return {
			
        	formData: function() { return { id: "232323", other: Session.get("ReactiveParam") } },
        	finished: function(index, fileInfo, context) { 
				
				Rundbriefe.insert({
					
					name: $('#rundbriefuploadname').val(),
					year: $('#rundbriefuploadyear').val(),
					date: new Date(),
					url: fileInfo.url
					
				});
				
				General.update(General.findOne({name: "Rundbrief"})._id, {$set: {value: fileInfo.url}});
				
			}
		}
		
	},
	
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
		
	},
	
	rundbriefToEdit: function() {
		
		return Sessions.get("rundbriefToEdit");
		
	}
	
});

})();
