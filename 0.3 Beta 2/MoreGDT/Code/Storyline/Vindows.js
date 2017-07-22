var MoreGDT = {};

//Images
var Vindows1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows1.png']
var Vindows3dot1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows3.1.png']
var Vindows9xLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows9x.png']
var VindowsXPLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/VindowsXP.png']
var VindowsVistaLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/VindowsVista.png']
var Vindows7Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows7.png']
var Vindows8Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows8.png']
var Vindows10Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows8.png']


//Vindows 1
GDT.addEvent({
	id: "Vindows1.MGDT",
	date: "5/11/3",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Vindows",
	        text: "Today, Micronoft, a company known for their MS-CLS Operating System have announced a new product named Micronoft Vindows. It is designed to compete with Grapples GUI based OS that runs on the Grapintosh. However, instead of being a standalone Operating System, it is a Operating Environment designed to run on top of MS-CLS.",
	        image: Vindows1Logo,
			buttonText: "OK",   
	    })
	}
})

//Vindows 2
GDT.addEvent({
	id: "Vindows2.MGDT",
	date: "7/12/2",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Vindows",
	        text: "Micronoft have just released the successor to Micronoft Vindows, named Vindows 2.0. It's main new feature is Overlapping Windows.",
	        image: Vindows1Logo,
			buttonText: "OK",
	    })
	}
})

GDT.addEvent({
	id: "VindowsLawsuit.MGDT",
	date: "5/3/2",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Grapple vs Micronoft",
	        text: "Grapple have issues a lawsuit against Micronoft and PH, regarding the Vindows 2.0 OS. They have claimed that the OS copies the 'Look and Feel' of the Grapintosh OS, as it uses similar icons and copies the concept of overlapping windows.",
	        buttonText: "OK",
	    })
	}
})

//Vindows 3
GDT.addEvent({
	id: "Vindows3.MGDT",
	date: "10/5/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Vindows 3 was released by Micronoft today. It comes with a overhauled UI, as the List-based MS-CLS Executive File Manager program has been replaced with 2 seperate managers, the Icon-based Program Manager for managing programs and the List-based File Manager for managing files.",
			image: Vindows3dot1Logo,
			buttonText: "OK",
		})
	}
})

GDT.addEvent({
	id: "VindowsLawsuit2.MGDT",
	date: "10/6/2",
	getNotification: function(company){ 
	    return new Notification({
	        header: "Grapple vs Micronoft",
	        text: "With the recent launch of Micronoft Vindows 3.0, Grapple have added aditional claims to the lawsuit they issued against Micronoft just over 2 years ago. This means Grapple are now suing Micronoft over 189 GUI elements included in the Vindows Operating System",
	        buttonText: "OK",
	    })
	}
})

//Vindows 3.1
GDT.addEvent({
	id: "Vindows3dot1.MGDT",
	date: "12/3/1",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft realesed a new version of the Vindows Operating System today, known as Vindows 3.1. Its main additions include improved system stability, expanded support for multimedia, TrueType fonts, and workgroup networking. It has also removed support for Real Mode operation.",
			image: Vindows3dot1Logo,
			buttonText: "OK",
		})
	}
})

