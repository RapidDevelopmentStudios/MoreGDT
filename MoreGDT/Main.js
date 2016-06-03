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
			//'Code/Platforms/Grapintosh.js',
			//'Code/Platforms/Nexis.js',
			//Messages
			'Code/Extra/welcomeMessage.js',
			'Code/Extra/completeMessage.js',
            //Events
			'Code/Events/Bendgate.js',
            'Code/Events/Chipgate.js',
            'Code/Events/Antennagate.js',
			//Topics
			'Code/Topics/Topics.js',
			//Researches
			//Storylines
			'Code/Storyline/Vindows.js',
], ready, error);

})();