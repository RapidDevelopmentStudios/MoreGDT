 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Tammel_Telegent',
    name: 'Telegent',
    company: 'Tammel',
    startAmount: 0.13,
    unitsSold: 0.2,
    licencePrize: 5000,
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
    startAmount: 0.2,
    unitsSold: 0.24,
    licencePrize: 5000,
    published: '1/9/3',
    platformRetireDate: '4/6/1',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Tammel_Console3_Announce',
		date: '1/9/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Soon after the Telegent was discontinued, Tammel has announced that they are continuing to support this platform, however there is a slight difference. {n} They will be re-releasing this product under a new name, 'Console 3', and no one can be certain that this will benefit the marketshare of this system. Set to be released  {0}.".localize().format(General.getETADescription('1/9/2', '1/9/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Strawberry_Root',
    name: 'Strawberry Root',
    company: 'Strawberry Root Foundation',
    startAmount: 2,
    unitsSold: 3.2,
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
                    text : "A new platform was released today by a company that seems to have appeared out of nowhere, this is the new Strawberry Root. {n} You can make absolutely anything with this device from a small retro gaming system to a multiplayer touch screen table top arcade, meaning it has hardware capable of all sorts and is set to be released  {0}.".localize().format(General.getETADescription('24/1/1', '24/2/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});