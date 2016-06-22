var showMenuUI = UI._showContextMenu;
var showMenuItem = function(type, menuItems, x, y) {
    var company = GameManager.company;
        menuItems.push({
            label: "MoreGDT...".localize("menu item"),
            action: function() {
                Sound.click();
                CreateWindow();
                GameManager.resume(true);
                var div = $("#mrGDTHelpMain");
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

	//Main Body - Using HTML

	var div = $("body");
	div.append('<div id="mrGDTHelpMain" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #F5EDE1; border: dashed; border-color: green"> <div id="mrGDTHelpMainDivTitle" class="windowTitle smallerWindowTitle">MoreGDT Helpbook</div><h2 style="color: #E80026" > MoreGDT Info & Help</h2><p style="color: grey" >The goal of MoreGDT is to expand on your GDT experience. We acheive this by adding new platforms, topics, researches, story elements and more.</p><h2 style="color: CD0000" > 0.2 Additions</h2><p style="color: grey" ><ul><li>New Vexis Platforms</li><li>New Grapintosh/iGrap Platforms</li><li>New topics and researches</li><li>Updates to the Vindows storyline</li></ul></p><h2 style="color: 9E9E9E" > FAQ</h2><p style="color: grey" ></p><h2 style="color: 9E9E9E" > Development Team</h2><p style="color: grey" >KizzaGaming - Project Lead/Programming<p style="color: grey" >Diamox - Programming<p style="color: grey" >SnowyOwl - Programming<p style="color: grey" >iSenzo - Graphics</div>');
	div = $("#mrGDTHelpMain");

    //Buttons

	div.append('<div id="GHGButton" class="selectorButton blueShadeCustom" centeredButtonWrapper onclick="GHGPage()" style="margin:0 auto">Forum Post</div>');
	div.append('<div id="discordButton" class="selectorButton blueShadeCustom" centeredButtonWrapper onclick="discordPage()" style="margin:0 auto">Discord Server</div>');
	div.append('<div id="SGButton" class="selectorButton blueShadeCustom" centeredButtonWrapper onclick="SGPage()" style="margin:0 auto">Steam Group</div>');
}