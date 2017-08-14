var MoreGDT_OHA = {};

var platformNames = ["PC", "G64", "TES", "Master V", "Gameling", "Vena Gear", "Vena Oasis", "Super TES", "Playsystem", "TES 64", "DreamVast", "Playsystem 2", "mBox", "gameSphere", "GS", "PPS", "mBox 360", "Nuu", "Playsystem 3", "grPhone", "grPad", "mPad", "Wuu", "OYA", "mBox One", "Playsystem 4", "mBox Next", "Playsystem 5"];

for (var pname = 0; pname < Platforms.allPlatforms.length; pname++) {
    for (var pname2 = 0; pname2 < platformNames.length; pname2++) {
var platform = Platforms.allPlatforms[pname];
        if (platform.id == platformNames[pname2])
            Platforms.allPlatforms.remove(platform);
    }
}

Media.allScheduledStories.splice(0, Media.allScheduledStories.length)
