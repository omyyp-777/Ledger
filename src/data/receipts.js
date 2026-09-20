// DEMO DATA ONLY. Replace this file with the organizer-provided dataset before submitting.
// Keep the normalized fields below, or update normalizeReceipt() to match the official schema.
export const receiptTypes = [
  "Music", "Movies & Entertainment", "Places", "Purchases", "Photos",
  "Messages", "Searches", "Events", "Personal Notes"
];

export const receipts = [
  { id:"r01", type:"Music", date:"2017-01-14T02:10:00", title:"Night Drive — The Midnight", detail:"Played on repeat after midnight.", tags:["late-night","music","driving"], location:"Eastbound", mood:"restless" },
  { id:"r02", type:"Places", date:"2017-01-14T02:38:00", title:"24-hour diner", detail:"Stopped for coffee and fries.", tags:["late-night","food","routine"], location:"Marlow Avenue", mood:"restless" },
  { id:"r03", type:"Purchases", date:"2017-01-14T02:51:00", title:"Coffee + fries", detail:"A small receipt from the diner.", tags:["late-night","food","routine"], location:"Marlow Avenue", amount:12.40, mood:"restless" },
  { id:"r04", type:"Photos", date:"2017-01-14T03:03:00", title:"Rain on the windshield", detail:"A blurry photo with streetlights bleeding into the glass.", tags:["late-night","rain","driving"], location:"Marlow Avenue", mood:"restless" },
  { id:"r05", type:"Messages", date:"2017-01-14T03:16:00", title:"“Made it home. Needed that.”", detail:"A saved message sent after the drive.", tags:["late-night","reflection"], mood:"relieved" },
  { id:"r06", type:"Personal Notes", date:"2017-01-15T00:22:00", title:"I think I like the city better when it's quiet.", detail:"A note saved just after midnight.", tags:["late-night","reflection","city"], mood:"reflective" },
  { id:"r07", type:"Events", date:"2017-02-03T19:00:00", title:"Basement show", detail:"Small venue, loud room, familiar faces.", tags:["music","friends","live"], location:"The Lantern", mood:"energized" },
  { id:"r08", type:"Music", date:"2017-02-03T22:14:00", title:"Setlist saved", detail:"Added three songs from the show.", tags:["music","friends","live"], mood:"energized" },
  { id:"r09", type:"Photos", date:"2017-02-03T22:28:00", title:"Blurry crowd photo", detail:"A low-light photo from the encore.", tags:["music","friends","live"], location:"The Lantern", mood:"energized" },
  { id:"r10", type:"Messages", date:"2017-02-04T00:03:00", title:"“Same time next month?”", detail:"A friend follows up about another show.", tags:["music","friends","plans"], mood:"energized" },
  { id:"r11", type:"Searches", date:"2017-03-11T15:30:00", title:"How to start running again", detail:"A search saved to history.", tags:["reset","health","routine"], mood:"hopeful" },
  { id:"r12", type:"Purchases", date:"2017-03-12T11:05:00", title:"Running shoes", detail:"A practical purchase after weeks of searching.", tags:["reset","health","routine"], amount:84.00, mood:"hopeful" },
  { id:"r13", type:"Places", date:"2017-03-18T08:12:00", title:"Riverside trail", detail:"First logged visit in a long time.", tags:["reset","health","routine"], location:"Riverside", mood:"hopeful" },
  { id:"r14", type:"Personal Notes", date:"2017-03-18T09:01:00", title:"Small promises count.", detail:"A short note saved after the walk.", tags:["reset","reflection","health"], mood:"hopeful" },
  { id:"r15", type:"Movies & Entertainment", date:"2017-05-06T21:20:00", title:"Before Sunrise", detail:"Watched late, then looked up the soundtrack.", tags:["romance","film","soundtrack"], mood:"wistful" },
  { id:"r16", type:"Searches", date:"2017-05-06T23:02:00", title:"Before Sunrise soundtrack", detail:"A search shortly after the movie.", tags:["romance","film","soundtrack"], mood:"wistful" },
  { id:"r17", type:"Music", date:"2017-05-07T00:11:00", title:"Come Here — Kath Bloom", detail:"Played after the film.", tags:["romance","film","soundtrack"], mood:"wistful" },
  { id:"r18", type:"Personal Notes", date:"2017-05-07T00:24:00", title:"Some conversations stay with you.", detail:"A note saved that night.", tags:["romance","reflection","film"], mood:"wistful" },
  { id:"r19", type:"Events", date:"2017-08-19T16:00:00", title:"Weekend train out of town", detail:"A day trip with no detailed itinerary.", tags:["travel","friends","summer"], location:"Union Station", mood:"open" },
  { id:"r20", type:"Places", date:"2017-08-19T18:22:00", title:"Seaside bookshop", detail:"Visited while wandering near the water.", tags:["travel","friends","summer"], location:"Harbor Town", mood:"open" },
  { id:"r21", type:"Purchases", date:"2017-08-19T19:10:00", title:"Used poetry collection", detail:"A secondhand book bought on the trip.", tags:["travel","summer","books"], amount:9.50, mood:"open" },
  { id:"r22", type:"Photos", date:"2017-08-19T20:01:00", title:"Last light over the water", detail:"A photo saved from the trip.", tags:["travel","summer","memory"], location:"Harbor Town", mood:"open" },
  { id:"r23", type:"Messages", date:"2017-08-20T10:17:00", title:"“We should do this more often.”", detail:"A message sent the morning after the trip.", tags:["travel","friends","summer"], mood:"open" },
  { id:"r24", type:"Searches", date:"2017-10-02T18:40:00", title:"Cheap flights for November", detail:"A search that appears after several local weekends.", tags:["travel","change","planning"], mood:"curious" },
  { id:"r25", type:"Events", date:"2017-11-11T07:30:00", title:"First solo weekend", detail:"A calendar entry with no companion listed.", tags:["travel","change","solo"], location:"North Station", mood:"curious" },
  { id:"r26", type:"Photos", date:"2017-11-11T17:45:00", title:"Window seat, unfamiliar town", detail:"A photo from a solo trip.", tags:["travel","change","solo"], mood:"curious" },
  { id:"r27", type:"Personal Notes", date:"2017-11-12T08:20:00", title:"Turns out I don't need a plan for every hour.", detail:"A note saved before heading home.", tags:["travel","change","reflection"], mood:"curious" },
  { id:"r28", type:"Movies & Entertainment", date:"2017-12-28T20:05:00", title:"Paterson", detail:"A quiet film watched near year's end.", tags:["routine","film","reflection"], mood:"calm" },
  { id:"r29", type:"Personal Notes", date:"2017-12-31T23:41:00", title:"More ordinary days, please.", detail:"The final note saved that year.", tags:["reflection","routine","year-end"], mood:"calm" }
];

