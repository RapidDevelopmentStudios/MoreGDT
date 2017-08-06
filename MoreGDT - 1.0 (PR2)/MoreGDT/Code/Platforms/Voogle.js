var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms


GDT.addPlatform({
    id : 'Platform_Pikzel',
    name : 'Voogle Pikzel',
    company : 'Voogle/HTP',
    startAmount : 2.7,
    unitsSold : 3.5,
    licencePrize : 650000,
    published : '28/10/3',
    platformRetireDate : '255/12/4',
    developmentCosts : 90000,
    genreWeightings : [0.6, 0.6, 0.5, 0.7, 0.4, 0.9],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 6,
    iconUri : Placeholder_Icon,
	events : [{
            id : 'Platform_Pikzel_Announce',
            //date : '1/1/1',
			date : '28/9/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Today Voogle announced a completely new device replacing the Nexis products, the Voogle Pikzel {0}. {n} This device features a new design both in hardware and software, alongside the all new design it features a top of the line Crackdragon 821 SoC with an Adremo 530 GPU and 4GB of LPDDR4 RAM. {n} The built in battery has a capacity of 2,770 mAh in the base model and 3,450 mAh in the XL model, it also features a 12.3MP rear camera and an 8MP front camera. {n} The screen on the base model  is a 5\" 1080p display, whereas the XL model has a 5.5\" 1440p display, both of these are AMOLED displays. {n} Both devices will ship with Cyborg version 7.1 Nutmeg.".localize().format(General.getETADescription('28/9/1', '28/10/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "Next", "Next", "OK"],
                });
            }
        }
    ]
});