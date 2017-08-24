//Menu Item
var moreGDT = {};
var showMenuUI = UI._showContextMenu;
var showMenuItem = function(type, menuItems, x, y) {
    var company = GameManager.company;
        menuItems.push({
            label: "MoreGDT Helpbook".localize("menu item"),
            action: function() {
                Sound.click();
                GameManager.resume(true);
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
moreGDT.GHGPage = function () {
	window.open("https://forum.greenheartgames.com/t/wip-moregdt-2017-beta/22473");
}

moreGDT.discordPage = function () {
	window.open("https://discord.gg/3hRsFRK");
}

moreGDT.GHPage = function () {
	window.open("https://github.com/RapidDevelopmentStudios/MoreGDT");
}

moreGDT.WSPage = function () {
	window.open("http://rapiddevstudios.wix.com/rapiddevstudios");
}