export const stories = [
  {
    id:"story-night",
    title:"The late-night ritual",
    subtitle:"A city that felt different after midnight",
    period:"JAN 14–15 · 2017",
    summary:"A night-drive song, a diner stop, a rain-blurred photo, and a message home cluster into one small ritual. The data suggests that late hours were not just downtime—they were a space to decompress.",
    insight:"Four receipt types converge within about an hour. The note saved the next night echoes the same quiet-city theme.",
    receiptIds:["r01","r02","r03","r04","r05","r06"],
    tags:["late-night","reflection","driving"]
  },
  {
    id:"story-reset",
    title:"A small reset",
    subtitle:"From searching for change to showing up",
    period:"MAR 11–18 · 2017",
    summary:"A search about running is followed by a shoe purchase, a trail visit, and a note about small promises. The sequence reads like a modest intention becoming an actual routine.",
    insight:"Search → purchase → place → note creates a clear action chain across four receipt types.",
    receiptIds:["r11","r12","r13","r14"],
    tags:["reset","health","routine"]
  },
  {
    id:"story-soundtrack",
    title:"A film that kept playing",
    subtitle:"When watching turned into listening",
    period:"MAY 6–7 · 2017",
    summary:"A movie is followed by a soundtrack search, a song play, and a personal note. Entertainment spills into the next day and becomes a small reflective thread.",
    insight:"Three media-related records and a note appear within a short window, connecting entertainment with reflection.",
    receiptIds:["r15","r16","r17","r18"],
    tags:["romance","film","soundtrack"]
  },
  {
    id:"story-away",
    title:"The case for getting away",
    subtitle:"A day trip becomes a bigger idea",
    period:"AUG–NOV · 2017",
    summary:"A shared day trip, a saved message, later flight searches, and a solo weekend suggest a shift from spontaneous outings toward more independent travel.",
    insight:"The travel thread returns months later with a different shape: from shared plans to a solo trip and a note about letting go of structure.",
    receiptIds:["r19","r20","r21","r22","r23","r24","r25","r26","r27"],
    tags:["travel","change","friends"]
  }
];
