var MoreGDT = {};

//Add Research
MoreGDT.addResearch = function () {
		GDT.addResearchItem(
		{
			id: "Research_Enhanced_Environment",
			name: "Enhanced Environment".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 7
			},
			category: "Level Design",
			categoryDisplayName: "Level Design".localize()
		});
};

MoreGDT.addResearch = function () {
		GDT.addResearchItem(
		{
			id: "Research_More_Saves",
			name: "More Save Slots".localize(),
			v: 4,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 5
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
};

MoreGDT.addResearch = function () {
		GDT.addResearchItem(
		{
			id: "Research_Advanced_Weather",
			name: "Advanced Weather".localize(),
			v: 7,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 8
			},
			category: "Level Design",
			categoryDisplayName: "Level Design".localize()
		});
};


