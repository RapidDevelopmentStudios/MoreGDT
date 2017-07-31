var MoreGDT = {};

//Images
var Vindows1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows1.png']
var Vindows3dot1Logo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows3.png']
var Vindows9xLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/Vindows9x.png']
var VindowsXPLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/VindowsXP.png']
var VindowsVistaLogo = [GDT.getRelativePath() + '/../../Img/Storyline/Vindows/VindowsVista.png']
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
	        text: "Today, Micronoft, a company known for their MS-CLS Operating System have announced a new product named Micronoft Vindows. It is designed to compete with Grapple's GUI based OS that runs on the Grapintosh. However, instead of being a standalone Operating System, it is a Operating Environment designed to run on top of MS-CLS.",
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
			text: "Vindows 3 was released by Micronoft today. It comes with a overhauled UI, as the List-based MS-CLS Executive File Manager program has been replaced with 2 seperate managers, the Icon-based Program Manager for managing programs and the List-based File Manager for managing files.",
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
			text: "Micronoft have released the next consumer version of Vindows today, named Vindows 95, and features a redesigned UI. Micronoft have recieved criticism for the OS still being a shell that runs on-top of CLS, however Micronoft has stated that consumer grade hardware is not ready for MT based Operating Systems yet.",
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
			text: "Micronoft released Vindows Millenium Edition, also know as Vindows ME today and it has been given mostly negative reviews. The first problem that users have mentioned is that it is still based on CLS.{n} However, real mode CLS support has been removed which has had a major effect on compatibility and stability. Micronoft claimed the move was to reduce system boot times.",
			image: Vindows9xLogo,
			buttonText: "OK",
		})
	}
})

//Vindows 2000
GDT.addEvent({
	id: "Vindows2K.MGDT",
	date: "13/12/3",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "Vindows 2000 was released by Micronoft today. It is the next release in their MT line of operating systems. It includes support for MTFS 3.0, EDS and some new assistive technologies that were previously found in the Vindows 9x line of products.",
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
			text: "Micronoft has released their first version of Vindows MT aimed at consumers today shortly after their previous releases, known as Vindows XP. It comes with updated start menu, and a new blue themed UI known as Luma. It also comes with new feautures such as an updated welcome screen and user switching.",
			image: VindowsXPLogo,
			buttonText: "OK",
		})
	}
})

//Vindows Vista
GDT.addEvent({
	id: "VindowsVista.MGDT",
	date: "19/1/4",
	getNotification: function(company){
		return new Notification({
			header: "Vindows",
			text: "After what seems forever, Micronoft has released their next version of Vindows named Vindows Vista. It comes with a new theme named Glass. It features transparent UI elements and live thumbnails. It has recieved negative reactions though, stating it's preformance and stablity is worse than it was in XP.{n} It comes with new features such as IB7, VMP 11 and speach recognition.",
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
			text: "Today, Micronoft released the successor to the poorly recieved Vindows Vista, named Vindows 7. It offers improved performance over its predecessor, while maintaining hardware and software compatibility. It offers a redesigned taskbar, allowing apps to be pinned to it. It offers new managment features and less UCS popups to make it less intrusive.",
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
			text: "Today, Micronoft released the successor to the highly aclaimed Vindows 7, named Vindows 8. The OS has recieved negative reviews stating while the OS works better on tablets than other versions of Vindows, it is poorly optimised for Desktop users. The reason behind this is the new Start Screen, which replaces the Start Menu with a full screen view of apps.",
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
			text: "Less than a year after it's release, Micronoft have released the successor to Vindows 8, named Vindows 8.1. Instead of focusing on major new features, Micronoft's goal with Vindows 8.1 was to address the negative criticisms of 8, by making changes to the user interface.{n} The start button has been reintroduced, and the OS now boots to desktop by default on Desktop PC's.",
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
			text: "Today, Micronoft released the newest version of Vindows a year after Vindows 8.1, named Vindows 10. It adresses many of the complaints from 8 and 8.1, such as reintroducing the Start Menu. The new Start Menu also has the ability to have modern apps pinned to it.{n} Another new feature to make the Operating System better for Desktop users is the ability to run Modern Apps inside of a window, which was not present in 8 or 8.1.",
			image: Vindows10Logo,
			buttonText: "OK",
		})
	}
})