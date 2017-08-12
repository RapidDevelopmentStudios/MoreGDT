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
			'Code/Extra/helpBook.js',
			'Code/Extra/completeMessage.js',
], ready, error);

})();

//Helpbook Code
var div = $("body");
    div.append('<div id="MoreGDTDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #989898;"> <div id="MoreGDTDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div> <h2 style="color: #989898; text-align:center;">About the MoreGDT Helpbook</h2> <p style="text-align:center;">The MoreGDT Helpbook provides information about MoreGDT such as the changelog, team information and useful links.</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Changelog</h2><h3 style="color: #989898; text-align:center">Version 0.3</h3><p style="text-align:center">Additions & Changes:</p><p style="text-align:center"> Added more Ninvento platforms old and new </br> Added Tammel (Mattel) products and Strawberry Root (Raspberry Pi) </br> Balanced Grapintosh products </br> Changed the welcome and completion message content </br> Added more events </br> Improved Vindows storyline notifications </br> New Grapintosh place holder image (3D artist wanted) </br> Voogle and Nexis are all in one file now (Voogle.js) </br> Added new research </p><p style="text-align:center">Bug fixes:</p><p style="text-align:center">No bug fixes in this release of MoreGDT</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Team Members</h2><p style="text-align:center">Diamox - Project Lead/Programmer</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Useful Links</h2><div id="GHGButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHGPage()" style="margin:0 auto">Forum Post</div>' +
  '<div id="discordButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.discordPage()" style="margin:0 auto">Discord Server</div>' +
  '<div id="GHButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHPage()" style="margin:0 auto">Github Page</div>' +
  '<div id="WSButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.WSPage()" style="margin:0 auto">RDS Website</div></div>');

 /*
	1.0 Pre-release 3 changelog:

	- Added many new Ninvento platforms

	- Added Tammel products and Strawberry Root (Mattel and Raspberry Pi)

	- Balanced Grapintosh products

	- Changed Welcome message and Complete message content

	- Added more events

	- Improved Vindows storyline notifications

	- New placeholder images (I need a 3D artist...)

	- Removed dependencies section from the package file (There are no dependencies)

	- Combined Voogle and Nexis into a single file

	- Added new research for more advanced stuff
 */
  