//Vindows MT 3.1
GDT.addEvent({
	id: "VindowsMT.MGDT",
	date: "13/7/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft have released a new version of Vindows today, called Vindows MT 3.1. Micronoft claims the MT stands for 'Modern Technology' as the Operating System no longer needs CLS installed. Micronoft claims the main goal of this OS is to offer higher security and stability than the previous CLS based OS's.{n} However, the OS is designed for higher end workstations and servers and Micronoft have said the consumer versions of Vindows will still be based on CLS.",
			image: Vindows3dot1Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 95
GDT.addEvent({
	id: "Vindows95.MGDT",
	date: "15/8/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft have released the next consumer version of Vindows today, named Vindows 95, and features a redesigned UI. Micronoft have recieved criticism for the OS still being a shell that runs on-top of CLS, however Micronoft has stated that consumer grade hardware is not ready for MT based Operating System's yet.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows MT 4
GDT.addEvent({
	id: "VindowsMT4.MGDT",
	date: "16/8/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Vindows MT 4 was released today my Micronoft. It features the newer shell that was introduced in Vindows 95. It also comes pre-installed with the DirectZ API for multimedia tasks.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 98
GDT.addEvent({
	id: "Vindows98.MGDT",
	date: "18/6/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today, Vindows 98 was released by Micronoft. It comes with an improved shell featuring Back and Forward navigation buttons, Fast Access toolbar and more. It also supports the Vindows Driver Model (VDM) which is designed to replace the older VhD standard, however VhD drivers are still supported for compatibilty reasons.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 98SE
GDT.addEvent({
	id: "Vindows98SE.MGDT",
	date: "19/5/1",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today, Micronoft released a updated version of Vindows 98, called Vindows 98 Second Edition of 98SE. It fixes a well known bug causing most computers to crash if left turned on for 49.7 days. It also comes with better support for the new USB interface and includes IB5. They have stated that this will be the last Vindows release to be based on CLS.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 2000
GDT.addEvent({
	id: "Vindows2K.MGDT",
	date: "16/12/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Vindows 2000 was released by Micronoft today. It is the next release in their MT line of operating systems. It includes support for MTFS 3.0, EDS and some new assistive technologies that were previously found in the Vindows 9x line of products.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows ME
GDT.addEvent({
	id: "VindowsME.MGDT",
	date: "17/9/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft released Vindows Milllenium Edition, also know as Vindows ME today and it has been given mostly negative reviews. The first problem that users have mentioned is that it is still based on CLS.{n} However, real mode CLS support has been removed which as had a major effect on campatibility and stability. Micronoft claimed the move was to reduce system boot times.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows XP
GDT.addEvent({
	id: "VindowsXP.MGDT",
	date: "18/10/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Micronoft has released their first version of Vindows MT aimed at consumers today, known as Vindows XP. It comes with updated start menu, and a new blue themed UI known as Luma. It also comes with new feautures such as an updated welcome screen and user switching.",
			image: VindowsXPLogo,
			buttonText: "OK",
		})
	}
})

//Vindows Vista
GDT.addEvent({
	id: "VindowsVista.MGDT",
	date: "24/1/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "After roughly 6 years, Micronoft has released their next version of Vindows named Vindows Vista. It comes with a new theme named Glass. It features transparent UI elements and live thumbnails. It has recieved negative reactions though, stating it's preformance and stablity is worse than it was in XP.{n} It comes with new features such as IB7, VMP 11 and speach recognition.",
			image: VindowsVistaLogo,
			buttonText: "OK",
		})
	}
})

GDT.addEvent({
	id: "ProjectMojave.MGDT",
	date: "25/5/3",
	getNotification: function(company){
		return new Notification({
			header: "Project Mojave",
			text: "Due to the negative response to the Vindows Vista Operating System, Micronoft have launched a campaign known as 'Project Mojave'. The goal of this project was to see what users would rate Vindows Vista if they didn't know that they were using it. They did this by modifing the Operating System to refer to itself as Vindows 'Codename Mojave'.{n} They were asked to rate Vista out of 10, basing their opinion on what they had heard about Vista, with the average rating being 4.4 out of 10. Then, they were shown the demo of Vindows Mojave and asked to rate it out of 10, with the average being 8.5 out of 10. They were then told that they were actually using Vindows Vista.",
			image: VindowsVistaLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 7
GDT.addEvent({
	id: "Vindows7.MGDT",
	date: "26/11/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today, Micronoft released the successor to the poorly recieved Vindows Vista, named Vindows 7. It offers improved performance over its predecessor, while maintaining hardware and software compatibility. It offers a redesigned taskbar, allowing apps to be pinned to it. It offers new managment features and less UCS popups to make it less intrusive.",
			image: Vindows7Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 8
GDT.addEvent({
	id: "Vindows8.MGDT",
	date: "29/10/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today, Micronoft released the successor to the highly aclaimed Vindows 7, named Vindows 8. The OS has recieved negative reviews stating while the OS works better on tablets than other versions of Vindows, it is poorly optimised for Desktop users. The reason behind this is the new Start Screen, which replaces the Start Menu with a full screen view of apps.",
			image: Vindows8Logo,
			buttonText: "OK",
		})
	}
})


//Vindows 8.1
GDT.addEvent({
	id: "Vindows8dot1.MGDT",
	date: "30/10/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Less than a year after it's release, Micronoft have released the successor to Vindows 8, named Vindows 8.1. Instead of focusing on major new features, Micronoft's goal with Vindows 8.1 was to address the negative criticisms of 8, by making changes to the user interface.{n} The start button has been reintroduced, and the OS now boots to desktop by default on Desktop PC's.",
			image: Vindows8Logo,
			buttonText: "OK",
		})
	}
})

//Vindows 10
GDT.addEvent({
	id: "Vindows10.MGDT",
	date: "33/7/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Today, Micronoft released the newest version of Vindows, named Vindows 10. It adresses many of the complaints from 8 and 8.1, such as reintroducing the Start Menu. The new Start Menu also has the ability to have modern apps pinned to it.{n} Another new feature to make the Operating System better for Desktop users is the ability to run Modern Apps inside of a window, which was not present in 8 or 8.1.",
			image: Vindows10Logo,
			buttonText: "OK",
		})
	}
})