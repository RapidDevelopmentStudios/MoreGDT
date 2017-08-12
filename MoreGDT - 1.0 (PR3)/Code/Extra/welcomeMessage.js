var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
			header: "MoreGDT",
			text: "Thanks for installing MoreGDT, during your playthrough of MoreGDT you'll see all sorts of different things including new platforms, new topics, new events and more! I hope you have fun and enjoy playing Game Dev Tycoon with this mod installed.",
	        image: RDSLogo,
			buttonText: "Thanks :)",
	    })
	}
})