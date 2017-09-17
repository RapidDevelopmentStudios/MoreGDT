 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Atira Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Atira_PowerPlayer',
    name: 'PowerPlayer',
    company: 'Atira',
    startAmount: 0.2,
    unitsSold: 0.3,
    licencePrize: 10000,
    published: '1/1/1',
    platformRetireDate: '1/7/3',
    developmentCosts: 0,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 1,
    iconUri: Placeholder_Icon,
});

GDT.addPlatform({
    id: 'Platform_Atira_78',
    name: '78',
    company: 'Atira',
    startAmount: 0.3,
    unitsSold: 0.3,
    licencePrize: 10000,
    published: '3/6/2',
    platformRetireDate: '7/1/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Atira_78_Announce',
		date: '3/5/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Atira, a home gaming console company, today announced the Atira 78. {n} This home gaming console is an improvement over the previous Atira PowerPlayer while still keeping compatibility with the games developed for it. Although production of the system seems questionable there's no reason why it shouldn't do well. {0}.".localize().format(General.getETADescription('3/5/2', '3/6/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Atira_Cheetah',
    name: 'Cheetah',
    company: 'Atira',
    startAmount: 0.4,
    unitsSold: 0.5,
    licencePrize: 10000,
    published: '8/3/1',
    platformRetireDate: '10/4/2',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Atira_Cheetah_Announce',
		date: '8/2/1',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Today Atira announced a new and fairly interesting home gaming console. {n} What makes this system different is that it is supposedly the first 64-bit gaming console which has not been done before and so it should attract people to buy it over other available platforms. {n} After the previous efforts Atira has made, this new system needs to do extremely well in order to bring Atira back into the market. {0}.".localize().format(General.getETADescription('8/2/1', '8/3/1')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});