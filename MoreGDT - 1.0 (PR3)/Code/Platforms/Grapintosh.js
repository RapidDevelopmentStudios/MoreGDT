 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Grap_Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Grapintosh',
    name: 'Grapintosh',
    company: 'Grapple',
    startAmount: 2.2,
    unitsSold: 2.9,
    licencePrize: 40000,
    published: '1/1/4',
    platformRetireDate: '3/1/3',
    developmentCosts: 15000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Grapintosh_Announce',
		date: '1/1/4',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Today Grapple announced the Grapintosh, a computer with an all-in-one design which makes it more portable. {n} This computer, unlike standard PC's that run MS-CLS, comes with a GUI by default, in terms of hardware it features 128k of RAM and an Enginerola 68000 CPU clocked at 7.8336 MHz with a 400k diskette drive. {n} Finally, it has a 9 inch Monochrome display with a resolution of 512x342 {0}.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshPlus',
    name: 'Grapintosh Plus',
    company: 'Grapple',
    startAmount: 2.4,
    unitsSold: 2.9,
    licencePrize: 40000,
    published: '3/1/3',
    platformRetireDate: '3/11/1',
    developmentCosts: 15000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshPlus_Announce',
		date: '3/1/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Grapple has announced the successor to the Grapintosh, the Grapintosh Plus. {n} Like the previous model this has an Enginerola CPU clocked at 7.8336 MHz and the same display, although, it has an 800k diskette drive and 1024KB of RAM, a huge improvement over the original Grapintosh. {n} Another difference is where the original Grapintosh had built-in RAM the new model has a 30-pin SIMM {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
			});
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshSE',
    name: 'Grapintosh SE',
    company: 'Grapple',
    startAmount: 2.9,
    unitsSold: 3.1,
    licencePrize: 60000,
    published: '3/11/1',
    platformRetireDate: '4/10/3',
    developmentCosts: 15000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshSE_Announce',
        date: '3/11/1',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Today the Grapintosh line of products was updated as Grapple announced the Grapintosh SE. {n} This computer has an Enginerola 68000 CPU clocked at 7.8336 MHz, a choice of 1MB or 2MB of 30-pin SIMM based RAM, and x2 auto 800k diskette drives. However, it still has the same 9 inch monochrome display that all of the previous models have but what differs in this Grapintosh is that it has a built-in 20MB - 40MB HDD using the SCSI interface. {n} This grapintosh also has a differently designed case that makes it stand out from other models. {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshClassic',
    name: 'Grapintosh Classic',
    company: 'Grapple',
    startAmount: 2.6,
    unitsSold: 3.1,
    licencePrize: 60000,
    published: '4/10/3',
    platformRetireDate: '5/2/2',
    developmentCosts: 15000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshClassic_Announce',
        date: '4/10/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "A new Grapintosh was announced by Grapple today which takes on the design of the first Grapintosh to be released but with better hardware and optional addons. {n} Like other Grapintosh computers it has the same 9 inch monochrome display, the same Enginerola 68000 CPU, and a choice between 1MB and 2MB of 30-pin SIMM based RAM, unlike other models though this has 1MB of motherboard RAM and a 1.44MB diskette drive. {n} Even though it is designed to imitate the original Grapintosh some things are slightly different in order to make space for better hardware and addons, for example, instead of having a 40MB HDD you would have an internal 3.5 inch diskette drive. {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshCC',
    name: 'Grapintosh Colour Classic',
    company: 'Grapple',
    startAmount: 2.8,
    unitsSold: 2.9,
    licencePrize: 70000,
    published: '5/2/2',
    platformRetireDate: '5/5/4',
    developmentCosts: 35000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 3,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshCC_Announce',
        date: '5/2/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Today Grapple announced yet another Grapintosh, this one is unlike any previous one though. {n} Right away it has an Enginerola 68030 CPU at 16MHz, 4MB of standard RAM along with 4MB of motherboard RAM in its two RAM slots and 256k of Video RAM used to power the 10 inch colour display that runs at the same resolution as previous models. {n} additionally it comes with a choice of a 40MB, 80MB or 160MB HDD using the SCSI interface, it also features a single 3.5 inch 1.44MB diskette drive {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_PowerGrapintosh',
    name: 'Power Grapintosh',
    company: 'Grapple',
    startAmount: 2.5,
    unitsSold: 2.9,
    licencePrize: 75000,
    published: '5/5/4',
    platformRetireDate: '11/1/1',
    developmentCosts: 45000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_PowerGrapintosh_Announce',
        date: '5/5/4',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "A new kind of Grapintosh was announced today which sets itself apart from the previous models, the Power Grapintosh. {n} this new Grapintosh has an EnergyPC 601 CPU clocked at 90 MHz, it has 8MB of RAM with 4 slots available on the motherboard, 1MB of dedicated Video RAM, and can support a single external display at a resolution of 832x624. {n} It has a 500MB internal HDD using the SCSI interface along with a CD-ROM drive and a 1.44MB diskette drive, it also has three PCI expansion slots and two 3.5 inch expansion slots {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC3',
    name: 'iGrap C3',
    company: 'Grapple',
    startAmount: 2.6,
    unitsSold: 3,
    licencePrize: 100000,
    published: '11/1/1',
    platformRetireDate: '11/8/4',
    developmentCosts: 50000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC3_Announce',
        date: '11/1/1',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Grapple has announced another Grapintosh computer today. {n} This one has an EnergyPC C3 CPU clocked at 233 MHz, it has 32MB RAM with 3 slots on the motherboard and in terms of graphics it has an AGI Anger 3D graphics card with 2MB of standard Video RAM, this Grapintosh supports a single external display with a resolution of 1024x768. {n} In terms of storage it has a 4GB HDD using the IDE/ATA-2 & SCSI interfaces along with a CD-ROM and 1.44MB diskette drive, it also has three PCI expansion slots and two 3.5 inch bays {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC4',
    name: 'iGrap C4',
    company: 'Grapple',
    startAmount: 2.7,
    unitsSold: 3.2,
    licencePrize: 200000,
    published: '11/8/4',
    platformRetireDate: '15/6/3',
    developmentCosts: 60000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC4_Announce',
        date: '11/8/4',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Another Grapintosh was announced by Grapple today. {n} This computer contains a newer generation of EnergyPC CPUs named the EnergyPC C4 and runs at a clockspeed of 400 MHz, internally it has 64MB of standard RAM and has four slots on the motherboard, it contains an mVidia xForce FX 5200 with 16MB of standard Video RAM allowing support for a single external display at a resolution of 1600x1200, it also has a 10GB HDD using the Ultra ATA/33 interface (ATA-4) and has a CD-ROM drive while dropping the diskette drive. {n} Additionally it also allows for expansion using the three PCI ports and five 3.5 inch bays {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC5',
    name: 'iGrap C5',
    company: 'Grapple',
    startAmount: 2.4,
    unitsSold: 2.9,
    licencePrize: 200000,
    published: '15/6/3',
    platformRetireDate: '20/1/2',
    developmentCosts: 70000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC5_Announce',
        date: '15/6/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
				text : "A new Grapintosh computer was announced today by the tech-giant, Grapple. {n} This new computer sports a 1.6 GHz EnergyPC C5 CPU along with 256MB of standard RAM along with four slots on the motherboard, for graphics it has an mVidia xForce 6600 as well as 64MB of Video RAM and from this it supports dual monitors at 1920x1200. {n} For storage it has an 80GB HDD using the SATA interface alongside a CD/DVD combo-drive, and for expansion it has three PCI and AP/BL ports as well as two 3.5 inch bays and a single 5.25 inch bay {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
                image : Placeholder_Icon,
				buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapImtel',
    name: 'iGrap',
    company: 'Grapple',
    startAmount: 2.6,
	/*marketKeyPoints : [{
                    date : "26/1/2",
                    amount : 0.24
                }, {
                    date : "26/6/2",
                    amount : 0.41
                }, {
                    date : "27/1/2",
                    amount : 0.48
                }, {
                    date : "27/6/2",
                    amount : 1.1
                }, {
                    date : "28/1/2",
                    amount : 2.1
                }, {
                    date : "28/6/2",
                    amount : 2.4
                }, {
                    date : "29/1/2",
                    amount : 2.6
                }, {
                    date : "29/6/2",
                    amount : 4.23
                }, {
                    date : "30/1/2",
                    amount : 4.47
                }
            ],
	*/
    unitsSold: 3.2,
    licencePrize: 300000,
    published: '20/1/2',
    platformRetireDate: '255/12/4',
    developmentCosts: 100000,
    genreWeightings: [0.6, 0.7, 0.7, 0.6, 0.8, 0.5],
    audienceWeightings: [0.4, 0.7, 1],
    techLevel: 7,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapImtel_Announce',
        date: '20/1/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                    text : "A new Grapintosh computer was announced by Grapple today with some interesting features. {n} First of all it has an all new Imtel Core Duo clocked at 1.83GHz alongside 512MB of DDR2 RAM and an additional two slots on the motherboard, an AGI graphics card to go with the 128MB of Video RAM that can be used with two displays at high resolutions of 1440x900 and 1920x1200. {n} It has 160GB of internal storage using the SATA interface as well as a CD/DVD combo-drive, however it has no expansion slots unlike previous Grapintosh computers due to its completely different design which has made it smaller and much more portable {0}.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});