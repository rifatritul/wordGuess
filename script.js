var words = ["About",	"Above",	"Abuse",	"Actor",	"Acute",	"Admit",	"Adopt",	"Adult",	"After",	"Again",	"Agent",	"Agree",	"Ahead",	"Alarm",	"Album",	"Boost",	"Booth",	"Bound",	"Brain",	"Brand",	"Bread",	"Break",	"Breed",	"Brief",	"Bring",	"Broad",	"Broke",	"Brown",	"Build",	"Built",	"Debut",	"Delay",	"Depth",	"Doing",	"Doubt",	"Dozen",	"Draft",	"Drama",	"Drawn",	"Dream",	"Dress",	"Drill",	"Drink",	"Drive",	"Drove",	"Dying",	"Eager",	"Early",	"Earth",	"Eight",	"Elite",	"Empty",	"Enemy",	"Enjoy",	"Enter",	"Jones",	"Judge",	"Known",	"Label",	"Large",	"Laser",	"Later",	"Laugh",	"Layer",	"Learn",	"Lease",	"Least",	"Leave",	"Legal",	"Level",	"Lewis",	"Light",	"Limit",	"Peace",	"Peter",	"Phase",	"Phone",	"Photo",	"Piece",	"Pilot",	"Pitch",	"Place",	"Plain",	"Plane",	"Plant",	"Plate",	"Point",	"Pound",	"Sheet",	"Shelf",	"Shell",	"Shift",	"Shirt",	"Shock",	"Shoot",	"Short",	"Shown",	"Sight",	"Since",	"Sixth",	"Sixty",	"Sized",	"Skill",	"Sleep",	"Slide",	"Small",	"Smart",	"Smile",	"Smith",	"Smoke",	"Solid",	"Solve",	"Sorry",	"Sound",	"South",	"Space",	"Upset",	"Urban",	"Usage",	"Usual",	"Valid",	"Value",	"Video",	"Virus",	"Visit",	"Alert",	"Alike",	"Alive",	"Allow",	"Alone",	"Along",	"Alter",	"Among",	"Anger",	"Angle",	"Angry",	"Apart",	"Apple",	"Apply",	"Arena",	"Buyer",	"Cable",	"Calif",	"Carry",	"Catch",	"Cause",	"Chain",	"Chair",	"Chart",	"Chase",	"Cheap",	"Check",	"Chest",	"Chief",	"Child",	"Entry",	"Equal",	"Error",	"Event",	"Every",	"Exact",	"Exist",	"Extra",	"Faith",	"FALSE",	"Fault",	"Fiber",	"Field",	"Fifth",	"Fifty",	"Fight",	"Final",	"First",	"Fixed",	"Flash",	"Fleet",	"Floor",	"Fluid",	"Focus",	"Force",	"Links",	"Lives",	"Local",	"Logic",	"Loose",	"Lower",	"Lucky",	"Lunch",	"Lying",	"Magic",	"Major",	"Maker",	"March",	"Maria",	"Match",	"Maybe",	"Mayor",	"Meant",	"Power",	"Press",	"Price",	"Pride",	"Prime",	"Print",	"Prior",	"Prize",	"Proof",	"Proud",	"Prove",	"Queen",	"Quick",	"Quiet",	"Quite",	"Spare",	"Speak",	"Speed",	"Spend",	"Spent",	"Split",	"Spoke",	"Sport",	"Staff",	"Stage",	"Stake",	"Stand",	"Start",	"State",	"Steam",	"Steel",	"Stick",	"Still",	"Stock",	"Stone",	"Stood",	"Store",	"Storm",	"Story",	"Strip",	"Stuck",	"Study",	"Stuff",	"Whole",	"Whose",	"Woman",	"Women",	"World",	"Worry",	"Worse",	"Worst",	"Would",	"Argue",	"Arise",	"Array",	"Aside",	"Asset",	"Audio",	"Audit",	"Avoid",	"Award",	"Aware",	"Badly",	"Baker",	"Bases",	"Basic",	"Basis",	"China",	"Chose",	"Civil",	"Claim",	"Class",	"Clean",	"Clear",	"Click",	"Clock",	"Close",	"Coach",	"Coast",	"Could",	"Count",	"Court",	"Forth",	"Forty",	"Forum",	"Found",	"Frame",	"Frank",	"Fraud",	"Fresh",	"Front",	"Fruit",	"Fully",	"Funny",	"Giant",	"Given",	"Glass",	"Globe",	"Going",	"Grace",	"Grade",	"Grand",	"Grant",	"Grass",	"Great",	"Green",	"Gross",	"Media",	"Metal",	"Might",	"Minor",	"Minus",	"Mixed",	"Model",	"Money",	"Month",	"Moral",	"Motor",	"Mount",	"Mouse",	"Mouth",	"Movie",	"Music",	"Needs",	"Never",	"Radio",	"Raise",	"Range",	"Rapid",	"Ratio",	"Reach",	"Ready",	"Refer",	"Right",	"Rival",	"River",	"Robin",	"Roger",	"Roman",	"Rough",	"Style",	"Sugar",	"Suite",	"Super",	"Sweet",	"Table",	"Taken",	"Taste",	"Taxes",	"Teach",	"Teeth",	"Terry",	"Texas",	"Thank",	"Theft",	"Their",	"Theme",	"There",	"These",	"Thick",	"Thing",	"Think",	"Third",	"Those",	"Three",	"Threw",	"Throw",	"Tight",	"Waste",	"Watch",	"Water",	"Wheel",	"Where",	"Which",	"While",	"White",	"Vital",	"Beach",	"Began",	"Begin",	"Begun",	"Being",	"Below",	"Bench",	"Billy",	"Birth",	"Black",	"Blame",	"Blind",	"Block",	"Blood",	"Board",	"Cover",	"Craft",	"Crash",	"Cream",	"Crime",	"Cross",	"Crowd",	"Crown",	"Curve",	"Cycle",	"Daily",	"Dance",	"Dated",	"Dealt",	"Death",	"Group",	"Grown",	"Guard",	"Guess",	"Guest",	"Guide",	"Happy",	"Harry",	"Heart",	"Heavy",	"Hence",	"Henry",	"Horse",	"Hotel",	"House",	"Human",	"Ideal",	"Image",	"Index",	"Inner",	"Input",	"Issue",	"Irony",	"Juice",	"Joint",	"Newly",	"Night",	"Noise",	"North",	"Noted",	"Novel",	"Nurse",	"Occur",	"Ocean",	"Offer",	"Often",	"Order",	"Other",	"Ought",	"Paint",	"Panel",	"Paper",	"Party",	"Round",	"Route",	"Royal",	"Rural",	"Scale",	"Scene",	"Scope",	"Score",	"Sense",	"Serve",	"Seven",	"Shall",	"Shape",	"Share",	"Sharp",	"Times",	"Tired",	"Title",	"Today",	"Topic",	"Total",	"Touch",	"Tough",	"Tower",	"Track",	"Trade",	"Train",	"Treat",	"Trend",	"Trial",	"Tried",	"Tries",	"Truck",	"Truly",	"Trust",	"Truth",	"Twice",	"Under",	"Undue",	"Union",	"Unity",	"Until",	"Upper",	"Wound",	"Write",	"Wrong",	"Wrote",	"Yield",	"Young",	"Youth",	"Worth",	"Voice"
];
var random = Math.floor(Math.random() * words.length);

var pick = (words[random]);
var pickArray=pick.split('');
var attempt = 10;
var match = 0;
console.log(pickArray);

function setLetter(clicked){
     var letter= clicked;
     console.log(letter);
if (attempt>1){
        if (letter===pickArray[0].toUpperCase()){
            document.getElementById('letter1').innerHTML=letter;
            match++;
        }if (letter===pickArray[1].toUpperCase()){
            document.getElementById('letter2').innerHTML=letter;
            match++;
        }if (letter===pickArray[2].toUpperCase()){
            document.getElementById('letter3').innerHTML=letter;
            match++;
        }if (letter===pickArray[3].toUpperCase()){
            document.getElementById('letter4').innerHTML=letter;
            match++;
        }if (letter===pickArray[4].toUpperCase()){
            document.getElementById('letter5').innerHTML=letter;
            match++;
        }
            attempt--;
            document.getElementById('attmpt').innerHTML="Attempts Left : "+ attempt;
        if (match==5) {
            window.alert("Congratulations!! The Word was: "+pick);
            location.reload();
        }
} else{
    window.alert("Game Over. The Word was: "+pick);
    location.reload();
}
}



