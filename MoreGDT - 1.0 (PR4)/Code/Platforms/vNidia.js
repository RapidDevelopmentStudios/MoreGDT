var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id : 'Platform_vNidiaArmourPortable',
    name : 'vNidia Armour Portable',
    company : 'vNidia',
    startAmount : 3.1,
    unitsSold : 3.2,
    licencePrize : 50000,
    published : '25/7/4',
    platformRetireDate : '26/12/3',
    developmentCosts : 40000,
    genreWeightings : [0.5, 0.7, 0.6, 0.4, 0.7, 1],
    audienceWeightings : [0.4, 0.7, 1],
    techLevel : 4,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_vNidiaArmourPortable_Announce',
            //date : '1/1/1',
			date : '25/7/3',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "A new product has been announced by vNidia today called the vNidia Armour Portable. {n} This is essentially a portable gaming device that features a 5-inch display with a resolution of 1280x720 that can be folded so you can carry it around with you. {n} This device is also powered by vNidia's Pegra 4 CPU and runs on Cyborg Jam Rolly Polly".localize().format(General.getETADescription('25/7/3', '25/7/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
                });
            }
        }    
	]
});

GDT.addPlatform({
    id : 'Platform_vNidiaArmourTV',
    name : 'vNidia Armour TV',
    company : 'vNidia',
    startAmount : 2.9,
    unitsSold : 3,
    licencePrize : 70000,
    published : '25/7/4',
    platformRetireDate : '26/12/3',
    developmentCosts : 55000,
    genreWeightings : [0.4, 0.6, 0.5, 0.3, 0.7, 1],
    audienceWeightings : [0.4, 1, 0.8],
    techLevel : 4,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_vNidiaArmourTV_Announce',
            //date : '1/1/1',
			date : '25/7/3',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Today vNidia announced a new device in their Armour line of products named the vNidia Armour TV. {n} This product is a Cyborg powered TV-based digital media player which came in two models: Armour and Armour Pro, the differences being 16GB flash memory or 500GB HDD. This device uses vNidia's Pegra T1 SoC and runs on Cyborg TV.".localize().format(General.getETADescription('25/7/3', '25/7/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "OK"],
                });
            }
        }    
	]
});