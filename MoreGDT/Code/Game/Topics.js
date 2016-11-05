var MoreGDT = {};

GDT.addTopics([

//A
{
    id: "actingTopic.MGDT",
    name: "Acting".localize("game topic"),
    genreWeightings: [0.6, 0.6, 1, 0.9, 0.7, 0.8],
    audienceWeightings: [0.8, 1, 0.8]
},

{
   	id: "animeTopic.MGDT",
   	name: "Anime".localize("game topic"),
   	genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.6],
   	audienceWeightings: [0.6, 0.7, 1]
},

{ 
	id: "archeryTopic.MGDT",
	name: "Archery".localize("game topic"),
	genreWeightings: [  0.8, 1, 0.9, 1, 0.6, 0.6 ],
	audienceWeightings: [  0.7, 1, 0.8 ]
},

//B

//C
{
    id: "constructionTopic.MGDT",
    name: "Construction".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.7, 1, 0.8, 0.9],
    audienceWeightings: [0.8, 1, 0.8]
},

{ 
	id: "ctfTopic.MGDT",
	name: "Capture the Flag".localize("game topic"),
	genreWeightings: [0.8, 0.8, 0.9, 0.8, 0.9, 1],
	audienceWeightings: [0.9, 1, 0.7]
},

{ 
	id: "classicTopic.MGDT",
	name: "Classic".localize("game topic"),
	genreWeightings: [  1, 0.8, 0.9, 0.7, 0.9, 0.6 ],
	audienceWeightings: [  0.9, 1, 0.7 ]
},

//D
{
	id: "divingTopic.MGDT",
	name: "Diving".localize("game topic"),
	genreWeightings: [0.8, 0.7, 0.7, 1, 0.8, 0.9],
	audienceWeightings: [0.7, 1, 0.7]
},

//E

//F
{
    id: "fishingTopic.MGDT",
    name: "Fishing".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.7, 1, 0.7, 0.9],
    audienceWeightings: [0.8, 1, 0.6]
},

//G
{
    id: "golfTopic.MGDT",
    name: "Golf".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
    audienceWeightings: [0.7, 1, 0.7]
},

//H

//I

//J

//J

//K
{ 
	id: "kingTopic.MGDT",
	name: "King".localize("game topic"),
	genreWeightings: [0.6, 0.6, 0.9, 1, 0.6, 0.8],
	audienceWeightings: [0.9, 0.8, 0.8]
},

//L
{ 
    id: "lpTopic.MGDT", 
    name: "Let's Play".localize("game topic"), 
    genreWeightings: [.6, .6, .6, 1, .8, .9], 
    audienceWeightings: [0.8, 1, 0.8] 
},

//M
{
    id: "mechanicTopic.MGDT",
    name: "Mechanic".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.9, 1, 0.9, 1],
    audienceWeightings: [1, 0.8, 0.7]
},

//N

//O

//P
{
    id: "parkourTopic.MGDT",
    name: "Parkour".localize("game topic"),
    genreWeightings: [1, 1, 0.7, 1, 0.9, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
},

{
    id: "pinballTopic.MGDT",
    name: "Pinball".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.6, 0.9, 0.8, 1],
    audienceWeightings: [0.8, 1, 0.7]
},

//Q

//R
{
    id: "rockbandTopic.MGDT",
    name: "Rockband".localize("game topic"),
    genreWeightings: [0.6, 0.6, 0.8, 1, 0.7, 0.9],
    audienceWeightings: [0.7, 0.9, 1]
},

{ 
	id: "rollercoasterTopic.MGDT",
	name: "Roller Coaster".localize("game topic"),
	genreWeightings: [  1, 0.8, 0.9, 0.7, 0.9, 0.6 ],
	audienceWeightings: [  0.9, 1, 0.7 ]
},

{ 
	id: "robotsandmechanics.MGDT",
	name: "Robots/Mechanics".localize("game topic"),
	genreWeightings: [  1, 0.8, 0.9, 0.7, 0.9, 0.6 ],
	audienceWeightings: [  0.9, 1, 0.7 ]
},

//S
{
    id: "snowboardingTopic.MGDT",
    name: "Snowboarding".localize("game topic"),
    genreWeightings: [0.6, 0.9, 0.7, 1, 0.7, 0.8],
    audienceWeightings: [0.8, 1, 0.8]
},

{
    id: "stealthTopic.MGDT",
    name: "Stealth".localize("game topic"),
    genreWeightings: [1, 0.8, 0.8, 1, 0.9, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
},

{ 
	id: "snipingTopic.MGDT",
	name: "Sniping".localize("game topic"),
	genreWeightings: [  1, 0.9, 0.9, 0.9, 0.8, 0.6 ],
	audienceWeightings: [  0.6, 0.8, 1 ]
},

//T
{
    id: "thiefTopic.MGDT",
    name: "Thief".localize("game topic"),
    genreWeightings: [1, 0.7, 1, 0.9, 0.8, 0.6],
    audienceWeightings: [0.7, 0.8, 1]
},

//U

//V
{ 
    id: "videomakerTopic.MGDT", 
    name: "Video Creator".localize("game topic"), 
    genreWeightings: [.6, .6, .6, 1, .8, .9], 
    audienceWeightings: [0.8, 1, 0.8] 
},

//W
{ 
    id: "wrestlingTopic.MGDT", 
    name: "Wrestling".localize("game topic"), 
    genreWeightings: [.9, .6, .6, 1, .6, .8], 
    audienceWeightings: [0.9, 1, 0.6] 
},

{ 
	id: "worlddomination.MGDT",
	name: "World Domination".localize("game topic"),
	genreWeightings: [  1, 0.8, 0.9, 0.7, 0.9, 0.6 ],
	audienceWeightings: [  0.9, 1, 0.7 ]
},

//X

//Y

//Z

]);