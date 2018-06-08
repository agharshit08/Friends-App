'use strict';
// Import the Dialogflow module from the Actions on Google client library.
const { dialogflow,
        BasicCard,
        Image,
        Suggestions,
        MediaObject
 } = require('actions-on-google');

 // Suggestion Chips
 const suggestionChips = [
     'Joey',
     'Chandler',
     'Phoebe',
     'Ross',
     'Monica',
     'Rachel',
 ];

 // Setting Audio for Application.
 const welcomesong = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/videoplayback%20(audio-cutter.com).mp3';
 const themeSong = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/videoplayback.ogg';
 const JoeySound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Joey%20Intro.mp3';
 const RossSound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20Hi.ogg';
 const PhoebeSound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Phoebe.mp3';
 const smellyCat = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Smelly%20Cat.mp3';
 const stickyShoes = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/sticky%20shoes.ogg'; 
 const phoebeEvolution = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20Phoebe%20and%20Evolution%20(audio-cutter.com).mp3';
 const redRoss = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20Rugby%20or%20Red%20Ross%20(audio-cutter.com).mp3';
 const chandlerHyp = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20When%20Chandler%20Gets%20Hypnotized%20-%20Friends%20TV%20Show%20Best%20Scenes%20(audio-cutter.com).mp3';
 const phoebeAnnoyed = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Joey%20and%20pheebs%20(audio-cutter.com).mp3';
 const phoebeOnCM = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/scream%202.mp3';
 const rossFightMonica = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20and%20Monica%20fight%20(audio-cutter.com).mp3';
 const phoebeScream = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/scream%201.mp3';
 const unagi = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/unagi%20(audio-cutter.com).mp3';
 const funnyRoss = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Funny%20ross%20(audio-cutter.com).mp3';
 const rossToRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20and%20Rachel%20(audio-cutter.com).mp3';
 const Ad = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/AD.mp3';
 const auntRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/aunt%20Rachel.mp3';
 const competitive = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/competitive%20(audio-cutter.com).mp3';
 const joeyAndChandler = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/couch%20(audio-cutter.com).mp3';
 const drunkMonica = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/drunk.mp3';
 const humble = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/EROTIC%20(audio-cutter.com).mp3';
 const singing = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Everybody%20singing.mp3';
 const food= 'https://storage.googleapis.com/friends-ab0a7.appspot.com/food.mp3';
 const foosballs = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/foosballs.mp3';
 const freak = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/freak.mp3';
 const reactions = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/joey%20finds%20out.mp3';
 const joeyToRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/joey%20to%20rachel.mp3';
 const missing = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Missing.mp3';
 const monicaBang = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Monica%20bang.mp3';
 const monlander = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Monlander.mp3';
 const tips = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/tips.mp3';
 const secrets1 = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Secrets%20Part%201.mp3';
 const secrets2 = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Secrets%20part%202.mp3';
 const test = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/test.mp3';

 // Image URLs
 const welcomeMonicaImg = 'https://pbs.twimg.com/profile_images/925178476294008832/DtpuzUhl_400x400.jpg';
 const drunkImg = 'http://images1.fanpop.com/images/polls/72651_1209078724210_full.jpg';
 const freakImg = 'https://598d5fcf392acad97538-395e64798090ee0a3a571e8c148d44f2.ssl.cf1.rackcdn.com/8186877_heres-one-thing-about-monicas-apartment_a798b9d4_m.jpg?bg=613F41';
 const monicaBangImg  = 'https://i.ytimg.com/vi/wCoKdpD8SoM/hqdefault.jpg';
 const competitiveImg = 'https://pbs.twimg.com/profile_images/925178476294008832/DtpuzUhl_400x400.jpg';
 const monlanderImg = 'http://www1.pictures.zimbio.com/mp/ZoLJndz7blel.jpg';
 const foosballsImg = 'https://i.ytimg.com/vi/nmffQHjweuc/hqdefault.jpg';
 const chandlerImg = 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w710.h473.2x.jpg';
 const secretsImg = 'https://i.ytimg.com/vi/ePQu9GVe7kY/maxresdefault.jpg';
 const tipsImg = 'http://www.newlovetimes.com/wp-content/uploads/2015/04/friends1.jpg';
 const hypImg = 'https://vignette.wikia.nocookie.net/friends/images/1/1c/TOWTHypnosisTape.png/revision/latest?cb=20180214113711';
 const joeyImg = 'https://vignette.wikia.nocookie.net/friends/images/6/61/Joey_friends.jpg/revision/latest?cb=20130523190938';
 const reactionImg = 'https://i.ytimg.com/vi/bIIm7yBdUG4/hqdefault.jpg';
 const missingImg = 'http://static.dnaindia.com/sites/default/files/styles/full/public/2016/07/25/485370-chandler-and-joey-tumblr.jpg';
 const foodImg = 'https://i.ytimg.com/vi/8PbZNmv2bQM/maxresdefault.jpg';
 const adImg = 'https://i.ytimg.com/vi/FZ91xAgKh5U/maxresdefault.jpg';
 const joeyToRachelImg = 'http://snappa.static.pressassociation.io/assets/2014/09/11104152/1410428511-3a5dd63ab22757f4f3fe91bf4fd73176-600x338.jpg';
 const rossImg = 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg';
 const redRossImg = 'https://i.pinimg.com/originals/d3/0b/1d/d30b1d1444fe74c881affeb0476b8c54.jpg';
 const fightWithMonImg = 'https://images.news18.com/ibnlive/uploads/2015/08/Wrestling.jpg';
 const funnyManImg = 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg';
 const rossToRachelImg = 'https://imgix.bustle.com/rehost/2016/9/13/30524b1f-782f-4d82-b9a0-214413396cb5.jpg';
 const rachelGreenImg = 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70';
 const auntImg = 'https://s.yimg.com/ny/api/res/1.2/V7m_HG1db895z0Roi3ZrKA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9NzAz/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5fd63fffa0e3062176ed1b04f6d0f94b';
 const testImg = 'https://images.hellogiggles.com/uploads/2016/01/25032510/friends-embryos.jpg'; 
 const everybodyImg = 'http://los40es00.epimg.net/los40/imagenes/2016/08/25/cinetv/1472082207_045371_1472083720_noticia_normal.jpg';
 const humbleImg = 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70';
 const phoebeImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';
 const smellyCatImg = 'https://vignette.wikia.nocookie.net/friends/images/c/c2/Smelly_Cat.jpg/revision/latest?cb=20170222183246';
 const stickyShoesImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';
 const evloutionImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';  
 const screamingImg = 'https://s-media-cache-ak0.pinimg.com/564x/81/56/39/815639bb9c01127c758cb3b159aad276.jpg';

 // Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

