var moreGDT = {};
var showMenuUI = UI._showContextMenu;
var showMenuItem = function(type, menuItems, x, y) {
    var company = GameManager.company;
        menuItems.push({
            label: "MoreGDT Helpbook".localize("menu item"),
            action: function() {
                Sound.click();
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
moreGDT.GHGPage = function () {
	window.open("https://forum.greenheartgames.com/t/wip-MoreGDT-beta/20681");
}


moreGDT.discordPage = function () {
	window.open("https://discordapp.com/invite/010CZESIgNZEftAs9");
}


moreGDT.SGPage = function () {
	window.open("http://steamcommunity.com/groups/RD_Studios");
}

moreGDT.WSPage = function () {
	window.open("http://steamcommunity.com/groups/RD_Studios");
}