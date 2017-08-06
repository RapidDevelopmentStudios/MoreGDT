var MoreGDT = {};

//Set grPad Retire Date
var grPad = Platforms.allPlatforms.first(function(p){return p.id == 'grPad';});
    if (grPad){
        grPad.platformRetireDate = '21/7/4';
    }
	
//Image Variables
var Platform_grPad2_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPad2.png']
var Platform_grPad4_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPad4.png']
var Platform_grPadAir_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPad Air.png']
var Platform_grPadAir2_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPad Air 2.png']
var Platform_grPadPro_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPadPro.png']
var Platform_grPadPro105_Icon = [GDT.getRelativePath() + '/../../Img/Platforms/grPad/grPadPro10.5.png']

//Add Platforms
GDT.addPlatform({
    id : 'Platform_grPad2',
    name : 'grPad 2',
    company : 'Grapple',
    startAmount : 2.3,
    unitsSold : 3.8,
    licencePrize : 500000,
    published : '22/3/2',
    platformRetireDate : '23/3/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel : 3,
	iconUri : Platform_grPad2_Icon,
	events : [{
            id : 'Platform_grPad2_Announce',
            date : '22/3/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Today, a new grPad model was announced by Grapple. The new device, named the grPad 2 features a 1GHz ARN Vortex-G9 as part of the Grapple G5 SOC CPU and 512MB of DDR2 Memory. The device will ship with gOS 4.2.1 {0}".localize().format(General.getETADescription('26/3/1', '26/3/2')),
                     image : Platform_grPad2_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPad3',
    name : 'grPad 3',
    company : 'Grapple',
    startAmount : 2.3,
    unitsSold : 3.2,
    licencePrize : 500000,
    published : '23/3/3',
    platformRetireDate : '24/11/1',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel : 3,
    iconUri : Platform_grPad2_Icon,
    events : [{
            id : 'Platform_grPad3_Announce',
            date : '23/3/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced the grPad 3 today. The updated model features a 1GHz Dual-Core ARN Vortex-G9 Chip as part of the Grapple G5X SOC and 1GB of LPDDR2 RAM. The device will ship with gOS 5.1 {0}".localize().format(General.getETADescription('28/3/1', '28/3/3')),
                     image : Platform_grPad2_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPad4',
    name : 'grPad 4',
    company : 'Grapple',
    startAmount : 2.5,
    unitsSold : 3.6,
    licencePrize : 500000,
    published : '24/11/1',
    platformRetireDate : '25/11/1',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel : 4,
    iconUri : Platform_grPad4_Icon,
    events : [{
            id : 'Platform_grPad4_Announce',
            date : '24/10/4',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Less than a year after it's release, the successor to the grPad 3 was revealed today by Grapple. The grPad 4 features the new 1.4GHz Dual-Core Grapple Swift CPU as part of the G6X SOC. It comes with the same RAM configuration as the grPad 3 and will ship with gOS 6.0.1 {0}".localize().format(General.getETADescription('30/10/4', '30/11/1')),
                     image : Platform_grPad4_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPadAir',
    name : 'grPad Air',
    company : 'Grapple',
    startAmount : 2.5,
    unitsSold : 4.0,
    licencePrize : 500000,
    published : '25/11/1',
    platformRetireDate : '26/10/4',
    developmentCosts : 100000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel : 5,
    iconUri : Platform_grPadAir_Icon,
    events : [{
            id : 'Platform_grPadAir_Announce',
            date : '25/10/4',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple revealed the new grPad Air today, and it is the successor to the grPad 4. It features a un-named 1.4GHz CPU as part of the G7 SOC. Grapple have also included a seperate K7 Kinetic Co-Processor to handle movement calculations. It will ship with gOS 7.0.3 {0}".localize().format(General.getETADescription('32/10/4', '32/11/1')),
                     image : Platform_grPadAir_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_grPadAir2',
    name : 'grPad Air 2',
    company : 'Grapple',
    startAmount : 2.5,
    unitsSold : 4.1,
    licencePrize : 500000,
    published : '26/10/4',
    platformRetireDate : '27/3/4',
    developmentCosts : 100000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel : 6,
    iconUri : Platform_grPadAir2_Icon,
    events : [{
            id : 'grPadAir2_Announcement',
            date : '26/10/3',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text: "Grapple announced the new grPad model today, named the grPad Air 2. It features a 1.5GHz Tri-Core ARN-G8 Typhoon CPU as part of the G8X SOC. It also features 2GB of LPDDR3 RAM and a K8 Kinetic Co-Processor and features the fingerprint reader present on grPhones. It will ship with gOS 8.1 {0}".localize().format(General.getETADescription('34/10/3', '34/10/4')),
                     image : Platform_grPadAir2_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id: 'Platform_grPadPro',
    name: 'grPad Pro (9.7 Inch)',
    company: 'Grapple',
    startAmount: 2.6,
    unitsSold: 4.2,
    licencePrize: 500000,
    published: '27/3/4',
    platformRetireDate: '28/3/4',
    developmentCosts: 100000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel: 7,
    iconUri: Platform_grPadPro_Icon,
    events: [{
        id: 'grPadPro9.7_Announcement',
        date: '27/3/3',
        getNotification: function (company) {
           return new Notification({
                header: "Industry News".localize(),
                text: "After 3 years, Grapple announced the new grPad Model today, named the grPad Pro. It features a 2.26GHz Quad-Core ARN-G8 CPU as part of the G9X SOC. It also includes 4GB of LPDDR4 RAM. Grapple are also offering a keyboard and stylus for this model. It will ship with gOS 9.3 {0}".localize().format(General.getETADescription('36/3/3', '36/3/4')),
                image: Platform_grPadPro_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_grPadPro105',
    name: 'grPad Pro (10.5 Inch)',
    company: 'Grapple',
    startAmount: 2.4,
    unitsSold: 4.1,
    licencePrize: 500000,
    published: '28/3/4',
    platformRetireDate: '255/12/4',
    developmentCosts: 100000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.5, 1, 0.8],
    techLevel: 7,
    iconUri: Platform_grPadPro105_Icon,
    events: [{
        id: 'grPadPro105_Announcement',
        date: '28/3/3',
        getNotification: function (company) {
           return new Notification({
                header: "Industry News".localize(),
				text: "Grapple have today announced another iPad model, this time featuring something that no other Grapple device has ever featured. This new device features a display that covers almost the entire front side of it that runs at an amazing 144Hz, this is the best display for mobile devices on the market right now! {0}".localize().format(General.getETADescription('36/3/3', '36/3/4')),
                image: Platform_grPadPro_Icon,
            });
        }
    }
    ]
});