// Welcome Intent.
app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`<speak><audio src="${welcomesong}"></audio>`
        + `Welcome! Who is your favourite character among Joey, Chandler, Monica, Rachel, Ross or Phoebe?</speak>`);
});

// -------------------------------------------Monica Geller ACTIONS-------------------------------------
app.intent('Monica', (conv, { Monica }) => {
    conv.ask(`<speak>Let's talk to monica</speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Monica Geller',
        image: new Image({
            url:'https://pbs.twimg.com/profile_images/925178476294008832/DtpuzUhl_400x400.jpg',
            alt: 'Monica'
        }),
      }));
      conv.ask(`<speak>Please select from the following options</speak>`);
      conv.ask(new Suggestions(['Bang','Freak','Competitive','Drunk','Monlander','Foosballs']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display');
    }
});

//Drunk
app.intent('Drunk', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Monica got drunk.` );      
    conv.ask(new MediaObject({
        name: 'Monica got drunk.',
        url: `${drunkMonica}`,
        icon: new Image({
            url: 'http://images1.fanpop.com/images/polls/72651_1209078724210_full.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Bang','Freak','Competitive','Monlander','Foosballs']));     
});

//Freak
app.intent('Freak', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Monica freak out` );      
    conv.ask(new MediaObject({
        name: 'Monica freak out',
        url: `${freak}`,
        icon: new Image({
            url: 'https://598d5fcf392acad97538-395e64798090ee0a3a571e8c148d44f2.ssl.cf1.rackcdn.com/8186877_heres-one-thing-about-monicas-apartment_a798b9d4_m.jpg?bg=613F41',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Bang','Drunk','Competitive','Monlander','Foosballs']));     
});


//Monica Bang
app.intent('Bang', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ben speaking Monica Bang!`);      
    conv.ask(new MediaObject({
        name: 'Monica Bang',
        url: `${monicaBang}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/wCoKdpD8SoM/hqdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Monlander','Drunk','Competitive','Freak','Foosballs']));     
});

//Competitive
app.intent('Competitive', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Monica is very competitive!`);      
    conv.ask(new MediaObject({
        name: 'Competitive Monica',
        url: `${competitive}`,
        icon: new Image({
            url: 'https://pbs.twimg.com/profile_images/925178476294008832/DtpuzUhl_400x400.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Monlander','Foosballs','Bang','Freak','Drunk']));     
});


//Monlander
app.intent('Monlander', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Chandler proposing Monica`);      
    conv.ask(new MediaObject({
        name: 'Chandler proposing Monica',
        url: `${monlander}`,
        icon: new Image({
            url: 'http://www1.pictures.zimbio.com/mp/ZoLJndz7blel.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Foosballs','Test','Drunk','Bang','Freak','Competitive']));     
});


//Foosballs
app.intent('Foosballs', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Monica playing Foosballs`);      
    conv.ask(new MediaObject({
        name: 'Monica playing Foosballs',
        url: `${foosballs}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/nmffQHjweuc/hqdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Test','Drunk','Bang','Freak','Monlander']));     
});

//-----------------------------------------Chandler Bing Actions-------------------------------
app.intent('Chandler', (conv, { Chandler }) => {
    conv.ask(`<speak>Let's talk to Chandler</speak>`);

    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Chandler Bing',
        image: new Image({
            url:'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w710.h473.2x.jpg',
            alt: 'Chandler',
        }),
      }));
    conv.ask(`<speak>Please select from the following options</speak>`);
    conv.ask(new Suggestions(['Secrets One','Secrets Two','Tips','Monlander','Hypnotized']));     }
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display');
    }

});

