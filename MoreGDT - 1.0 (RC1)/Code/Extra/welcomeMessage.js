var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
			header: "MoreGDT",
			text: "Hi there! I'd just like to thank you for giving this mod a go, I've put quite a bit of time and effort into making this as good as I can so I'd be grateful if you could share your thoughts and give creative criticism. Have fun playing Game Dev Tycoon with MoreGDT!",
	        image: RDSLogo,
			buttonText: "No problem!",
	    })
	}
})