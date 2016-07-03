Template.home.helpers({
	
	"news_kenya": function() {
		
		if (!News.find()) {
			
			return;
			
		}
		
		var TempNewsKenya = new Mongo.Collection(null);
		
		var months = {
			0: "JAN",
			1: "FEB",
			2: "MÄR",
			3: "APR",
			4: "MAI",
			5: "JUN",
			6: "JUL",
			7: "AUG",
			8: "SEP",
			9: "OKT",
			10: "NOV",
			11: "DEZ"
		};
		
		News.find({section: "ken"}).forEach(function (news) {
			
			news.month = months[news.date.getMonth()];
			news.day = news.date.getDate();
			TempNewsKenya.insert(news);
			
		});
		return TempNewsKenya.find({}, {sort: {date: -1}});
		
	},
	"news_germany": function() {
		
		if (!News.find()) {
			
			return;
			
		}
		
		var TempNewsGermany = new Mongo.Collection(null);
		
		var months = {
			0: "JAN",
			1: "FEB",
			2: "MÄR",
			3: "APR",
			4: "MAI",
			5: "JUN",
			6: "JUL",
			7: "AUG",
			8: "SEP",
			9: "OKT",
			10: "NOV",
			11: "DEZ"
		};
		
		News.find({section: "ger"}).forEach(function (news) {
			
			news.month = months[news.date.getMonth()];
			news.day = news.date.getDate();
			TempNewsGermany.insert(news);
			
		});
		return TempNewsGermany.find({}, {sort: {date: -1}});
		
	},
	"featured_news": function() {
		
		if (!News.find()) {
			
			return;
			
		}
		
		return News.find({featured: true}, {sort: {date: -1}, limit: 2});
	
	},
	'events': function() {
		
		if (!Events.find()) {
			
			return;
			
		}
		
		var TempEvents = new Mongo.Collection(null);
		
		var months = {
			0: "JAN",
			1: "FEB",
			2: "MÄR",
			3: "APR",
			4: "MAI",
			5: "JUN",
			6: "JUL",
			7: "AUG",
			8: "SEP",
			9: "OKT",
			10: "NOV",
			11: "DEZ"
		};
		
		Events.find().forEach(function (event) {
			
			console.log("Found event");
			
			if (event.date.getFullYear() > new Date().getFullYear()) {
				
				console.log("YEAR GREATER CURRENT YEAR");
				
				console.log("Event is in future");
				event.month = months[event.date.getMonth()];
				event.day = event.date.getDate();
				TempEvents.insert(event);
				
			}
			
			else if (event.date.getFullYear() == new Date().getFullYear()) {
				
				console.log("YEAR EQUALS CURRENT YEAR");
				
				if (event.date.getMonth() > new Date().getMonth()) {
					
					console.log("MONTH GREATER CURRENT MONTH");
					
					console.log("Event is in future");
				event.month = months[event.date.getMonth()];
				event.day = event.date.getDate();
				TempEvents.insert(event);
					
				}
				
				else if (event.date.getMonth() == new Date().getMonth()) {
					
					console.log("MONTH EQUALS CURRENT MONTH");
					
					if (event.date.getDate() >= new Date().getDate()) {
						
						console.log("DAY GREATER OR EQUAL TO CURRENT DAY");
						
						console.log("Event is in future");
				event.month = months[event.date.getMonth()];
				event.day = event.date.getDate();
				TempEvents.insert(event);
						
					}
					
				}
				
			}
				
			
		});
		
		console.log(TempEvents.find().fetch());
		
		return TempEvents.find({}, {sort: {date: 1}});
		
	}
	
});

