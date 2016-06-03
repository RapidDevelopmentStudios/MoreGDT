var MoreGDT = {};

var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

GDT.addEvent({
	id: "chipgateEvent",
	date: "34/10/3",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Chipgate",
            image: Placeholder_Icon,
	        text: "Another grPhone controversy has appeared online, this time related to the grPhone 6S and 6S+. The issue is related to Grapple using two different versions of their G9 chip; one by CSMC and the other by Sansung. Reports state the Sansung chip yields worse battery performance than the CSMC chip.",
	        buttonText: "OK",
	        
	    })
	}
})

GDT.addEvent({
    id: "chipgateFix",
    date: "35/2/2",
    getNotification: function (company) {
        return new Notification({
            header: "Chipgate",
            image: Placeholder_Icon,
            text: "Grapple have recently talked about the chipgate controversy again, stating thier latest gOS patch, version 9.2.1 should solve the issue.",
            buttonText: "OK",

        })
    }
})