// Secrets One
app.intent('Secrets One', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Part one of secrets of Chandler, Ross and Monica`);      
    conv.ask(new MediaObject({
        name: `Secrets`,
        url: `${secrets1}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/ePQu9GVe7kY/maxresdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Secrets Two','Tips','Monlander','Hypnotized']));     
});

//Secrets two
app.intent('Secrets Two', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Part two of secrets of Chandler, Ross and Monica`);      
    conv.ask(new MediaObject({
        name: `Secrets`,
        url: `${secrets2}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/ePQu9GVe7kY/maxresdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Monlander','Tips','Secrets One','Hypnotized']));     
});


//Tips
app.intent('Tips', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Monica giving tips to Chandler`);      
    conv.ask(new MediaObject({
        name: `Tips`,
        url: `${tips}`,
        icon: new Image({
            url: 'http://www.newlovetimes.com/wp-content/uploads/2015/04/friends1.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Hypnotized','Tips','Secrets One','Secrets Two','Monlander']));     
});


//Hypnotized
app.intent('Hypnotized', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Chandler got hypnotized`);      
    conv.ask(new MediaObject({
        name: `Chandler got hypnotized`,
        url: `${chandlerHyp}`,
        icon: new Image({
            url: 'https://vignette.wikia.nocookie.net/friends/images/1/1c/TOWTHypnosisTape.png/revision/latest?cb=20180214113711',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Tips','Test','Secrets One','Secrets Two','Monlander']));     
});



//------------------------------------------- Joey Tribbiani Actions------------------------------
app.intent('Joey', (conv, { Joey }) => {
    conv.ask(`<speak>Let's talk to Joey<audio src="${JoeySound}"></audio></speak>`);
    
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Joey Tribbiani',
        image: new Image({
          url: 'https://vignette.wikia.nocookie.net/friends/images/6/61/Joey_friends.jpg/revision/latest?cb=20130523190938',
          alt: 'Joey',
        }),
      }));
      conv.ask(`<speak>Please select from the following options</speak>`);
      conv.ask(new Suggestions(['Food','Joey to Rachel','Ad','Reactions','Missing']));     
    }
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display');
    }
});

