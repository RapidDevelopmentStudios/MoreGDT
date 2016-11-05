var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id : 'Platform_NexisOne',
    name : 'Nexis One',
    company : 'Voogle/HTP',
    startAmount : 1.1,
    unitsSold : 1.4,
    licencePrize : 350000,
    published : '23/1/1',
    platformRetireDate : '23/12/3',
    developmentCosts : 40000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 2,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NexisOne_Announce',
            date : '22/12/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Voogle has just announced a new mobile device named the Nexis One. The company is known for thier search engine, and more recently thier 'Cyborg' Operating System for mobile phones. They have confirmed it is going internal testing. It is designed to compete with Grapples grPhone 3GS, and is designed and manufactured in partnership with HTP and will ship with Cyborg version 2.1 English muffin {0}".localize().format(General.getETADescription('23/1/1', '23/12/3')),
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_NexisS',
    name : 'Nexis S',
    company : 'Voogle/Samsing',
    startAmount : 1.1,
    unitsSold : 1.6,
    licencePrize : 350000,
    published : '23/12/3',
    platformRetireDate : '24/11/3',
    developmentCosts : 50000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 2,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NexisS_Announce',
            date : '23/12/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "After only 10 months on the market, Voogle have demoed a new Nexis device, this time developed with and manufactured by Samsing. It features an increase to 1GB of RAM and ship with the lastest version of the Cyborg Operating System, version 2.3 Ganache.{0}".localize().format(General.getETADescription('23/1/1', '23/12/3')),
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_NebulaNexis',
    name : 'Nexis Nebula',
    company : 'Voogle/Samsing',
    startAmount : 1.3,
    unitsSold : 2.4,
    licencePrize : 350000,
    published : '24/11/3',
    platformRetireDate : '25/11/3',
    developmentCosts : 65000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NebulaNexis_Announce',
            date : '24/11/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_Nexis4',
    name : 'Nexis 4',
    company : 'Voogle/LS',
    startAmount : 1.3,
    unitsSold : 2.5,
    licencePrize : 400000,
    published : '25/11/3',
    platformRetireDate : '26/10/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis4_Announce',
            date : '25/11/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_Nexis5',
    name : 'Nexis 5',
    company : 'Voogle/LS',
    startAmount : 1.3,
    unitsSold : 2.9,
    licencePrize : 400000,
    published : '26/10/3',
    platformRetireDate : '27/10/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis5_Announce',
            date : '26/10/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_Nexis6',
    name : 'Nexis S',
    company : 'Voogle/Steamrola',
    startAmount : 1.3,
    unitsSold : 3.2,
    licencePrize : 400000,
    published : '27/11/3',
    platformRetireDate : '28/10/4',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis6_Announce',
            date : '27/10/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_Nexis5X',
    name : 'Nexis 5X',
    company : 'Voogle/LS',
    startAmount : 1.3,
    unitsSold : 3.2,
    licencePrize : 400000,
    published : '28/10/4',
    platformRetireDate : '29/10/4',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis5X_Announce',
            date : '28/9/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});

GDT.addPlatform({
    id : 'Platform_Nexis6P',
    name : 'Nexis 6P',
    company : 'Voogle/Mywei',
    startAmount : 1.3,
    unitsSold : 3.2,
    licencePrize : 400000,
    published : '28/8/4',
    platformRetireDate : '255/12/4',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 6,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis6P_Announce',
            date : '28/7/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "",
                    image : Placeholder_Icon,
                });
            }
        }
    ]
});