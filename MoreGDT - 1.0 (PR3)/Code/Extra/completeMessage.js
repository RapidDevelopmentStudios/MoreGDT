var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "completeMessage",
	date: "30/12/4",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "You've come to the end of Game Dev Tycoon, and to make it even better you've played it with MoreGDT installed! I appreciate your interest in my work and hope that you liked it as much as I liked developing it, be sure to check back in the future to see what new and amazing features get implemented in each update.",
	        image : RDSLogo,
			buttonText: "Cool :)",
	        
	    })
	}
})