var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "Thank you for installing MoreGDT. \n Current Version - 1.0 Pre-Release 1 \n Information about MoreGDT can be found within the helpbook",
	        image : RDSLogo,
			buttonText: "OK",
	        
	    })
	}
})