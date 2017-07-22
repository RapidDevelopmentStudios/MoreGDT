var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id : 'Platform_vNidiaArmour',
    name : 'vNidia Armour',
    company : 'vNidia',
    startAmount : 1.1,
    unitsSold : 1.4,
    licencePrize : 350000,
    published : '25/7/4',
    platformRetireDate : '26/12/3',
    developmentCosts : 40000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_vNidiaArmour_Announce',
            //date : '1/1/1',
			date : '25/7/3',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Today vNidia announced a new product, outside of their line of Graphics Cards, this new product is called the vNidia Armour. {n} This product comes in two models, Armour and Armour Pro with $100 difference between them. {n} The key features of this device include support for 4k HDR video, gaming in the cloud or from your PC and having much more powerful hardware than other streaming hardware currently available.".localize().format(General.getETADescription('25/7/3', '25/7/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
                });
            }
        }    
	]
});