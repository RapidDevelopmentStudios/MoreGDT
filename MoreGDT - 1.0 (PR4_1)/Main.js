var MoreGDT = {};

(function() {
		MoreGDT.modPath = GDT.getRelativePath();

	var ready = function () {
		
	};

	var error = function () {
		
	};

GDT.loadJs([
			//Platforms
			'Code/Platforms/grPhone.js',
			'Code/Platforms/grPad.js',
			'Code/Platforms/Grapintosh.js',
			'Code/Platforms/Atira.js',
			'Code/Platforms/vNidia.js',
			'Code/Platforms/Voogle.js',
			'Code/Platforms/Ninvento.js',
			'Code/Platforms/Other.js',
			
			//Topics, Reseraches and Events
			'Code/Game/Topics.js',
			'Code/Game/Events.js',
			
			//Storylines
			'Code/Storyline/Vindows.js',
			
			//Extra
			'Code/Extra/welcomeMessage.js',
			'Code/Extra/MGDT-Help-Book.js',
			'Code/Extra/completeMessage.js',
], ready, error);

})();

//Helpbook Code
var div = $("body");
    div.append('<div id="MoreGDTDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #989898;"> <div id="MoreGDTDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div> <h2 style="color: #989898; text-align:center;">About the MoreGDT Helpbook</h2> <p style="text-align:center;">The MoreGDT Helpbook provides information about MoreGDT such as the changelog, team information and useful links.</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Changelog</h2><h3 style="color: #989898; text-align:center">Version 1.0 Pre-release 4</h3><p style="text-align:center">Additions & Changes:</p><p style="text-align:center"> Altered some of the announcements </br></br> Each platform has a placeholder while main images are being created (3D Artist wanted) </br></br> Time continues to pass while the Helpbook is open </br></br> Updated Discord link (Thanks to Sharindog) </br></br> Platform are much more balanced </p><p style="text-align:center">Bug fixes:</p><p style="text-align:center">Fixed some announcements saying platforms will be released one or more years in the future instead of their actual release date</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Team Members</h2><p style="text-align:center">Diamox - Project Lead/Programmer</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Useful Links</h2><div id="GHGButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHGPage()" style="margin:0 auto">Forum Post</div>' +
  '<div id="discordButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.discordPage()" style="margin:0 auto">Discord Server</div>' +
  '<div id="GHButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHPage()" style="margin:0 auto">Github Page</div>' +
  '<div id="WSButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.WSPage()" style="margin:0 auto">RDS Website</div></div>');

 /*
	1.0 Pre-release 4 changelog:

	- Altered some of the announcements

	- Each platform has a placeholder now while main images are created

	- The game no longer stops while the Helpbook is open

	- Fixed some announcements saying products will be released a year or so in the future

	- New Discord server link (By Sharindog)

	- Improved balancing of platforms
 */
