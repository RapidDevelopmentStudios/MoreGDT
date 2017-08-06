var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
			text: "Thank you for installing MoreGDT. \n Current Version - 1.0 Pre-Release 1 \n Information about MoreGDT can be found within the helpbook",
					
			text: "Thanks for installing MoreGDT, You're currently running version 1.0 Pre-release 2. You can find more information about this mod in the helpbook which you will find on the menu when you click the screen. Good luck and have fun!",
	        image: RDSLogo,
			buttonText: "Cool, thanks!",
	        
	    })
	}
})