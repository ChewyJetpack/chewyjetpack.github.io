__NUXT_JSONP__("/articles/posts/2022-04-27-its-not-overbridge-for-the-octatrack-but-its-close-enough", (function(a,b,c,d,e,f,g){return {data:[{article:{slug:"2022-04-27-its-not-overbridge-for-the-octatrack-but-its-close-enough",description:e,title:"It's Not Overbridge for the Octatrack, but It's Close Enough",hero:"\u002Fimg\u002Fhero-ot.jpg",thumb:"\u002Fimg\u002Fthumb-ot.jpg",date:"28th November 2020",meta_description:e,contentBlocks:[{content:"\n\nI started using the Octatrack as a means to produce full pieces of music without a computer. After 6 months invested, I was in love with my new creative process, but completely unable to finish a track. After years producing drum & bass music for label releases, and spending months on complex mixes with long FX chains, buses, and convoluted compression set ups, I found I was stuck with only what I could achieve inside the Octatrack. No mixdown, no sidechains, no buses, no polished, finished track at the end of the process. Nothing I would be happy to release.\n\n**I listed my Octatrack for sale on Elektronauts.**\n\nI received a reply from a user called jbone1313. He had developed an Ableton template based around a series of MIDI clips and automations that he told me could solve this problem, yielding full stems for all the tracks in my project, including crossfader movements and scene changes. He even provided me with a prototype project file.\n\nHaving fully dissected the project, recreated it a few times, tested thoroughly, I decided to document how it works so that it can be of use to others.\n\nThis project works with a relatively straightforward concept: You perform a song once, while Ableton records all the midi data for your crossfader movements and scene changes to a MIDI clip. Then, you enter a couple of values in a couple of places, hit play and walk away. When you come back, you’ll have an audio file containing individual stems for all the tracks from your Octatrack. \n\n### Some Caveats:\n\n* This method only records your crossfader movements and scene changes. If you want your performance to include things like encoder movements or live-played trigs, you’ll have to do some extra work. I won’t cover that stuff here, but I can give you an idea of how to do it (individual midi tracks for each OT track, multiple armed channels etc).\n* Manual mutes do not work. We need to use the ‘solo’ functionality to bounce each track out individually, and this overrides track mutes. However, arrangement mutes do work, so if you want to use mutes as part of your performance, you’ll need to use them within the arranger, and not on-the-fly. You can also just edit the audio clips at the end if you prefer.\n* Ableton does not record MIDI program changes. This means pattern changes don’t work either. You’ll need to use arranger mode for this too.\n\n### Ableton Setup\n\nSetup 9 scenes, named T1-T8 and STOP.\n\nSetup 9 MIDI channels, named T1-T8 and MIDI MASTER.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage19_6504fb8545.png)\n\nOn each MIDI channels, add an External Instrument device, and map each to the correct midi channel for its respective track. By default, the tracks are on channels 1-8. For the MIDI MASTER channel, use the same MIDI channel that the T1 channel uses. \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage17_d66a933b51.png)\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage6_a73d6dd4c6.png)\n\nGroup all the MIDI channels. We’ll call the group CONTROL. \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage16_09d4825d29.png)\n\nIn the T1 channel, create a MIDI clip with a length of 1\u002F32 note, and add an automation on MIDI CC 50, setting a value of 0. \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage14_78f5c1dd1f.png)\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage22_000eb74af3.png)\n\nCopy this MIDI clip into every cell on the T1-T8 channels, except for the final STOP scene. \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage21_a5cc9122ce.png)\n\nOn the T1 MIDI channel, and in the T1 scene row, change this automation to a value of \u003E1, with a slope leading up to 127. We should be able to set this to 127 and leave it at that, but I found that sometimes due to latency it may miss this very first automation. The slope means that it’s constantly receiving new values until we hit the 127 point, so it’ll solo the track as soon as it’s able to do so.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage18_4cb0667863.png)\n\nChange the clip colour, so we know this is a ‘solo’ clip.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage10_d980c4502f.png)\n\nCopy the new clip to T2, T3 and so on.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage9_a231464f36.png)\n\nOn the END scene, create a 1\u002F32 long MIDI clip, containing nothing but a single A0 note. Let’s give this clip a new colour as well, so we know it’s our ‘stop’ clip.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage20_07aec5a911.png)\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage24_4c1703c1e0.png)\n\n \n\nCopy the STOP clip to all the MIDI tracks in our group.\n\nOutside of this group, create a MIDI track that receives midi from the Octatrack, on the same MIDI channel as T1. This is your master MIDI track, in which you will record your performance.\n\nOutside the group, create an audio track, to record your stems into, make sure this is set to receive audio from the correct input. We’ll call this track AUDIO REC.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage2_f8bc6ca8ab.png)\n\nSet up a 1 bar count-in, under the metronome settings, for when we want to record. You will need this later.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage11_bfd43b423d.png)\n\nThat’s the main setup done! Next, let’s get the OT ready…\n\n### Octatrack Setup\n\nConnect your Octatrack to your MIDI interface, so it is both sending and receiving MIDI from your computer.\n\nGo to PROJ -\u003E MIDI -\u003E SYNC, and set TRANSP and CLOCK to RECV.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage7_10fef7c821.jpg)\n\nGo to PROJ -\u003E MIDI -\u003E CHANNELS and make sure your track channels match those that are set in Ableton\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage23_c8ec09ac1c.jpg)\n\nEither create a new arrangement, or open your existing arrangement. For my test, I’m just using a simple, 64 step pattern (4 bars).\n\nAdd ‘LOOP 00\u002F∞’ to final row.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage4_9351ea461f.jpg)\n\nFind out the length of your arrangement. To do this, add a row before the LOOP, select the left-most column, press YES, and read the text in the header. The text consists of three numbers, representing bars, beats and sixteenths, respectively. This is the starting measure for the extra row you just added. To calculate the length of the arrangement up until this beat, simply reduce this number appropriately. For example, if the starting measure of the new row is “73 1 1”, the length of the arrangement up until that point must be 72 bars. The means the actual length of your arrangement is “72 0 0”. \\\n\\\nMake a note of this number. You’ll need it.\n\n\\\nThe example in the following image would have a length of “4 0 0”.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage5_3617850115.jpg)\n\nRemove the new row you just created to figure out the length.\n\nMake sure Arr Mode is activated:\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage13_04f0272f1d.jpg)\n\n### Ready to go!\n\nIn Ableton, arm the OT MIDI channel and hit the record button in any of the cells. After the 1-bar count-in we set up previously, your Octatrack should start playing through your arrangement.\n\n \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage15_fe54285c1a.png)\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage12_f5470b4d8b.png)\n\nDo your thing - move the crossfader and switch scenes. When you’re done, just stop the recording in Ableton.\n\nCopy the new MIDI clip you created into all scenes on the MIDI MASTER channel.\n\n \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage3_a2c1b9d0c0.png)\n\nSelect all the cells in the CONTROL channel, except for the last one, corresponding to the STOP scene. Open the Launch Box by clicking the first of the three circles at the bottom of the Clip View. Set the Follow Action Time to the number of bars in your Octatrack arrangement (we figured this out in step 6), and set Follow Action A to ‘Next’, as illustrated below:\n\n \n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage8_03b8ffb535.png)\n\nArm your AUDIO REC channel, hit the record button in any of the cells, and before the count-in finishes, hit the play button on the first row in your CONTROL track.\n\n![](https:\u002F\u002Femilsmith.pro\u002Fuploads\u002Fimage1_8371855e27.png)\n\nWalk away for approximately 8 times the length of your tune. When you come back, you’ll have an audio clip in the AUDIO REC track, which contains stems for each individual track!\n\n \n\n## Tips:\n\n1. Drag scenes up and down to change the order in which your tracks are recorded\n2. Move the STOP scene above any tracks you want to skip entirely"}],tags:[f,g],toc:[],body:{type:b,children:[]},dir:"\u002Farticles\u002Fposts",path:"\u002Farticles\u002Fposts\u002F2022-04-27-its-not-overbridge-for-the-octatrack-but-its-close-enough",extension:c,createdAt:a,updatedAt:a},tags:[{slug:"3d-modelling",title:"3D Modelling",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002F3d-modelling",extension:c,createdAt:a,updatedAt:a},{slug:"3d-printing",title:"3D Printing",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002F3d-printing",extension:c,createdAt:a,updatedAt:a},{slug:"design",title:"Design",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Fdesign",extension:c,createdAt:a,updatedAt:a},{slug:"music-production",title:f,toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Fmusic-production",extension:c,createdAt:a,updatedAt:a},{slug:"music-technology",title:g,toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Fmusic-technology",extension:c,createdAt:a,updatedAt:a},{slug:"programming",title:"Programming",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Fprogramming",extension:c,createdAt:a,updatedAt:a},{slug:"diy",title:"DIY",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Fdiy",extension:c,createdAt:a,updatedAt:a},{slug:"technology",title:"Technology",toc:[],body:{type:b,children:[]},dir:d,path:"\u002Ftags\u002Ftechnology",extension:c,createdAt:a,updatedAt:a}]}],fetch:{"data-v-1241c6a6:0":{contact:{slug:"contact",title:"Emil Smith",email:"hi@emilsmith.pro",socialLinks:[{url:"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Femil-smith\u002F"},{url:"https:\u002F\u002Fgithub.com\u002FChewyJetpack"}],toc:[],body:{type:b,children:[]},dir:"\u002F",path:"\u002Fcontact",extension:c,createdAt:a,updatedAt:a}}},mutations:void 0}}("2023-06-22T22:45:50.717Z","root",".md","\u002Ftags","A guide on how to set up Ableton to record individual channels and stems from the Elektron Octatrack.","Music Production","Music Technology")));