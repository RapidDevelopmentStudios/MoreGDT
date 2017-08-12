 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Tammel_Telegent',
    name: 'Telegent',
    company: 'Tammel',
    startAmount: 1.9,
    unitsSold: 2.3,
    licencePrize: 10000,
    published: '1/1/1',
    platformRetireDate: '1/9/3',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 1,
    iconUri: Placeholder_Icon,
});

GDT.addPlatform({
    id: 'Platform_Tammel_Console3',
    name: 'Console 3',
    company: 'Tammel',
    startAmount: 2.3,
    unitsSold: 2.5,
    licencePrize: 10000,
    published: '1/9/3',
    platformRetireDate: '4/6/1',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Tammel_Console3_Announce',
		date: '3/5/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Soon after the Telegent was discontinued, Tammel has announced that they are continuing to support this platform, however there is a catch. {n} There will be on difference that will be made when the device is released again, and that is the name, the name will be changed to the 'Console 3'. {n} So even though they haven't lost any marketshare we aren't sure if it'll increase any further. {0}.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Strawberry_Root',
    name: 'Strawberry Root',
    company: 'Strawberry Root Foundation',
    startAmount: 2.1,
    unitsSold: 2.6,
    licencePrize: 250000,
    published: '24/2/2',
    platformRetireDate: '255/12/4',
    developmentCosts: 100000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 6,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Strawberry_Root_Announce',
		date: '24/1/1',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "A new platform was released today by a company that seems to have appeared out of nowhere, this is the new Strawberry Root. {n} You can make absolutely anything from this device from a small retro gaming system to a multiplayer touch screen table top arcade, so this is cable of running games fairly well. {n} Absolutely anyone can make whatever they want for this, it will be interesting to see what is created. {0}.".localize().format(General.getETADescription('24/1/1', '24/2/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});