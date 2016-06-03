var MoreGDT = {};

//You shouldn't be reading this ( ͡° ͜ʖ ͡°)
//This code is unfinished, therefore, it is not recommended you enable it.
//Enabling this code may or may not lead to errors, crashes and an overall unbalanced game.
//Seriously, don't enable this code.

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Grapintosh.MGDT',
    name: 'Grapintosh',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '4/1/4',
    platformRetireDate: '6/1/3',
    developmentCosts: 5100,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'GrapintoshAnnounce',
        date: '3/12/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "Today Grapple has announced the Grapintosh, a computer with a all in one design. It's come with a GUI by default, unlike standard PC's which come with the MS-CLS command line based OS. It features 128K of RAM and a Enginerola 68000 CPU at 7.8336 MHz {0}".localize().format(General.getETADescription('3/12/3', '4/1/4')),
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'GrapintoshPlus.MGDT',
    name: 'Grapintosh Plus',
    company: 'Grapple',
    startAmount: 0.25,
    unitsSold: 0.36,
    licencePrize: 600000,
    published: '6/1/3',
    platformRetireDate: '9/1/3',
    developmentCosts: 5100,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'GrapintoshPlusAnnounce',
        date: '5/12/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "Grapple have announced a successor to the Grapintosh named the Grapintosh Plus. It features an upgrade to 1MB of RAM compared to 128K in the original. The RAM can also be upgraded to 4MB. The new machine also supports a Parallel SCSI interface, allowing up to seven peripherals to be attached the machine. The floppy drive can now also read 800K floppy disks",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Grapintosh SE.MGDT',
    name: 'Grapintosh SE',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '9/1/3',
    platformRetireDate: '10/10/3',
    developmentCosts: 5150,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'GrapintoshIIAnnounce',
        date: '8/12/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Grapintosh Classic.MGDT',
    name: 'Grapintosh Classic',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '10/10/3',
    platformRetireDate: '13/2/2',
    developmentCosts: 5150,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'GrapintoshClassicAnnounce',
        date: '10/6/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Grapintosh Colour Classic.MGDT',
    name: 'Grapintosh Colour Classic',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '13/2/2',
    platformRetireDate: '15/1/4',
    developmentCosts: 5200,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 3,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'GrapintoshCCAnnounce',
        date: '12/12/4',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Power Grapintosh.MGDT',
    name: 'Power Grapintosh',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '15/1/4',
    platformRetireDate: '18/10/3',
    developmentCosts: 5300,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'PowerGrapintoshAnnounce',
        date: '14/12/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'iGrap C3.MGDT',
    name: 'iGrap C3',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '18/10/3',
    platformRetireDate: '22/1/1',
    developmentCosts: 5400,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'iGrapC3Announce',
        date: '18/7/1',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'iGrap C4.MGDT',
    name: 'iGrap C4',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '22/1/1',
    platformRetireDate: '24/8/4',
    developmentCosts: 5400,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'iGrapC4Announce',
        date: '21/11/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'iGrap C5.MGDT',
    name: 'iGrap C5',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '24/8/4',
    platformRetireDate: '26/1/2',
    developmentCosts: 5400,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'iGrapC5Announce',
        date: '24/3/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'iGrap.MGDT',
    name: 'iGrap',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '26/1/2',
    platformRetireDate: '28/4/4',
    developmentCosts: 6000,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 6,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'iGrap26Announce',
        date: '25/11/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'iGrap2.MGDT',
	name: 'iGrap',
    company: 'Grapple',
    startAmount: 0.27,
    unitsSold: 0.37,
    licencePrize: 600000,
    published: '28/4/4',
    platformRetireDate: '255/12/4',
    developmentCosts: 6000,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
    audienceWeightings: [0.9, 1, 0.6],
    techLevel: 6,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'iGrap28Announce',
        date: '27/12/4',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});