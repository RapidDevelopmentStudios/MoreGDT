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
			'Code/Platforms/Nexis.js',
			
			//Topics, Reseraches and Events
			'Code/Game/Topics.js',
			
			/*Storylines
			'Code/Storyline/Vindows.js',
			
			
			//Events
			'Code/Events/gameBeta.js',
			*/
			
			//Extra
			'Code/Extra/welcomeMessage.js',
			'Code/Extra/helpBook.js',
], ready, error);

})();

//Helpbook Code
var div = $("body");
    div.append('<div id="MoreGDTDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #989898;"> <div id="MoreGDTDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div> <h2 style="color: #989898; text-align:center;">About the MoreGDT Helpbook</h2> <p style="text-align:center;">The MoreGDT Helpbook provides information about MoreGDT such as the changelog, team information and important links.</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Changelog</h2><h3 style="color: #989898; text-align:center">Version 0.3 (Beta 2)</h3><p style="text-align:center">Additions & Changes:</p><p style="text-align:center">Added Grapintosh platforms. </br> New notifications for Nexis devices. </br> 2 new topics.</p><p style="text-align:center">Bug fixes:</p><p style="text-align:center">None in this Beta</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Team Members</h2><p style="text-align:center">KizzaGaming - Project Lead/Programmer</p><p style="text-align:center">Diamox - Programmer</p><p style="text-align:center">ChizbeJoe - Programmer</p><p style="text-align:center">SirStig - Programmer</p><p style="text-align:center">iSenzo - Art</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #989898; text-align:center">Important Links</h2><div id="GHGButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.GHGPage()" style="margin:0 auto">Forum Post</div>' +
  '<div id="discordButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.discordPage()" style="margin:0 auto">Discord Server</div>' +
  '<div id="SGButton" class="selectorButton centeredButtonWrapper" onclick="moreGDT.SGPage()" style="margin:0 auto">Steam Group</div></div>');
  
