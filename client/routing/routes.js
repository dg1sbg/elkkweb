Router.configure({
		layoutTemplate: 'layout',
	  	notFoundTemplate: 'layout',
        loadingTemplate: 'layout'
    });
    
Router.route('/', function () {
        
    this.render('home');
    $('body,html').scrollTop(0);
        
});
    
Router.route('/Verein', function () {
        
    this.render('org');
    $('body,html').scrollTop(0);
	
});

Router.route('/Verein/Geschenkkarte', function () {
       
   	this.render('org');
   	Tracker.afterFlush(function() {
             
   		if ($("#Geschenkkarte").offset() != "undefined"){
               
   			$('body,html').scrollTop(($('#Geschenkkarte').offset().top) - 50);
                
 		}

    });
    $('body,html').scrollTop(($('#Geschenkkarte').offset().top) - 50);
        
});

Router.route('/Projekt', function () {
        
    this.render('project');
    $('body,html').scrollTop(0);
	
});

Router.route('/Unterstuetzung', function () {
        
    this.render('support');
    $('body,html').scrollTop(0);
	
});

Router.route('/Kontakt', function () {
        
    this.render('contact');
    $('body,html').scrollTop(0);
	
});

Router.route('/Impressum', function () {
        
    this.render('impressum');
    $('body,html').scrollTop(0);
	
});

Router.route('/Rundbriefarchiv', function() {
    
    this.render('rundbriefarchiv');
    $('body,html').scrollTop(0);
    
});

Router.route('/Bildergalerie', function() {
    
    this.render('imagearchive');
    $('body,html').scrollTop(0);
    
});

Router.route('/cms/Rundbriefe', function () {
        
    this.render('cmsrundbriefe');
    $('body,html').scrollTop(0);
	
});

Router.route('/cms/Bilder', function () {
        
    this.render('cmsimages');
    $('body,html').scrollTop(0);
	
});

Router.route('/cms/General', function () {
        
    this.render('cmsgeneral');
    $('body,html').scrollTop(0);
	
});

Router.route('/Unterstuetzung/Spenden', function () {
       
   	this.render('support');
   	Tracker.afterFlush(function() {
             
   		if ($("#Spenden").offset() != "undefined"){
               
   			$('body,html').scrollTop(($('#Spenden').offset().top) - 50);
                
 		}

    });
    $('body,html').scrollTop(($('#Spenden').offset().top) - 50);
        
});

Router.route('/Unterstuetzung/Patenschaft', function () {
       
   	this.render('support');
   	Tracker.afterFlush(function() {
             
   		if ($("#Patenschaft").offset() != "undefined"){
               
   			$('body,html').scrollTop(($('#Patenschaft').offset().top) - 50);
                
 		}

    });
    $('body,html').scrollTop(($('#Patenschaft').offset().top) - 50);
        
});

Router.route('/Unterstuetzung/Mitgliedschaft', function () {
       
   	this.render('support');
   	Tracker.afterFlush(function() {
             
   		if ($("#Mitgliedschaft").offset() != "undefined"){
               
   			$('body,html').scrollTop(($('#Mitgliedschaft').offset().top) - 50);
                
 		}

    });
    $('body,html').scrollTop(($('#Mitgliedschaft').offset().top) - 50);
        
});

Router.route('/Unterstuetzung/Mitarbeit', function () {
       
   	this.render('support');
   	Tracker.afterFlush(function() {
             
   		if ($("#Mitarbeit").offset() != "undefined"){
               
   			$('body,html').scrollTop(($('#Mitarbeit').offset().top) - 50);
                
 		}

    });
    $('body,html').scrollTop(($('#Mitarbeit').offset().top) - 50);
        
});

Router.route('/Rundbrief', function() {
    
    window.open(General.findOne({name: "Rundbrief"}).value,"_self");
    
});
   
Router.route('/Mitgliedsantrag', function() {
    
    window.open(General.findOne({name: "Mitgliedsantrag"}).value,"_self");
    
});

Router.route('/Patenschaftsantrag', function() {
    
    window.open(General.findOne({name: "Patenschaftsantrag"}).value,"_self");
    
});