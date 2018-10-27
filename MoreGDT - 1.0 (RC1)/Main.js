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
    div.append('<div id="MoreGDTDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #989898;"> <div id="MoreGDTDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div> <h2 style="color: #989898; text-align:center;">About the MoreGDT Helpbook</h2> <p style="text-align:center;">The MoreGDT Helpbook provides information about MoreGDT such as the changelog, team information and useful links.</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Changelog</h2><h3 style="color: #989898; text-align:center">Version 1.0 Release Candidate 1</h3><p style="text-align:center">Additions & Changes:</p><p style="text-align:center"> Added all sorts of recently released products </br></br> Shuffled some things around </br></br> Updated Discord link </br></br> Updated website link </br></br> An artist for the icons is needed! </p><p style="text-align:center">Bug fixes:</p><p style="text-align:center">Fixed some product announcements </br></br> Fixed Vindows 10 announcement icon</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Team Members</h2><p style="text-align:center">Diamox - Project Lead/Programmer</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Useful Links</h2><div id="GHGButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHGPage()" style="margin:0 auto">Forum Post</div>' +
  '<div id="discordButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.discordPage()" style="margin:10 auto">Discord Server</div>' +
  '<div id="GHButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHPage()" style="margin:10 auto">Github Page</div>' +
  '<div id="WSButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.WSPage()" style="margin:10 auto">RDS Website</div></div>');

 /*
	1.0 Release Candidate 1 changelog:

	- Added all sorts of recently released products

	- Shuffled some things around

	- Updated Discord link

	- Updated website link

	- Fixed some product announcements

	- Fixed Vindows 10 announcement icon
 */
