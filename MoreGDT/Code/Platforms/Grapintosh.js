 var MoreGDT = {};

//Image Variables
var Placeholder_Icon = [GDT.getRelativePath() + '/../../Img/Placeholder/Placeholder.png']

//Add Platforms
GDT.addPlatform({
    id: 'Platform_Grapintosh',
    name: 'Grapintosh',
    company: 'Grapple',
    startAmount: 0.19,
    unitsSold: 5.3,
    licencePrize: 20000,
    published: '4/1/4',
    platformRetireDate: '6/1/3',
    developmentCosts: 5000,
    genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.9, 0.4],
    audienceWeightings: [0.7, 0.8, 0.8],
    techLevel: 1,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_Grapintosh_Announce',
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
    id: 'Platform_GrapintoshPlus',
    name: 'Grapintosh Plus',
    company: 'Grapple',
    startAmount: 0.20,
    unitsSold: 5.3,
    licencePrize: 25000,
    published: '6/1/3',
    platformRetireDate: '9/1/3',
    developmentCosts: 7500,
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
                text: "Grapple have announced a successor to the Grapintosh named the Grapintosh Plus. It features an upgrade to 1MB of RAM compared to 128K in the original. The RAM can also be upgraded to 4MB. The new machine also supports a Parallel SCSI interface, allowing up to seven peripherals to be attached the machine. The floppy drive can now also read 800K floppy disks",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshSE',
    name: 'Grapintosh SE',
    company: 'Grapple',
    startAmount: 0.20,
    unitsSold: 5.3,
    licencePrize: 30000,
    published: '9/1/3',
    platformRetireDate: '10/10/3',
    developmentCosts: 10000,
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
                text: "Grapple have announced the successor to the Grapintosh Plus named the Grapintosh SE. It features an 8MHz processor with a standard of 1MB of RAM which can be upgraded to 4MB due to it featuring 4 RAM slots, in terms of storage it holds a maximum of 20MB on it's SCSI Hard Drive.",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshClassic',
    name: 'Grapintosh Classic',
    company: 'Grapple',
    startAmount: 0.20,
    unitsSold: 5.3,
    licencePrize: 35000,
    published: '10/10/3',
    platformRetireDate: '13/2/2',
    developmentCosts: 10000,
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
                text: "The new Grapintosh was announced by Grapple today named the Grapintosh Classic aiming to be an improvement over the Grapintosh SE. This model still holds the same 8MHz processor as the previous Grapintosh as well as the same amount of RAM and upgrade capabilities but holds two times the amount of storage on the base model",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_GrapintoshCC',
    name: 'Grapintosh Colour Classic',
    company: 'Grapple',
    startAmount: 0.21,
    unitsSold: 5.3,
    licencePrize: 40000,
    published: '13/2/2',
    platformRetireDate: '15/1/4',
    developmentCosts: 10000,
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
                text: "Today Grapple announced a much needed improvement in the Grapintosh line of products with their new Grapintosh Colour Classic. It contains a new 16MHz 32-bit processor with 4MB of RAM as the base option which can be upgraded to 10MB with it's two additional RAM slots, it also comes with a base option of 40MB of storage.",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_PowerGrapintosh',
    name: 'Power Grapintosh',
    company: 'Grapple',
    startAmount: 0.21,
    unitsSold: 5.3,
    licencePrize: 45000,
    published: '15/1/4',
    platformRetireDate: '18/10/3',
    developmentCosts: 25000,
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
                text: "Grapple have announced the successor to the Grapintosh Colour Classic today with a new product named the Power Grapintosh. It has a new 120Mhz EnergyPC processor and 16MB of RAM which can be upgraded to 1GB both which are huge improvements over previous Grapintosh models as well as having a 1.2GB Hard Drive on the same SCSI interface as older Grapintosh models.",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC3',
    name: 'iGrap C3',
    company: 'Grapple',
    startAmount: 0.21,
    unitsSold: 5.3,
    licencePrize: 50000,
    published: '18/10/3',
    platformRetireDate: '22/1/1',
    developmentCosts: 50000,
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
                text: "A new product from Grapple was announced today named the iGrap C3. This updated Grapintosh has a 233MHz EnergyPC processor on the base model along with 32MB of RAM which can be upgraded to 512MB and up to 128GB in terms of storage, it also contains an AGI Anger 128 Ultra with 16MB of SDRAM for improved graphics.",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC4',
    name: 'iGrap C4',
    company: 'Grapple',
    startAmount: 0.21,
    unitsSold: 5.3,
    licencePrize: 55000,
    published: '22/1/1',
    platformRetireDate: '24/8/4',
    developmentCosts: 50000,
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
                text: "Grapple have announced a new product, the iGrap G4 which is aimed to be an improvement over the iGrap G3. It rocks a much faster 700MHz EnergyPC processor with 128MB of RAM upgradable to 256MB along with up to 80GB of internal storage, The iGrap G4 also contains mVidia xForce FX 5200 for enhanced graphics performance",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapC5',
    name: 'iGrap C5',
    company: 'Grapple',
    startAmount: 0.21,
    unitsSold: 5.3,
    licencePrize: 60000,
    published: '24/8/4',
    platformRetireDate: '26/1/2',
    developmentCosts: 75000,
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
            });
        }
    }
    ]
});

GDT.addPlatform({
    id: 'Platform_iGrapImtel',
    name: 'iGrap',
    company: 'Grapple',
    startAmount: 0.22,
	/*marketKeyPoints: [{
					 }]*/
    unitsSold: 5.3,
    licencePrize: 65000,
    published: '26/1/2',
    platformRetireDate: '255/12/4',
    developmentCosts: 100000,
    genreWeightings: [0.9, 0.9, 0.8, 0.9, 0.8, 0.7],
    audienceWeightings: [0.7, 0.8, 1],
    techLevel: 6,
    iconUri: Placeholder_Icon,
    events: [{
        id: 'Platform_iGrapImtel_1stGen_Announce',
        date: '25/11/2',
        getNotification: function (company) {
            return new Notification({
                header: "Industry News".localize(),
                text: "Grapple have announced a huge step forward in their Grapintosh product line today with the Imtel iGrap. This new iGrap contains an all new dual-core 2.16GHz processor with 1GB of RAM installed as two 512MB SO-DIMM modules which can be upgraded to 4GB and internal Hard Drive with 250GB of storage on the base model using the Serial ATA interface that the previous iGrap used",
                image: Placeholder_Icon,
            });
        }
    }
    ]
});