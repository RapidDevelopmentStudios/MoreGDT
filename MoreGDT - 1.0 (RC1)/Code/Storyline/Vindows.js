var MoreGDT = {};

//Images
var Vindows1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows1.png']
var Vindows3dot1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows3.png']
var Vindows9xLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows9x.png']
var VindowsXPLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/VindowsXP.png']
var VindowsVistaLogo = [GDT.getRelativePath() +'/../../Img/Storyline/Vindows/VindowsVista.png']
var Vindows7Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows7.png']
var Vindows8Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows8.png']
var Vindows10Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows8.png']


//Vindows 1
GDT.addEvent({
	id: "Vindows1.MGDT",
	date: "2/11/3",
	getNotification: function(company){ 
	    return new Notification({
			header: "Vindows",
			text: "Today Micronoft, known for their MS-CLS computer Operating System, have announced a new Operating System which is to be used on computers. This software is designed to compete with Grapple's GUI based Operating System which is used on the Grapintosh line of products. This could also mean more advanced software and games can be made for the PC platform.",
	        image: Vindows1Logo,
			buttonText: "OK",   
	    })
	}
})

//Vindows 3
GDT.addEvent({
	id: "Vindows3.MGDT",
	date: "6/5/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft, who makes software for the PC platform, has released a new version of Vindows today with many new changes. This update comes with an overhauled user interface as the list-based MS-CLS File Manager has been replaced with two seperate managers: An icon-based manager for programs and a new and improved list-based manager for managing files.",
			image: Vindows3dot1Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 95
GDT.addEvent({
	id: "Vindows95.MGDT",
	date: "8/8/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Another consumer release of Vindows has been announced by Micronoft today, this one named Vindows 95. This update features a redesigned user interface and many new features, although it still runs on top of the MS-CLS Operating System as a shell, which limits how much more advanced software can get for this system.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows ME
GDT.addEvent({
	id: "VindowsME.MGDT",
	date: "13/9/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today Micronoft announced another update to their Vindows Operating System, this one named ME. Also known as 'Millenium Edition', Vindows ME has been given mostly negative reviews due to it still being based on MS-CLS (even though real mode support has been removed) which has caused many kinds of stability issues and compatibility with older software is not guaranteed. Micronoft claimed this improves boot times, which was their main reason.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//CHANGES TO BE MADE FROM HERE ON TO THE NOTIFICATIONS

//Vindows 2000
GDT.addEvent({
	id: "Vindows2K.MGDT",
	date: "13/12/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Alongside ME, Micronoft released a new MT based Operating System named Vindows 2000. Nicknamed 'Vindows 2K', Vindows 2000 includes support for MTFS 3.0, EDS and some new assistive technologies that were previously found in the Vindows 9x releases of the Operating System.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows XP
GDT.addEvent({
	id: "VindowsXP.MGDT",
	date: "15/10/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft has today announced their first MT aimed at the consumer market, Vindows XP. It comes with a new start menu, and a beautiful new theme that makes Vindows as a whole appear to be more consumer friendly and less dull like previous releases.",
			image: VindowsXPLogo,
			buttonText: "OK",
		})
	}
})

//Vindows Vista
GDT.addEvent({
	id: "VindowsView.MGDT",
	date: "19/1/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "After many years Micronoft has announced a new version of the Vindows Operating System, this one called Vindows View. It comes with many new features including an updated version of Internet Browser, VMP 11, speech recognition and a completely different theme named 'Aera' which has a more transparent design compared to the flat design of XP. However, it has recieved negative reviews, this is due to performance and stability issues making the system run far worse than XP.",
			image: VindowsVistaLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 7
GDT.addEvent({
	id: "Vindows7.MGDT",
	date: "21/11/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "After a short amount of time, or so it seems, a new version of Vindows has been announced, this one named Vindows 7. Not only does it offer improved performance and stability over View, but it also has a redesigned taskbar which allows programs and games to be pinned, and new management features alongside less UCS popups to make it less intrusive and more user friendly. This update has recieved positive feedback across the board.",
			image: Vindows7Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 8
GDT.addEvent({
	id: "Vindows8.MGDT",
	date: "24/10/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "The successor to Vindows 7 was announced by Micronoft today, this update is called Vindows 8. As it seems this version of Vindows is aimed almost entirely at tablets and mobile devices as it doesn't have a desktop friendly interface at all as well as being badly optimised for desktop users overall. One of the most noticeable features is the new interface which replaces the one introduced in Vindows View, this design is much more flat and features mostly simple colours and sharp edges compared to the previous glass design with smooth curved edges. The start menu has also been replaced with a tile based 'start screen' called 'Metra' which again is better designed for tablets.",
			image: Vindows8Logo,
			buttonText: "OK",
		})
	}
})


//Vindows 8.1
GDT.addEvent({
	id: "Vindows8dot1.MGDT",
	date: "26/10/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "A short while after the release of Vindows 8, Micronoft has announced Vindows 8.1. This update to Vindows 8 focuses mostly on addressing the negative criticisms of the original release, this was done by making changes to the interface. First of all the start button was brought back after many users got annoyed and used 3rd party solutions and the Operating System now boots to the desktop by default on desktop PCs.",
			image: Vindows8Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 10
GDT.addEvent({
	id: "Vindows10.MGDT",
	date: "27/7/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Another update to Vindows was announced today, this one named Vindows 10. This reintroduces a lot of features that users complained about being removed in Vindows 8/8.1, the main one being the Start Menu which has support for modern apps. Another feature is that modern apps can be run in desktop windows instead of being forced to run in full screen which was not available on 8/8.1 without 3rd party software. Additionally the Intelligence Centre was introduced which helps you keep track of notifications from apps installed on your computer as well as any changes made to your system or just general Vindows notifications.",
			image: Vindows8Logo,
			buttonText: "OK",
		})
	}
})