
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = [`A woman gets on a bus with her baby. The bus driver says: “Ugh, thats the ugliest baby Ive ever seen!” The woman walks to the rear of the bus and sits down, fuming. She says to a man next to her: “The driver just insulted me!” The man says: “You go up there and tell him off. Go on, Ill hold your monkey for you,`
                ,`I said to the Gym instructor “Can you teach me to do the splits?” He said, “How flexible are you?” I said, “I cant make Tuesdays.`   
,`Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one  and let the other one off.`
,`Doc, I cant stop singing the Green Green Grass of Home. He said: “That sounds like Tom Jones syndrome.” “Is it common?” I asked.  “Its not unusual” he replied.`
,`Im on a whiskey diet. Ive lost three days already`
,`My therapist says I have a preoccupation with vengeance. We all see about that.`
,`A priest, a rabbi and a vicar walk into a bar. The barman says, “Is this some kind of joke?”`
,`A group of chess enthusiasts checked into a hotel and were standing in the lobby discussing their recent tournament victories. After about an hour, the manager came out of the office and asked them to disperse. “But why?” they asked, as they moved off. “because,” he said “I cant stand chess nuts boasting in an open foyer.”`
,`I was in Tescos and I saw this man and woman wrapped in a barcode. I said, “Are you two an item?”`
,`I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth. It took him two hours to pass me the salt.`
];
const result = getRandomItem(array);
console.log(result);
document.getElementsByClassName("randomjoke")[0].innerHTML=`${result}`