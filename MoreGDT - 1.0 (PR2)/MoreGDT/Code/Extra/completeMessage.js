var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "completeMessage",
	date: "30/12/4",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "Nice! You've completed the main part of Game Dev Tycoon with MoreGDT installed! If you liked this mod be sure to tell your friends and leave some comments on our Workshop page, all feedback is welcomed. Be sure to check back every so often to see the amazing new features that will be added in future releases. But for now, well done on completing the game.",
	        image : RDSLogo,
			buttonText: "Thanks!",
	        
	    })
	}
})