// Reactions
app.intent('Reactions', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Reaction of Joey when he finds out about Chandler and Monica`);      
    conv.ask(new MediaObject({
        name: `Joey's Reactions`,
        url: `${reactions}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/bIIm7yBdUG4/hqdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Food','Joey to Rachel','Ad','Missing']));     
});


// Missing
app.intent('Missing', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Chandler and Joey missing each other.`);      
    conv.ask(new MediaObject({
        name: `Missing Moments`,
        url: `${missing}`,
        icon: new Image({
            url: 'http://static.dnaindia.com/sites/default/files/styles/full/public/2016/07/25/485370-chandler-and-joey-tumblr.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Food','Joey to Rachel','Ad','Test']));     
});


// Food
app.intent('Food', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Joey doesn't share food.`);      
    conv.ask(new MediaObject({
        name: `Joey loves food`,
        url: `${food}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/8PbZNmv2bQM/maxresdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Reactions','Test','Joey to Rachel','Ad','Missing']));     
});


// Ad
app.intent('Ad', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Joey in advertisment`);      
    conv.ask(new MediaObject({
        name: `Joey in lipstick Ad.`,
        url: `${Ad}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/FZ91xAgKh5U/maxresdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Missing','Joey to Rachel','Test','Reactions','Food']));     
});


// Joey to Rachel
app.intent('Joey to Rachel', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Joey proposing Rachel`);      
    conv.ask(new MediaObject({
        name: `Joey proposing Rachel`,
        url: `${joeyToRachel}`,
        icon: new Image({
            url: 'http://snappa.static.pressassociation.io/assets/2014/09/11104152/1410428511-3a5dd63ab22757f4f3fe91bf4fd73176-600x338.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Missing','Reactions','Ad','Food']));     
});

//------------------------------------Ross Geller Actions-----------------------------------------------------------
app.intent('Ross', (conv, { Ross }) => {
    conv.ask(`<speak>Let's talk to Ross<audio src="${RossSound}"></audio></speak>`);

    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Ross Geller',
        image: new Image({
          url: 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg',
          alt: 'Ross',
        }),
      }));
    conv.ask(`<speak>Please select from the following options</speak>`);
    conv.ask(new Suggestions(['Unagi', 'Red_Ross','Ross to Rachel','Test','Funny Man','Fight with Mon'])); 
    }
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display'); 
    }
});

//Unagi
app.intent('Unagi', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ross sharing power of Unagi with Rachel and Phoebe` );      
    conv.ask(new MediaObject({
        name: 'Ross sharing Unagi Information',
        url: `${unagi}`,
        icon: new Image({
            url: 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Red_Ross','Fight with Mon','Ross to Rachel','Funny Man']));     
});

// Red Ross
app.intent('Red_Ross', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ross playing rugby as Red Ross` );      
    conv.ask(new MediaObject({
        name: 'Red Ross playing rugby',
        url: `${redRoss}`,
        icon: new Image({
            url: 'https://i.pinimg.com/originals/d3/0b/1d/d30b1d1444fe74c881affeb0476b8c54.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Unagi','Test','Fight with Mon','Funny Man','Ross to Rachel']));     
});

