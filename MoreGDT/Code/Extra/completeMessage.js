var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "completeMessage",
	date: "30/12/4",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "Well done! You completed Game Dev Tycoon with MoreGDT installed. We hope you enjoyed this mod, and feedback would be appreciated. \n \n You can leave feedback on the workshop page or in our Steam group\n \n Development Team: \n KizzaGaming \n SwegsInBacon \n Snowyowl \n \n Graphics By: \n iSenzo",
	        image : RDSLogo,
			buttonText: ":)",
	        
	    })
	}
})