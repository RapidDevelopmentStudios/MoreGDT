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
    published : '22/1/1',
    platformRetireDate : '22/12/3',
    developmentCosts : 40000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NexisOne_Announce',
            //date : '1/1/1',
			date : '21/12/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "At todays Voogle press conference, a new mobile device was announced in partnership with HTP, and it will release {0}.  In terms of specs, it is powered by a Wualcomm Crackdragon QSD8520. {n} This SoC features the Wualcomm Venom CPU clocked at 1 Ghz, with a Adremo 200 GPU. It also comes with 512MB of RAM and 512MB of internal storage, with a MicroSDHC card slot for expandable storage. {n} The battery capacity of the device is 1400 mAh, and it features a 480x800 AMOLED screen. The 5 megapixel camera is capable of 2x digital zoom, with a max resolution of 2592x1944, or 720x480 for video capture. The device will ship with Cyborg version 1.6 English Muffin.".localize().format(General.getETADescription('22/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '22/12/3',
    platformRetireDate : '23/11/3',
    developmentCosts : 50000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NexisS_Announce',
           	//date : '1/1/1',
			date : '22/12/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Less than a year since it's release, a new Nexis device was announced today by Voogle which will be launching {0}. The new device, named the Nexis S is developed in partnership with Samsing. The device is powered by a Samsing Exymos 3 Single SoC. {n} This SoC features a 1 GHz single core ARN Vortex-G8 CPU, with a RealVR SGX540 GPU at 200MHz. 512 MB of RAM is present on the device, with 128MB available to the GPU, and 384 MB available to the OS. 16 GB of internal storage is also present. {n} The screen is 4\" AMOLED \(Super LCD in markets outside of Canada, US and UK\), and features a slight curve to it. The resolution is 800x480. It will ship with Cyborg version 2.3 Gummy Worm.".localize().format(General.getETADescription('23/11/2', '23/12/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '23/11/3',
    platformRetireDate : '24/11/3',
    developmentCosts : 65000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 3,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_NebulaNexis_Announce',
            //date : '1/1/1', 
			date : '23/10/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "The new Nexis device, which will be launching {0} was announced by Voogle today. The device is again developed in parnership with Samsing, and it is powered by the Dallas Devices OPMA 4460 SoC. {n} The SoC contains a 1.2 GHz Dual-Core ARN Vortex-G9 CPU, as well as a RealVR SGX540 at a clock speed of 307 MHz. The phone features 1GB of RAM, as well as 16GB or 32GB of internal storage. A 1850 mAh battery is featured, and the screen is a 1280x720 AMOLED display. {n} A 5MP camera is included on the back, and a 1.3MP camera on the front of the device. The phone will ship with Cyborg version 4.0 Iced Coffee".localize().format(General.getETADescription('24/10/2', '24/11/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '24/11/3',
    platformRetireDate : '25/10/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis4_Announce',
            //date : '1/1/1',
			date : '24/10/4',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News",
                    text : "Voogle has confirmed that a new Nexis device will launch {0}. The new device, named the Nexis 4 is the first Nexis device to be manufactured by LS. The phone is powered by the Wualcomm Crackdragon G4 Pro APQ8064 SoC. {n} The SoC features a Quad-Core Wualcomm Kroit CPU at 1.5 GHz, accompanied by a Adremo 320 GPU at 400 MHz. The phone also comes with 2GB of RAM, as well as 8GB or 16GB of internal storage. The phone is powered by a 2100 mAh Li-Po battery and sports a 4.7\" display with a resolution of 1280x768. {n} A 8MP camera is included on the back of the device, as well as a 1.3MP camera on the front of the phone. Cyborg version 4.2 Jam Rolly Polly will be the operating system that the device will run at launch.".localize().format(General.getETADescription('25/11/2', '25/11/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '25/10/3',
    platformRetireDate : '26/10/3',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 4,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis5_Announce',
            //date: '1/1/1',
			date : '25/9/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Voogle announced the new Nexis phone which will be launching {0}. The phone is called the Nexis 5, and is once again developed in partnership with LS. The phone is powered by the Wualcomm Crackdragon 800 SoC. {n} This SoC contains the Quad-Core Wualcomm Kroit 400 clocked at 2.26 GHz, with a Adremo 330 at 450 MHz. The phone comes with 2GB of RAM, and offers models with 16GB or 32GB of internal storage. A 2300 mAh battery powers the device, and makes use of a 4.95\" 1080p display. {n} The cameras are similar to those in the Nexis 4, sporting a 8MP camera on the back and a 1.3MP camera on the front, however the rear camera has now been updated to support OIS. {n} The device will launch with the new Cyborg update, version 4.4 Kebab.".localize().format(General.getETADescription('26/9/2', '26/10/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '26/11/3',
    platformRetireDate : '27/10/4',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis6_Announce',
            //date: '1/1/1',
			date : '26/10/2',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "Voogle has just confirmed a new Nexis device, this time being developed in partnership with Enginerola. The company has stated the device will be launching {0} and it will be powered by the Wualcomm Crackdragon 805 SoC. {n} This SoC contains a Quad-Core Kroit 450 CPU at 2.7 GHz, with a Adremo 420 GPU. The phone comes with 3GB of RAM, and 32GB or 64GB of internal storage. The battery has also been upgraded tp 3220 mAh. A 5.96\" screen is also present, with an upgraded resolution to 1440p. {n} The rear camera has been upgraded to 13MP, and the front camera upgraded to 2MP. The device will come with Cyborg version 5.0 Lemon Curd.".localize().format(General.getETADescription('27/10/2', '27/11/3')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "OK"],
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
    published : '27/10/4',
    platformRetireDate : '28/10/4',
    developmentCosts : 80000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 5,
    iconUri : Placeholder_Icon,
    events : [{
            id : 'Platform_Nexis5X_Announce',
            //date : '1/1/1',
			date : '27/9/3',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "At todays Voogle conference, two new Nexis devices were announced, with both devices expected to launch {0}. The Nexis 5X \(Co-Developed with LS\) is the cheaper, less powerful device. Whereas the Nexis 6P \(Co-Developed with Mywei\) costs more but has more powerful hardware. {n} The 5X is powered by the Crackdragon 808 SoC, and the 6P is powered by the Crackdragon 810 \(v2.1\) SoC. The 808 contains a hexa-core ARNv8-A CPU @ 1.8 GHz, whereas the 810 features a 2.0 GHz ARNv8-A octo-core CPU. {n} The 5X also comes with 2GB of LPDDR3 RAM and 16GB or 32GB of internal storage, and the 6P will include 3GB of LPDDR4 RAM and 32GB, 64GB or 128GB of internal storage. {n} The battery capacity of the 5X is 2700 mAh, and 3450 mAh on the 6P. Both devices have a 12.3MP rear camera, but the 5X features a 5MP front camera instead of an 8MP camera like on the 6P. The screen on the 5X is a 5.2\" 1080p display, whereas the 6P has a 5.7\" 1440p display. {n} Both devices will ship with Cyborg version 6.0 Maple Syrup.".localize().format(General.getETADescription('28/9/1', '28/10/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "Next", "Next", "OK"],
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
    licencePrize : 350000,
    published : '27/8/4',
    platformRetireDate : '28/12/4',
    developmentCosts : 75000,
    genreWeightings : [0.5, 0.6, 0.8, 0.5, 0.7, 1 ],
    audienceWeightings : [0.9, 1, 0.6],
    techLevel : 6,
    iconUri : Placeholder_Icon,
	events : [{
            id : 'Platform_Nexis6P_Announce',
            //date : '1/1/1',
			date : '27/8/1',
            getNotification : function (company) {
                return new Notification({
                    header : "Industry News".localize(),
                    text : "At todays Voogle conference, two new Nexis devices were announced, with both devices expected to launch {0}. The Nexis 5X \(Co-Developed with LS\) is the cheaper, less powerful device. Whereas the Nexis 6P \(Co-Developed with Mywei\) costs more but has more powerful hardware. {n} The 5X is powered by the Crackdragon 808 SoC, and the 6P is powered by the Crackdragon 810 \(v2.1\) SoC. The 808 contains a hexa-core ARNv8-A CPU @ 1.8 GHz, whereas the 810 features a 2.0 GHz ARNv8-A octo-core CPU. {n} The 5X also comes with 2GB of LPDDR3 RAM and 16GB or 32GB of internal storage, and the 6P will include 3GB of LPDDR4 RAM and 32GB, 64GB or 128GB of internal storage. {n} The battery capacity of the 5X is 2700 mAh, and 3450 mAh on the 6P. Both devices have a 12.3MP rear camera, but the 5X features a 5MP front camera instead of an 8MP camera like on the 6P. The screen on the 5X is a 5.2\" 1080p display, whereas the 6P has a 5.7\" 1440p display. {n} Both devices will ship with Cyborg version 6.0 Maple Syrup.".localize().format(General.getETADescription('28/9/1', '28/10/4')),
                    image : Placeholder_Icon,
					buttonText : ["Next", "Next", "Next", "Next", "OK"],
                });
            }
        }
    ]
});