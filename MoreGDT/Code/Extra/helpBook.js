var showMenuUI = UI._showContextMenu;
var showMenuItem = function(type, menuItems, x, y) {
    var company = GameManager.company;
        menuItems.push({
            label: "MoreGDT Helpbook".localize("menu item"),
            action: function() {
                Sound.click();
                CreateWindow();
                GameManager.resume(false);
                var div = $("#MoreGDTDiv");
                div.scrollTop();
                div.gdDialog({
                    popout: !0,
                    close: !0
                });
            }
        })
    showMenuUI(type, menuItems, x, y);
}
UI._showContextMenu = showMenuItem;


//Functions, pop up links.

var GHGPage = function () {
	window.open("https://forum.greenheartgames.com/t/wip-MoreGDT-beta/20681");
}

var discordPage = function () {
	window.open("https://discordapp.com/invite/010CZESIgNZEftAs9");
}
var SGPage = function () {
	window.open("http://steamcommunity.com/groups/RD_Studios");
}

CreateWindow = function() {

var div = $("body");
	
	div.append('<div id="MoreGDTDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #cccccc"> <div id="MoreGDTDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div> <h2 style="color: #cccccc; text-align:center">About the MoreGDT Helpbook</h2> <p style="text-align:center">The MoreGDT Helpbook provides information about MoreGDT such as the changelog, team information and important links.</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #cccccc; text-align:center">Changelog (Version 0.2.1)</h2><p style="text-align:center">Redesigned Helpbook</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #cccccc; text-align:center">Team Members</h2><p style="text-align:center">KizzaGaming - Project Lead/Programmer</p><p style="text-align:center">Diamox - Programmer</p><p style="text-align:center">ChizbeJoe - Programmer</p><p style="text-align:center">SirStig - Programmer</p><p style="text-align:center">iSenzo - Art</p><div id="MoreGDTSeperator" class="windowTitle smallerWindowTitle"></div><h2 style="color: #cccccc; text-align:center">Important Links</h2></div>');
	
	div = $("#MoreGDTDiv");

    //Buttons

	div.append('<div id="GHGButton" class="selectorButton" centeredButtonWrapper onclick="GHGPage()" style="margin:0 auto">Forum Post</div>');
	div.append('<div id="discordButton" class="selectorButton" centeredButtonWrapper onclick="discordPage()" style="margin:0 auto">Discord Server</div>');
	div.append('<div id="SGButton" class="selectorButton" centeredButtonWrapper onclick="SGPage()" style="margin:0 auto">Steam Group</div>');
}