// Fight with Monica
app.intent('Fight with Mon', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ross fighting with Monica` );      
    conv.ask(new MediaObject({
        name: 'Ross fighting with Monica',
        url: `${rossFightMonica}`,
        icon: new Image({
            url: 'https://images.news18.com/ibnlive/uploads/2015/08/Wrestling.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Unagi','Ross to Rachel','Funny Man','Red_Ross']));     
});

// Funny Man
app.intent('Funny Man', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ross funny moments` );      
    conv.ask(new MediaObject({
        name: 'Funny Ross',
        url: `${funnyRoss}`,
        icon: new Image({
            url: 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Ross to Rachel','Test','Fight with Mon','Red_Ross','Unagi']));     
});

// Ross to Rachel
app.intent('Ross to Rachel', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ross proposing Rachel` );      
    conv.ask(new MediaObject({
        name: 'Ross proposing Rachel for first time',
        url: `${rossToRachel}`,
        icon: new Image({
            url: 'https://imgix.bustle.com/rehost/2016/9/13/30524b1f-782f-4d82-b9a0-214413396cb5.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Unagi','Fight with Mon','Funny Man','Test','Red_Ross']));     
});

//-------------------------------------- Rachel Green Actions------------------------------------------
app.intent('Rachel', (conv, { Rachel }) => {
    conv.ask(`<speak>Let's talk to Rachel</speak>`);
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Rachel Green',
        image: new Image({
          url: 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
          alt: 'Rachel',
        }),
      }));
      conv.ask(`<speak>Please select from the following options</speak>`);
      conv.ask(new Suggestions(['Aunt','Test','Humble','Joey to Rachel','Everybody','Ross to Rachel'])); 
    }
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display'); 
    }
});

// Aunt
app.intent('Aunt', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Ben irritating Rachel` );      
    conv.ask(new MediaObject({
        name: 'Ben irritating Rachel',
        url: `${auntRachel}`,
        icon: new Image({
            url: 'https://s.yimg.com/ny/api/res/1.2/V7m_HG1db895z0Roi3ZrKA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9NzAz/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5fd63fffa0e3062176ed1b04f6d0f94b',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Test','Humble','Everybody','Joey to Rachel','Ross to Rachel']));     
});


// Test
app.intent('Test', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Rachel and Monica competing against Joey and Chandler for their apartments.` );      
    conv.ask(new MediaObject({
        name: 'Test',
        url: `${test}`,
        icon: new Image({
            url: 'https://images.hellogiggles.com/uploads/2016/01/25032510/friends-embryos.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Humble','Aunt','Joey to Rachel','Everybody','Ross to Rachel']));     
});

//Everybody
app.intent('Everybody', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Everybody Singing.` );      
    conv.ask(new MediaObject({
        name: 'Everybody Singing.',
        url: `${singing}`,
        icon: new Image({
            url: 'http://los40es00.epimg.net/los40/imagenes/2016/08/25/cinetv/1472082207_045371_1472083720_noticia_normal.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Humble','Aunt','Test','Ross to Rachel','Joey to Rachel']));     
});

// Humble
app.intent('Humble', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Humble Rachel` );      
    conv.ask(new MediaObject({
        name: 'Humble Rach!',
        url: `${humble}`,
        icon: new Image({
            url: 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Aunt','Test','Ross to Rachel','Joey to Rachel','Everybody']));     
});



//------------------------------------------ Phoebe Buffay Actions-------------------------------------------------------
app.intent('Phoebe', (conv, { Phoebe }) => {
    conv.ask(`<speak>Let's talk to Phoebe<audio src="${PhoebeSound}"></audio></speak>`);
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Thank you for choosing me as your favorite character.\n Swipe left for more options below.`,
        title: 'Phoebe Buffay',
        image: new Image({
          url: 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg',
          alt: 'Phoebe',
        }),
      }));
    conv.ask(`<speak>Please select from the following options</speak>`);
    conv.ask(new Suggestions(['Smelly Cat','Sticky Shoes','Scream','Gone Mad', 'Annoyed']));
    } 
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display'); 
    }
});

//Smelly Cat
app.intent('SmellyCat', (conv, { SmellyCat }) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask('Playing smelly cat');      
    conv.ask(new MediaObject({
        name: 'Smelly Cat by Phoebe Buffay',
        url: `${smellyCat}`,
        icon: new Image({
           url: `https://vignette.wikia.nocookie.net/friends/images/c/c2/Smelly_Cat.jpg/revision/latest?cb=20170222183246`,
           alt: 'Media icon'
        })
    }));  
    conv.ask(new Suggestions(['Sticky Shoes', 'Evolution','Scream', 'Gone Mad','Annoyed'])); 
});

