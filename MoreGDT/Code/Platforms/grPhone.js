var MoreGDT = {};

//Set grPhone Retire Date
var grPhone = Platforms.allPlatforms.first(function(p){return p.id == 'grPhone';});
    if (grPhone){
        grPhone.platformRetireDate = '20/7/1';
	}

//Image Variables
var grPhone3G_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone3G.png']
var grPhone4_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone4.png']
var grPhone5_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone5.png']
var grPhone5S_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone5S.png']
var grPhone6_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone6.png']
	
//Add Platforms
GDT.addPlatform({
    id : 'grPhone3G.MGDT',
    name : 'grPhone 3G',
    company : 'Grapple',
    startAmount : 2.3,
    unitsSold : 3.7,
    licencePrize : 500000,
    published : '20/7/1',
    platformRetireDate : '22/7/1',
    developmentCosts : 80000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : grPhone3G_Icon,
    events : [{
            id : 'grPhone3G_Announce',
            date : '20/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Grapple announced the successor to the grPhone today, named the grPhone 3G. It's internals are the same as the grPhone however this model includes 3G Mobile Networking. It will ship with an updated OS named grPhone OS 2 {0}".localize().format(General.getETADescription('20/6/2', '20/7/1')),
                    image : grPhone3G_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone3GS.MGDT',
    name : 'grPhone 3GS',
    company : 'Grapple',
    startAmount : 2.3,
    unitsSold : 3.7,
    licencePrize : 500000,
    published : '22/6/3',
    platformRetireDate : '24/6/3',
    developmentCosts : 80000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : grPhone3G_Icon,
    events : [{
            id : 'grPhone3GS_Announce',
            date : '22/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced a successor to the grPhone 3G today, named the grPhone 3GS. It incluudes a 600Mhz ARN Vortex-G8 CPU and 256MB of RAM, compared to 128MB on the previous devices. It will ship with grPhone OS 3 {0}".localize().format(General.getETADescription('22/6/2', '22/6/3')),
                    image : grPhone3G_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone4.MGDT',
    name : 'grPhone 4',
    company : 'Grapple',
    startAmount : 2.4,
    unitsSold : 3.8,
    licencePrize : 550000,
    published : '24/6/3',
    platformRetireDate : '26/6/3',
    developmentCosts : 85000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : grPhone4_Icon,
    events : [{
            id : 'grPhone4_Announce',
            date : '24/6/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple have announced a new grPhone today at their press conference. The new phone, named the grPhone 4 features Grapples G4 SOC. It also features 512MB of RAM and a higher resolution screen. It will ship with the newly renamed gOS 4 {0}".localize().format(General.getETADescription('24/6/1', '24/9/3')),
                    image : grPhone4_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone4S.MGDT',
    name : 'grPhone 4S',
    company : 'Grapple',
    startAmount : 2.4,
    unitsSold : 3.8,
    licencePrize : 550000,
    published : '26/10/2',
    platformRetireDate : '28/9/2',
    developmentCosts : 85000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : grPhone4_Icon,
    events : [{
            id : 'grPhone4S_Announce',
            date : '26/6/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Today, Grapple announed the successor to the grPhone 4 named the grPhone 4S. It features a dual-core Grapple G5 SOC and DDR2 RAM. It also features a new personal assistant named 'Viri'. It will ship with gOS 5 {0}".localize().format(General.getETADescription('26/6/1', '26/10/2')),
                    image : grPhone4_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone5.MGDT',
    name : 'grPhone 5',
    company : 'Grapple',
    startAmount : 2.6,
    unitsSold : 3.9,
    licencePrize : 600000,
    published : '28/9/2',
    platformRetireDate : '30/9/3',
    developmentCosts : 100000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : grPhone5_Icon,
    events : [{
            id : 'grPhone5_Announce',
            date : '28/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple have just announced the grPhone 5, which is the next device in the long running line of grPhones. It features the new Grapple G6 SOC and features 1GB of RAM. It also comes with a larger screen at 4', compared to 3.5' on previous models. It will ship with gOS 6 {0}".localize().format(General.getETADescription('28/6/1', '28/9/2')),
                    image : grPhone5_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone5s.MGDT',
    name : 'grPhone 5s',
    company : 'Grapple',
    startAmount : 2.6,
    unitsSold : 3.9,
    licencePrize : 600000,
    published : '30/9/3',
    platformRetireDate : '32/9/3',
    developmentCosts : 100000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : grPhone5S_Icon,
    events : [{
            id : 'grPhone5S_announce',
            date : '30/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "The grPhone 5S was announced by Grapple today. It includes the new 64-Bit G7 SOC and features a fingerprint reader built into the home button. It will ship with gOS 7 {0}".localize().format(General.getETADescription('30/9/2', '30/9/3')),
                    image : grPhone5S_Icon
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone6.MGDT',
    name : 'grPhone 6',
    company : 'Grapple',
    startAmount : 3,
    unitsSold : 4.2,
    licencePrize : 750000,
    published : '32/9/3',
    platformRetireDate : '34/9/1',
    developmentCosts : 100000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : grPhone6_Icon,
    events : [{
            id : 'grPhone66P_Announce',
            date : '32/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "The grPhone 6 was announced by Grapple today. The new device is powered by the Grapple G8 SOC and the K8 Kinetic Coprocessor. The new phone includes a 4.7' 750p screen. It will ship with gOS 8 {0}".localize().format(General.getETADescription('32/6/2', '32/9/3')),
                    image : grPhone6_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'grPhone6S.MGDT',
    name : 'grPhone 6s',
    company : 'Grapple',
    startAmount : 3.1,
    unitsSold : 4.3,
    licencePrize : 750000,
    published : '34/9/3',
    platformRetireDate : '255/12/4',
    developmentCosts : 100000,
    genreWeightings : [0.8, 0.8, 0.7, 0.9, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : grPhone6_Icon,
    events : [{
            id : 'grPhone6S6SP_Announce',
            date : '34/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced the successor to the grPhone 6 today, called the grPhone 6S. The new device features the G9 SOC and K9 Kinetic Coprocessor and a PressureSense display. It also features 2GB of DDR4 RAM and an improved fingerprint sensor.{n} The new device also include a SMCe Flash controller to improve performance of the flash memory. The new phone will ship with gOS 9 {0}".localize().format(General.getETADescription('34/9/2', '34/9/3')),
                    image : grPhone6_Icon,
                });
            }
        }
    ]
});