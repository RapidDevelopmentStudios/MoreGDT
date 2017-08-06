var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Atira Leaving The Market
GDT.addEvent({
	id: "Atira_Exit.MGDT",
	date: "10/4/2",
	getNotification: function(company){
		return new Notification({
			header : "Industry News".localize(),
			text: "After the long demise and lack of luck for the company, Atira today announced the end of the Atira Cheetah and it's exit of the gaming industry after a range of efforts being made to keep themselves on top. It had been long rumoured that they had given up on the Cheetah and today it was confirmed by the company itself alongwith announcing that they have merged with an inexpensive hardware company in a reverse takeover. ",
			image : Placeholder_Icon,
			buttonText: "OK",
		})
	}
})