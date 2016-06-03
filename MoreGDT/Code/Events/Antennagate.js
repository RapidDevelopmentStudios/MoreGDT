var MoreGDT = {};

var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

GDT.addEvent({
	id: "antennagateEvent",
	date: "24/9/3",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Antennagate",
            image: Placeholder_Icon,
	        text: "Grapple have recently been recieving lots of complaints related to the position of the grPhone 4's antenna, stating that holding the phone as normal can cause severe signal issues. Grapple are working on the issue.",
	        buttonText: "OK",
	        
	    })
	}
})

GDT.addEvent({
    id: "antennagateLawsuit",
    date: "24/10/1",
    getNotification: function (company) {
        return new Notification({
            header: "Antennagate",
            image: Placeholder_Icon,
            text: "Grapple and MT&T are currently facing lawsuits related to the Antennagate controversy for fraud by concealment, negligence, intentional misrepresentation and defective design. Grapple have stated users should avoid making contact with the antenna while making calls.",
            buttonText: "OK",

        })
    }
})

GDT.addEvent({
    id: "antennagateFix",
    date: "24/9/3",
    getNotification: function (company) {
        return new Notification({
            header: "Antennagate",
            image: Placeholder_Icon,
            text: "Antennagate is over, and Grapple have stated that thier new gOS update and the new Shield case should eliminate the issue.",
            buttonText: "OK",

        })
    }
})