// Sticky Shoes
app.intent('StickyShoes', (conv, { StickyShoes }) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask('Playing Sticky Shoes');      
    conv.ask(new MediaObject({
        name: 'Sticky Shoes by Phoebe Buffay',
        url: `${stickyShoes}`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Smelly Cat', 'Evolution','Scream', 'Gone Mad', 'Annoyed'])); 
});

// Phoebe On Evolution
app.intent('On Evolution', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Phoebe's beleifs on evolution` );      
    conv.ask(new MediaObject({
        name: 'Sticky Shoes by Phoebe Buffay',
        url: `${phoebeEvolution}`,
        description:`Phoebe explaining her beliefs on evolution and gravity to Ross`,
        icon: new Image({
            url: 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Gone Mad','Sticky Shoes','Scream','Annoyed']));     
});

// Phoebe Screaming
app.intent('Scream', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Let's hear Phoebe Screaming` );      
    conv.ask(new MediaObject({
        name: 'Phoebe Screaming',
        description:`Phoebe screaming on her friends`,        
        url: `${phoebeScream}`,
        icon: new Image({
            url: 'https://s-media-cache-ak0.pinimg.com/564x/81/56/39/815639bb9c01127c758cb3b159aad276.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Gone Mad','Sticky Shoes','Evolution','Annoyed']));     
});

// Phoebe gone mad
app.intent('Gone Mad', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Phoebe gone mad when she finds out about Chandler and Monica` );      
    conv.ask(new MediaObject({
        name: 'Phoebe gone mad.',
        url: `${phoebeOnCM}`,
        icon: new Image({
            url: 'https://s-media-cache-ak0.pinimg.com/564x/81/56/39/815639bb9c01127c758cb3b159aad276.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Annoyed','Sticky Shoes','Evolution','Scream']));     
});

// Annoyed
app.intent('Annoyed', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Phoebe got annoyed with Joey` );      
    conv.ask(new MediaObject({
        name: 'Phoebe gone mad.',
        url: `${phoebeAnnoyed}`,
        icon: new Image({
            url: 'https://s-media-cache-ak0.pinimg.com/564x/81/56/39/815639bb9c01127c758cb3b159aad276.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Annoyed','Sticky Shoes','Evolution','Scream']));     
});

// Handling the media event
app.intent('media status', (conv) => {
    const mediaStatus = conv.arguments.get('MEDIA_STATUS');
    let response = 'Unknown media status received.';
    if (mediaStatus && mediaStatus.status === 'FINISHED') {
      response = 'Hope you enjoyed the tunes!';
    }
    conv.ask(response);
    conv.ask(new Suggestions(suggestionChips)); 
  });

  // Handling the unrecognized action
  app.intent('Unrecognized Action', (conv, {any}) => {
    let response = `Either this action "${any}" isn't available or you need to update
    your assistant application.`;
    conv.ask(`Please try that again if problem persists then ${response}`);
  });

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
// actions_capability_media_response_audio
