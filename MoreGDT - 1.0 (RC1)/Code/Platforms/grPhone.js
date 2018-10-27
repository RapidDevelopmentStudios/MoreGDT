var MoreGDT = {};

//Set grPhone Retire Date
var grPhone = Platforms.allPlatforms.first(function(p){return p.id == 'grPhone';});
    if (grPhone){
        grPhone.platformRetireDate = '20/7/1';
	}


//Image Variables
var Platform_grPhone3G_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone3G.png']
var Platform_grPhone4_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone4.png']
var Platform_grPhone5_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone5.png']
var Platform_grPhone5S_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone5S.png']
var Platform_grPhone6_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone6.png']
var Platform_grPhone7_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPhone/grPhone7.png']
	
//Add Platforms
GDT.addPlatform({
    id : 'Platform_grPhone3G',
    name : 'grPhone 3G',
    company : 'Grapple',
    startAmount : 2,
    unitsSold : 2.3,
    licencePrize : 500000,
    published : '20/7/1',
    platformRetireDate : '21/7/1',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.5, 0.6, 0.4, 0.8],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 2,
    iconUri : Platform_grPhone3G_Icon,
    events : [{
            id : 'Platform_grPhone3G_Announce',
            date : '20/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "".localize().format(General.getETADescription('20/6/2', '20/7/1')),
                    image : Platform_grPhone3G_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone3GS',
    name : 'grPhone 3GS',
    company : 'Grapple',
    startAmount : 2.3,
    unitsSold : 2.5,
    licencePrize : 500000,
    published : '21/6/3',
    platformRetireDate : '22/6/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.5, 0.6, 0.4, 0.8],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 2,
    iconUri : Platform_grPhone3G_Icon,
    events : [{
            id : 'Platform_grPhone3GS_Announce',
            date : '21/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced a successor to the grPhone 3G today, named the grPhone 3GS. It incluudes a 600Mhz ARN Vortex-G8 CPU and 256MB of RAM, compared to 128MB on the previous devices. It will ship with grPhone OS 3 {0}".localize().format(General.getETADescription('21/6/2', '21/6/3')),
                    image : Platform_grPhone3G_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone4',
    name : 'grPhone 4',
    company : 'Grapple',
    startAmount : 2.5,
    unitsSold : 3.1,
    licencePrize : 550000,
    published : '22/6/3',
    platformRetireDate : '23/6/3',
    developmentCosts : 85000,
    genreWeightings : [0.5, 0.6, 0.5, 0.6, 0.4, 0.8],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 3,
    iconUri : Platform_grPhone4_Icon,
    events : [{
            id : 'Platform_grPhone4_Announce',
            date : '22/6/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple have announced a new grPhone today at their press conference. The new phone, named the grPhone 4 features Grapples G4 SOC. It also features 512MB of RAM and a higher resolution screen. It will ship with the newly renamed gOS 4 {0}".localize().format(General.getETADescription('22/6/1', '22/9/3')),
                    image : Platform_grPhone4_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone4S',
    name : 'grPhone 4S',
    company : 'Grapple',
    startAmount : 3.1,
    unitsSold : 3.9,
    licencePrize : 550000,
    published : '23/10/2',
    platformRetireDate : '24/9/2',
    developmentCosts : 85000,
    genreWeightings : [0.5, 0.6, 0.5, 0.6, 0.4, 0.8],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 4,
    iconUri : Platform_grPhone4_Icon,
    events : [{
            id : 'Platform_grPhone4S_Announce',
            date : '23/6/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Today, Grapple announed the successor to the grPhone 4 named the grPhone 4S. It features a dual-core Grapple G5 SOC and DDR2 RAM. It also features a new personal assistant named 'Viri'. It will ship with gOS 5 {0}".localize().format(General.getETADescription('23/6/1', '23/10/2')),
                    image : Platform_grPhone4_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone5',
    name : 'grPhone 5',
    company : 'Grapple',
    startAmount : 3.9,
    unitsSold : 4.3,
    licencePrize : 600000,
    published : '24/9/2',
    platformRetireDate : '25/9/3',
    developmentCosts : 100000,
    genreWeightings : [0.5, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 4,
    iconUri : Platform_grPhone5_Icon,
    events : [{
            id : 'Platform_grPhone5_Announce',
            date : '24/6/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple have just announced the grPhone 5, which is the next device in the long running line of grPhones. It features the new Grapple G6 SOC and features 1GB of RAM. It also comes with a larger screen at 4', compared to 3.5' on previous models, and it replaces the old 30P Dock Connector, in favour of a new port named the 'Thunder' port. It will ship with gOS 6 {0}".localize().format(General.getETADescription('24/6/1', '24/9/2')),
                    image : Platform_grPhone5_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone5s',
    name : 'grPhone 5s',
    company : 'Grapple',
    startAmount : 4.3,
    unitsSold : 4.6,
    licencePrize : 600000,
    published : '25/9/3',
    platformRetireDate : '26/9/3',
    developmentCosts : 100000,
    genreWeightings : [0.5, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 5,
    iconUri : Platform_grPhone5S_Icon,
    events : [{
            id : 'Platform_grPhone5S_announce',
            date : '25/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "The grPhone 5S was announced by Grapple today. It includes the new 64-Bit G7 SOC and features a fingerprint reader built into the home button. It will ship with gOS 7 {0}".localize().format(General.getETADescription('25/9/2', '25/9/3')),
                    image : Platform_grPhone5S_Icon
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone6',
    name : 'grPhone 6',
    company : 'Grapple',
    startAmount : 4.6,
    unitsSold : 4.8,
    licencePrize : 750000,
    published : '26/9/3',
    platformRetireDate : '27/9/1',
    developmentCosts : 100000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 5,
    iconUri : Platform_grPhone6_Icon,
    events : [{
            id : 'Platform_grPhone6_Announce',
            date : '26/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "The grPhone 6 was announced by Grapple today. The new device is powered by the Grapple G8 SOC and the K8 Kinetic Coprocessor. The new phone includes a 4.7' 750p screen. It will ship with gOS 8 {0}".localize().format(General.getETADescription('26/6/2', '26/9/3')),
                    image : Platform_grPhone6_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone6S',
    name : 'grPhone 6s',
    company : 'Grapple',
    startAmount : 4.8,
    unitsSold : 5,
    licencePrize : 750000,
    published : '27/9/3',
    platformRetireDate : '28/9/2',
    developmentCosts : 100000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 6,
    iconUri : Platform_grPhone6_Icon,
    events : [{
            id : 'Platform_grPhone6S_Announce',
            date : '27/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced the successor to the grPhone 6 today, called the grPhone 6S. The new device features the G9 SOC and K9 Kinetic Coprocessor and a PressureSense display. It also features 2GB of DDR4 RAM and an improved fingerprint sensor.{n} The new device also includes a SMCe Flash controller to improve performance of the flash memory. The new phone will ship with gOS 9 {0}".localize().format(General.getETADescription('27/9/2', '27/9/3')),
                    image : Platform_grPhone6_Icon,
                    buttonText : ["Next", "OK"],
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhone7',
    name : 'grPhone 7',
    company : 'Grapple',
    startAmount : 5,
    unitsSold : 5.4,
    licencePrize : 750000,
    published : '28/9/3',
    platformRetireDate : '29/9/2',
    developmentCosts : 100000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 6,
    iconUri : Platform_grPhone7_Icon,
    events : [{
            id : 'Platform_grPhone7_Announce',
            date : '28/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "The grPhone 7 was announced today at the Grapple press conference. It features the all new Quad-Core G10 Fusion SOC, with 2 of the cores being High Preformance, and the other 2 being High Effiency. It also removes the 3.5mm audio jack, with the included headphones now using the Thunder port.{n} It also features stereo speakers and a new pressure senstive home button, meaning the home button no longer has a physical click to it. {0}".localize().format(General.getETADescription('28/9/2', '28/9/3')),
                    image : Platform_grPhone7_Icon,
                    buttonText : ["Next", "OK"],
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhoneX',
    name : 'grPhone X',
    company : 'Grapple',
    startAmount : 4.7,
    unitsSold : 5.2,
    licencePrize : 750000,
    published : '29/9/2',
    platformRetireDate : '30/9/3',
    developmentCosts : 100000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 7,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_grPhoneX_Announce',
            date : '29/9/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Today Grapple announced the all new grPhone X featuring a complete front-side redesign, something which has been in the works for a long time now.{n} The hardware in this new device has also been greatly upgraded, proving to be much more powerful than most other handheld devices on the market today. In terms of the new design it no longer features a home button, this was removed in order to integrate a full-sized display which relies on touch-input from the user. {n} This will surely be a killer device, and best of all there's not much time to wait as it will be released {0}".localize().format(General.getETADescription('29/9/1', '28/9/2')),
                    image : Placeholder_Icon,
                    buttonText : ["Next", "Next", "OK"],
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPhoneXS',
    name : 'grPhone Xs',
    company : 'Grapple',
    startAmount : 4.3,
    unitsSold : 5,
    licencePrize : 750000,
    published : '30/9/3',
    platformRetireDate : '255/12/4',
    developmentCosts : 100000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 7,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_grPhoneXS_Announce',
            date : '30/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "As they annually do, Grapple has announced the next product in their handheld device line: The grPhone Xs.{n} This new device features the same design as the previous grPhone X but with slightly improved hardware that pushes the grPhone Xs to continue the legacy of being the most powerful handheld device. {n} It can easily be assumed that sales will be high for this device, and you can expect to see it on the market  {0}".localize().format(General.getETADescription('30/9/2', '30/9/3')),
                    image : Placeholder_Icon,
                    buttonText : ["Next", "Next", "OK"],
                });
            }
        }
    ]
});