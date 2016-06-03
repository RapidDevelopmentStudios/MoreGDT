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
			/*
			'Code/Platforms/Grapintosh.js',
			'Code/Platforms/Nexis.js',
			*/
			//Topics, Reseraches and Events
			'Code/Game/Topics.js',
			//Storylines
			'Code/Storyline/Vindows.js',
			//Extra
			'Code/Extra/welcomeMessage.js',
			'Code/Extra/completeMessage.js',
			'Code/Extra/helpBook.js',
], ready, error);

})();