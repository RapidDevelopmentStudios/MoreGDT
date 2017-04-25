 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Grapintosh',
    name: 'Grapintosh',
    company: 'Grapple',
    startAmount: 0.32,
    unitsSold: 0.41,
    licencePrize: 20000,
    published: '4/1/4',
    platformRetireDate: '6/1/3',
    developmentCosts: 4500,
    genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.9, 0.4],
    audienceWeightings: [0.7, 0.8, 0.8],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Grapintosh_Announce',
        //date:'1/1/1',
		date: '3/12/3',
        getNotification: function (company) {
            return new Notification({
				header : "Industry News".localize(),
                    text : "Today Grapple announced the Grapintosh, a computer with an all-in-one design which makes it more portable. This computer, unlike standard PC's that run MS-CLS, comes with a GUI by default, in terms of hardware it features 128k of RAM and a Enginerola 68000 CPU clocked at 7.8336 MHz with a 400k diskette drive, finally, it has a 9 inch Monochrome display with a resolution of 512x342 {0}.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 0.415,
    unitsSold: 0.71,
    licencePrize: 25000,
    published: '6/1/3',
    platformRetireDate: '9/1/3',
    developmentCosts: 4500,
    genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.9, 0.4],
    audienceWeightings: [0.6, 0.8, 0.9],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshPlus_Announce',
        
		date: '5/12/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Grapple has announced the successor to the Grapintosh, the Grapintosh Plus. Like the previous model this has a Enginerola CPU clocked at 7.8336 MHz and the same display, however, it has an 800k diskette drive and 1024KB of RAM, a huge improvement over the original Grapintosh. Another difference is where the original Grapintosh had built-in RAM the new model has a 30-pin SIMM {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 0.75,
    unitsSold: 1.02,
    licencePrize: 30000,
    published: '9/1/3',
    platformRetireDate: '10/10/3',
    developmentCosts: 5000,
    genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.9, 0.5],
    audienceWeightings: [0.7, 0.9, 0.9],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshSE_Announce',
        date: '8/12/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Today the Grapintosh line of products was updated as Graapple announced the Grapintosh SE. This computer has a Enginerola 68000 CPU clocked at 7.8336 MHz, a choice of 1MB or 2MB of 30-pin SIMM based RAM, and x2 auto 800k diskette drives. However, it still has the same 9 inch monochrome display that all of the previous models have but what differs in this Grapintosh is that it has a built-in 20MB - 40MB HDD using the SCSI interface. This grapintosh also has a differently designed case that makes it stand out from other models. {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 1.12,
    unitsSold: 1.43,
    licencePrize: 35000,
    published: '10/10/3',
    platformRetireDate: '13/2/2',
    developmentCosts: 5000,
    genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.9, 0.4],
    audienceWeightings: [0.7, 0.8, 0.9],
    techLevel: 2,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshClassic_Announce',
        date: '10/6/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "A new Grapintosh was announced by Grapple today which takes on the design of the first Grapintosh to be released but with better hardware and optional addons. Like other Grapintosh computers it has the same 9 inch monochrome display, the same Enginerola 68000 CPU, and a choice between 1MB and 2MB of 30-pin SIMM based RAM, unlike other models though this has 1MB of motherboard RAM and two slots and a 1.44MB diskette drive, you also have a choice between having an internal 40MB HDD using the SCSI interface. Even though it is designed to imitate the original Grapintosh some things are slightly different in order to make space for better hardware and addons, for example, instead of having a 40MB HDD you would have an internal 3.5 inch bay. {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 1.72,
    unitsSold: 2.01,
    licencePrize: 40000,
    published: '13/2/2',
    platformRetireDate: '15/1/4',
    developmentCosts: 5500,
    genreWeightings: [0.8, 1, 0.8, 0.9, 0.8, 0.7],
    audienceWeightings: [0.6, 0.9, 0.9],
    techLevel: 3,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_GrapintoshCC_Announce',
        date: '12/12/4',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Today Grapple announced yet another Grapintosh, this one is unlike any previous one though. Right away it has a 16 MHz Enginerola 68030 CPU, 4MB of standard RAM along with 4MB of motherboard RAM with its two RAM slots, 256k of Video RAM used to power the 10 inch colour display that runs at the same resolution as previous models, it comes with a choice of 40MB, 80MB or 160MB of HDD space using the SCSI interface, it also features a single 3.5 inch 1.44MB diskette drive {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 2.3,
    unitsSold: 2.59,
    licencePrize: 45000,
    published: '15/1/4',
    platformRetireDate: '18/10/3',
    developmentCosts: 6000,
    genreWeightings: [0.9, 1, 0.6, 0.8, 0.7, 0.8],
    audienceWeightings: [0.5, 0.7, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_PowerGrapintosh_Announce',
        date: '14/12/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "A new kind of Grapintosh was announced today which sets itself apart from the previous models, this new Grapintosh has a EnergyPC 601 CPU clocked at 90 MHz, it has 8MB of RAM with 4 slots available on the motherboard, 1MB of dedicated Video RAM, and can support a single external display at a resolution of 832x624, in terms of HDD capacity it has 500MB using the SCSI interface along with a CD-ROM drive and a 1.44MB diskette drive, it also has 3 PCI expansion slots and 2 3.5 inch expansion slots {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 2.88,
    unitsSold: 3.17,
    licencePrize: 50000,
    published: '18/10/3',
    platformRetireDate: '22/1/1',
    developmentCosts: 6000,
    genreWeightings: [1, 0.8, 0.7, 0.9, 1, 0.8],
    audienceWeightings: [0.7, 0.8, 1],
    techLevel: 4,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC3_Announce',
        date: '18/7/1',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Grapple has announced yet another Grapintosh computer. This one has an EnergyPC C3 CPU clocked at 233 MHz, it has 32MB RAM with 3 slots on the motherboard, in terms of graphics it has an AGI Anger 3D graphics card with 2MB of standard Video RAM, this Grapintosh supported a single external display with a resolution of 1024x768, in terms of storage it had a 4GB HDD using the IDE/ATA-2 & SCSI interfaces along with a CD-ROM and 1.44MB diskette drive, it also had 3 PCI expansion slots and 2 3.5 inch bays {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 3.46,
    unitsSold: 3.75,
    licencePrize: 55000,
    published: '22/1/1',
    platformRetireDate: '24/8/4',
    developmentCosts: 6000,
    genreWeightings: [1, 0.8, 0.7, 0.9, 1, 0.8],
    audienceWeightings: [0.7, 0.9, 1],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC4_Announce',
        date: '21/11/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text : "Another Grapintosh was announced by Grapple today. This computer contains a newer generation of EnergyPC CPUs named the EnergyPC C4 and runs at a clockspeed of 400 MHz, internally it has 64MB of standard RAM and has 4 slots on the motherboard, it contains an mVidia xForce FX 5200 with 16MB of standard Video RAM allowing support for a single external display at a resolution of 1600x1200, it also has a 10GB HDD using the Ultra ATA/33 interface (ATA-4) and has a CD-ROM drive while dropping the diskette drive, it also allows for expansion using the 3 PCI ports and 5 3.5 inch bays {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 3.87,
    unitsSold: 3.98,
    licencePrize: 70000,
    published: '24/8/4',
    platformRetireDate: '26/1/2',
    developmentCosts: 6000,
    genreWeightings: [1, 0.8, 0.7, 0.9, 1, 0.8],
    audienceWeightings: [0.8, 0.9, 1],
    techLevel: 5,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapC5_Announce',
        date: '24/3/3',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "A new iGrap Computer was announced today by the tech-giant, Grapple. This new iGrap sports an EnergyPC C5 processor clocked at 1.6 - 2.1GHz alongside 512MB of RAM which can be increased to 2GB using the two slots on the motherboard, an improvement over the iGrap C4 is the highly increased amount of internal storage reaching 250GB using the Serial ATA interface",
                image: Placeholder_Icon,
					text : "A new Grapintosh computer was announced today by the tech-giant, Grapple. This new computer sports a 1.6 GHz EnergyPC C5 CPU along with 256MB of standard RAM along with 4 slots on the motherboard, for graphics it has an mVidia xForce 6600 as well as 64MB of Video RAM and from this it supports dual monitors at 1920x1200, for storage it has an 80GB HDD using the SATA interface alongside a CD/DVD combo-drive, and for expansion it had 3 PCI and AP/BL ports as well as 2 3.5 inch bays and a single 5.25 inch bay {0}.".localize().format(	General.getETADescription('22/11/2', '23/12/3')),
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
    startAmount: 4.23,
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
    unitsSold: 4.47,
    licencePrize: 65000,
    published: '26/1/2',
    platformRetireDate: '255/12/4',
    developmentCosts: 6500,
    genreWeightings: [0.9, 0.9, 0.8, 0.9, 0.8, 0.7],
    audienceWeightings: [0.7, 0.8, 1],
    techLevel: 6,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapImtel_Announce',
        date: '25/11/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
					text: "Grapple have announced a huge step forward in their Grapintosh product line today with the Imtel iGrap. This new iGrap contains an all new dual-core 2.16GHz processor with 1GB of RAM installed as two 512MB SO-DIMM modules which can be upgraded to 4GB and internal Hard Drive with 250GB of storage on the base model using the Serial ATA interface that the previous iGrap used",
					image: Placeholder_Icon,
					text : "A new Grapintosh computer was announced by Grapple today with some interesting features. First of all it has an all new Intel Core Duo clocked at 1.83GHz alongside 512MB of DDR2 RAM and an additional two slots on the motherboard, an AGI graphics card to go with the 128MB of Video RAM that can be used with two displays at high resolutions of 1440x900 and 1920x1200, it has 160GB of internal storage using the SATA interface as well as a CD/DVD combo-drive, however it has no expansion slots unlike previous Grapintosh computers due to its completely different design which has made it smaller and much more portable {0}.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
            });
        }
    }
    ]
});