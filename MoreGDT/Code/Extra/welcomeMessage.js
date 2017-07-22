var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "Thank you for installing MoreGDT. \n Current Version - 0.3 Beta 2 \n Information about MoreGDT can be found within the helpbook",
	        image : RDSLogo,
			buttonText: "Cool! :)",
	        
	    })
	}
})