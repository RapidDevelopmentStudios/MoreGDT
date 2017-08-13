var MoreGDT_OHA = {};

GDT.addPlatform({
    id : 'Platform_GovodoreVIK20',
    name : 'VIK 20',
    company : 'Govodore',
    startAmount : ,
    unitsSold : 3.7,
    licencePrize : 500000,
    published : '20/7/1',
    platformRetireDate : '21/7/1',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
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

