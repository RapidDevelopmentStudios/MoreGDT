GDT.addEvent({
	id: "BaseGame.TargetAudiences",
	date: "2/9/3",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Industry News",
	        text: "Recent studies suggest that the increasing variety of gaming devices also creates a market for more specialized games.\nSome platforms become more popular with younger gamers while others cater for the more mature age groups.{n}As more and more developers enter the market we expect developers to focus their games on specific age groups to really make an impact.",
			buttonText: "OK",
	        
	    })
	}
})

GDT.addEvent({
	id: "BaseGame.MarketingStory",
	date: "4/5/2",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Industry News",
	        text: "With the growing interest in video games there is also a growing audience for video game magazines. These magazines offer a great new way for game developers to market their upcoming games.",
			buttonText: "OK",
			ignoreGameLengthModifier : true,
	        
	    })
	}
})