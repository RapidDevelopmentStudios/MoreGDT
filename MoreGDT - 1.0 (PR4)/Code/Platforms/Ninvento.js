var MoreGDT = {};

//Gameling Retire Date 
var Gameling = Platforms.allPlatforms.first(function(p){return p.id == 'Gameling';});
    if (Gameling){
        Gameling.platformRetireDate = '10/11/3';
    }
    
var GS = Platforms.allPlatforms.first(function(p){return p.id == 'GS';});
    if (GS){
        GS.platformRetireDate = '13/6/2';
	}

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Ninvento Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Ninvento_PlayAndView',
    name: 'Play and View',
    company: 'Ninvento',
    startAmount: 0.2,
    unitsSold: 0.4,
    licencePrize: 0,
    published: '1/1/1',
    platformRetireDate: '4/2/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 1,
    iconUri: Placeholder_Icon,
});

GDT.addPlatform({
    id: 'Platform_Ninvento_Reality_Boy',
    name: 'Reality Boy',
    company: 'Ninvento',
    startAmount: 0.51,
    unitsSold: 0.59,
    licencePrize: 10000,
    published: '8/6/4',
    platformRetireDate: '8/12/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_Reality_Boy_Announce',
        //date:'1/1/1',
		date: '8/5/4',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Ninvento has released another gaming console, this one called the Ninvento Reality Boy. {n} This gaming console has a feature never seen before in any gaming console, 'true' 3D graphics. The player looks through an eyepiece and then an eyeglass-style projector allows viewing of the monochromatic image, which is red. {n} We're not sure how well this platform will do but only time will tell. {0}.".localize().format(General.getETADescription('8/5/4', '8/6/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

//ANTI-MONOCHROME!
GDT.addPlatform({
    id: 'Platform_Ninvento_Gameling_AntiMonochrome',
    name: 'Gameling Spectrum',
    company: 'Ninvento',
    startAmount: 0.8,
    unitsSold: 1.2,
    licencePrize: 10000,
    published: '10/11/3',
    platformRetireDate: '13/6/2',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_Gameling_AntiMonochrome_Announce',
        //date:'1/1/1',
		date: '10/10/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Today Ninvento released the successor to the Gameling, the Gameling Spectrum. {n} This new handheld device features an all new colour display, a slightly redesigned look to it, and is overall smaller than the original Gameling. {0}.".localize().format(General.getETADescription('10/10/2', '10/11/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_Gameling_Retreat',
    name: 'Gameling Retreat',
    company: 'Ninvento',
    startAmount: 1.2,
    unitsSold: 1.7,
    licencePrize: 10000,
    published: '13/6/2',
    platformRetireDate: '20/8/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_Gameling_Retreat_Announce',
        //date:'1/1/1',
		date: '13/5/3',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "A new handheld device by Ninvento was announced today as the successor to the Gameling Spectrum, the Gameling Retreat. {n} The Gameling Retreat is an improvement in a couple of ways.First of all this device has a backlit display so that you can better see what you're doing, and also has a built in rechargable battery so you're not always replacing them when they run out. {0}.".localize().format(General.getETADescription('13/5/3', '13/6/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_GS_Slim',
    name: 'GS Slim',
    company: 'Ninvento',
    startAmount: 0.8,
    unitsSold: 2.1,
    licencePrize: 10000,
    published: '13/6/2',
    platformRetireDate: '21/4/1',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_GS_Slim_Announce',
        //date:'1/1/1',
		date: '13/5/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Ninvento has today announced the successor to the Ninvento GS, the Ninvento GS Slim. {n} As the name suggests this is a slimer, lighter and more lightweight version of the original GS. {0}.".localize().format(General.getETADescription('13/5/3', '13/6/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_GSe',
    name: 'GSe',
    company: 'Ninvento',
    startAmount: 2.1,
    unitsSold: 2.3,
    licencePrize: 10000,
    published: '21/4/1',
    platformRetireDate: '23/3/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_GSe_Announce',
        //date:'1/1/1',
		date: '21/3/1',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Today Ninvento released a new handheld console to their GS line of products, the Ninvento GSe. {n} The reasoning for the name is quite interesting, the 'e' has two different meanings, those being that the device has two cameras which are it's 'eyes' and that the device is for 'everybody' and not just a specific set of people. It also features a huge increase of internal storage which will be useful alongside the launch of the Ninvento GSe Store on the device. {0}.".localize().format(General.getETADescription('21/3/1', '21/4/1')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_GS3D',
    name: 'GS3D',
    company: 'Ninvento',
    startAmount: 2.3,
    unitsSold: 4.1,
    licencePrize: 10000,
    published: '23/3/4',
    platformRetireDate: '26/5/1',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_GS3D_Announce',
        //date:'1/1/1',
		date: '23/2/4',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Soon after the release of the GSe, Ninvento has today announced the GS3D. {n} This new handheld device does what no other has done before, actually, quite like the Reality Boy but better. This device can play games in stereoscopic 3D but without the need for glasses or any other accessories, which gives the device the potential for some groundbreaking games. {0}.".localize().format(General.getETADescription('23/2/4', '23/3/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_GS2D',
    name: 'GS2D',
    company: 'Ninvento',
    startAmount: 1.8,
    unitsSold: 3.8,
    licencePrize: 10000,
    published: '23/8/2',
    platformRetireDate: '28/8/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_GS2D_Announce',
        //date:'1/1/1',
		date: '23/7/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Another GS system has been announced by Ninvento today, this one being named the GS2D. {n} The GS2D is designed for people who didn't want the stereoscopic 3D feature of the GS3D and so to save money Ninvento has brought in a system that removes that feature but can still play those games (in 2D), it also features a different physical design, the device itself is flat unlike all previous models. {0}.".localize().format(General.getETADescription('23/7/2', '23/8/2')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_GS3D+',
    name: 'GS3D+',
    company: 'Ninvento',
    startAmount: 4.1,
    unitsSold: 5.5,
    licencePrize: 10000,
    published: '26/5/1',
    platformRetireDate: '255/12/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_GS3D+_Announce',
        //date:'1/1/1',
		date: '26/4/1',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "After many years since the first one, Ninvento has released a new GS3D, this one named the GS3D+. {n} This model has an improved overall design and much more powerful internals so it can run better games with better graphics and more content, all in a handheld device. {0}.".localize().format(General.getETADescription('26/4/1', '26/5/1')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_Ninvento_Twist',
    name: 'Twist',
    company: 'Ninvento',
    startAmount: 4.2,
    unitsSold: 5.5,
    licencePrize: 100000,
    published: '29/3/1',
    platformRetireDate: '255/12/4',
    developmentCosts: 15000,
    genreWeightings: [0.9, 0.6, 0.6, 0.6, 0.8, 0.7],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 7,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Ninvento_Twist_Announce',
        //date:'1/1/1',
		date: '29/2/2',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Ninvento has today released a new product to the public named the Ninvento Twist. {n} What makes this console special is that it can be both used as a home gaming console and taken around with you by simply charging it up and taking it with you, the player can use the joy cons on the side of the device when they're out and then connect them together and use them as a wireless controller when they're at home. {0}.".localize().format(General.getETADescription('29/2/2', '29/3/1')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
            });
        }
    }
    ]
});