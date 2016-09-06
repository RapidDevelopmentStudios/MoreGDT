var MoreGDT = {};

var RDSLogo = [GDT.getRelativePath() + '/../../Icon/RDSLogo/RDSLogo-200x.png']

GDT.addEvent({
	id: "welcomeMessage",
	date: "1/1/1",
	getNotification: function(company){ 
	    return new Notification({
	        header: "MoreGDT",
	        text: "Thank you for installing MoreGDT. \n You can join our steam group at http://steamcommunity.com/groups/Rapid_DS",
	        image : RDSLogo,
			buttonText: ":)",
	        
	    })
	}
})