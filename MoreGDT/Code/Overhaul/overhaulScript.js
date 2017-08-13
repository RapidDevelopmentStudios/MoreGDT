var MoreGDT_OHA = {};

var platformNames = ["PC", "G64", "TES", "Master V", "Gameling", "Vena Gear", "Vena Oasis", "Super TES", "Playsystem", "TES 64", "DreamVast", "Playsystem 2", "mBox", "gameSphere", "GS", "PPS", "mBox 360", "Nuu", "Playsystem 3", "grPhone", "grPad", "mPad", "Wuu", "OYA", "mBox One", "Playsystem 4", "mBox Next", "Playsystem 5"];
for (var i = 0; i < Platforms.allPlatforms.length; i++) {
    for (var h = 0; h < platformNames.length; h++) {
var platform = Platforms.allPlatforms[i];
        if (platform.id == platformNames[h])
            Platforms.allPlatforms.remove(platform);
    }
}



/* Notification IDs

Media.allScheduledStories = [riseOf64, PCTakesOver, EndOFG64, TESRumour, TESRumour2, TESSuccess, MasterVRumour, MasterVPreAnnouncement, MasterVSuccess, TargetAudiences, MarketingStory, Gameling];
	Media.allScheduledStories.addRange([VenaGear, Oasis, SuperTES, VonnyNinventoAnnouncement1, VonnyNinventoAnnouncement2, PlaySystemAnnouncement, TES64, DreamVast, PlaySystem2Announcement, DreamVastSlowing, mBoxAnnouncement1, mBoxDelayed, Playsystem2Launch, DreamVastDiscontinued,
			gameSphere, GSRumour, NinventoGS, PPSAnnouncement, Gen7Rumours, mBox360, mPad, mPadReport, Nuu, PS3, grPhone, grPad, PS3Hype, wuu, mboxOne, ps4, mboxOnePs4, gameEndNotification, visiorius, growingPCMarket, oya, mboxNext, ps5]);
			
*/
