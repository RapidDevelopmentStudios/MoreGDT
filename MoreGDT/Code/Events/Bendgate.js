var MoreGDT = {};

var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

GDT.addEvent({
	id: "bendgateEvent",
	date: "32/11/1",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Bendgate",
            image: Placeholder_Icon,
	        text: "A recent controversy has surfaced online lately named 'Bendgate'. The controversy is related to reports of certain grPhone 6 and 6+ users reporting the phones chassis bending. In most cases, this issue is caused by excess pressure to the devices while being stored in tight pockets.",
	        buttonText: "OK",
	        
	    })
	}
})