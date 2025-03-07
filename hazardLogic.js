commonCards = [
'<h2>Stumble</h2><em>The terrain is uneven and dangerous.</em><br> If you exerted yourself; lose additional heart',

'<h2>Trap</h2><em>You step on a hidden pressure plate.</em><br>Activate all adjacent arrow, detection and boulder traps, and spike traps on your tile',

'<h2>Guardian Rises</h2><em>The volcano senses your presence and awakens a guardian.</em><br>Spawn a guardian on the nearest guardian tile',

'<h2>Guardians Prowl</h2><em>The guardians flare with volcanic energy and increased speed.</em><br>All guardians activate once',

'<h2>Volcanic Activity</h2><em>Volcanic and seismic activity forces the lava to bubble from cracks in the tunnel.</em><br>Everyone occupying a lava tile loses a heart and explosive tiles activate. Lava flows if eruption has started',

'<h2>Volcanic Rumble</h2><em>The mountain shakes.</em><br>Roll the rubble die',

'<h2>Twisting fates</h2><em>The fates are unpredictable.</em><br>Roll the Hazard Die'
]



uniqueCards = [
'<h2>Noisy Recovery</h2><em>The terrain is uneven and dangerous but a protruding boulder could provide stability.</em><br> If you exerted yourself this turn: The boulder falls but you remain upright, all enemies focus their attacks on you',

'<h2>Berries</h2><em>You recognize these berries and know they are safe to eat.</em><br> gain 1 heart',

'<h2>Oil Slick</h2><em>You spot a puddle of oil and dip your torch in it.</em><br>You may perform a free reveal action',

'<h2>Healing Plants</h2><em>The plants on the walls have medicinal properties if applied correctly. </em><br>You can heal an ally sharing a space for 1 heart. If no explorer shares a space, nothing happens.',

'<h2>Mushrooms</h2><em>You find mushrooms but you do not know if they are poisonous. </em><br>You may roll d6 for the following effects<br>1: lose 3 hearts<br>  2: lose 1 heart<br>  3-6: gain 1 heart',

'<h2>Earthquake</h2><em>The mountain shakes causing rocks to fall from the ceiling</em><br>Everyone on or adjacent to a rubble tile lose a heart<br>Roll the rubble die',

'<h2>Guardians’ Anger</h2><em>The guardians flare with volcanic energy and anger</em><br>All guardians activate once<br>If the artifact has been removed, all guardians activate again. If there are no guardians spawn one guardian on the guardian tile closest to the entrance.',

'<h2>Trap Reconfiguration</h2><em>Gears shift and turn transforming the traps around you.</em><br>Take two of the closest trap tiles(of different type) and switch their places. If you can not place them without closing off a section, nothing happens.',

'<h2>Rotation Trap</h2><em>The walls and floors of the room start vibrating and then rotating.</em><br>Rotate the tile you are standing on clockwise. If this causes a section to be closed off, repeat until it doesn’t.',

'<h2>Rotation Trap(v2)</h2><em>The walls and floors of the room start vibrating and then rotating.</em><br>Rotate the tile you are standing on counter-clockwise. If this causes a section to be closed off, repeat until it doesn’t.',

'<h2>MagicalForces</h2><em>Magical energy swirls around you and you find yourself in a different place.</em><br>Swap position with the previous player.',

'<h2>MagicalForces(v2)</h2><em>Magical energy swirls around you and you find yourself in a different place.</em><br>Swap position with the explorer farthest away.',

'<h2>Negative Pressure</h2><em>A strong suction pulls you toward a lava pit.</em><br>Move yourself and all explorers on your tile 1 tile towards the closest lava pit. If you landed on a lava pit you take 1 damage.',

'<h2>Calm mountain</h2><em>The mountain is calm</em><br>Nothing happens',

'<h2>Hunter’s Mark</h2><em>You can feel the mountain focusing on you</em><br>Activate the closest guardian 2 times. If no guardian is present, spawn one on the closest guardian tile',

'<h2>Uncertain Fates</h2><em>You can feel your fates changing tides.</em><br>Roll both hazard dice',

'<h2>Fates Reach out</h2><em>You feel like you can choose your fate.</em><br>Choose a result from the hazard die. You cannot choose stumble unless you exerted yourself and you can’t choose guardians activate if there are no guardians',

'<h2>Fortified mountain</h2><em>You can hear guardians rising up at the entrance</em><br>Spawn a guardian on both starting guardian tiles',

'<h2>Doom</h2><em>Lady luck does not seem to be on your side today</em><br>Resolve all effects of the Hazard dice in any order you like.',

'<h2>Serialized Traps</h2><em>You step on a pressure plate and hear a whirl of mechanical energy traveling through the caverns</em><br>All traps with an explorer on or adjacent to them are activated.',

'<h2>Transforming room</h2><em>The room around you starts to shift and turn.</em><br>draw a new tile from the bag and replace the room you are currently on with that tile. If you can not place not place the tile without closing off a new section return it to the bag. If you are on a key, entrance, wing or artifact tile nothing happens',

'<h2>Exploding Guardian</h2><em>A guardian explodes sending shrapnel in all directions.</em><br>Choose a guardian nearest to any explorer. That explorer is destroyed. All explorers on that tile take 2 damage and explorers on adjacent connected tiles take 1 damage']

countDownCards = [
'<h2>Increasing Heat</h2><em>Heat builds up in the mountain.</em><br>All explorers suffer 1 damage',
'<h2>Rising Heat</h2><em>Heat continues to build up in the mountain.</em><br>All explorers suffer 2 damage',
'<h2>Intensifying Heat</h2><em>Intense heat builds up in the mountain.</em><br>All explorers suffer 3 damage',
'<h2>Smoldering Heat</h2><em>Smoldering heat builds up in the mountain.</em><br>All explorers suffer 4 damage',
'<h2>Blistering Heat</h2><em>Blistering heat builds up in the mountain, oxygen starts to dissipate.</em><br>All explorers suffer 5 damage',
'<h2>Scorching Heat</h2><em>Scorching heat builds up in the mountain.</em><br>All explorers suffer 6 damage',
'<h2>Molten Heat</h2><em>Molten heat builds up in the mountain, killing all living things.</em><br>You Lose the game'];


sugList = ['Choose number of players']
playerNumber = 0;
cardIndex=0;
redraws=0;

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function init()
{
	console.log('Hello World');
	const cardInfo = document.getElementById("cardInfo");

	index = Math.floor(Math.random()*sugList.length);

	cardInfo.innerHTML = sugList[index];

    const difficultyAm = document.getElementById("difficultyChoice")
      difficultyAm.style.display = 'none'
    const drawButton = document.getElementById("drawCard")
  drawButton.style.display = 'none'
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});


function switchTheme(override)
{
	const theme = document.getElementById("theme-link");
	const themeButton = document.getElementById("themebtn");
	if (theme.getAttribute("href") == "light-mode.css" || override =='dark') {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-mode.css";
    themeButton.value="Light mode ☀️";
    try {localStorage.setItem("item-display-theme","dark");} catch(error){console.log("Error saving theme to local storage; "+error);}
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-mode.css";
    themeButton.value="Dark mode 🌙";
    try {localStorage.setItem("item-display-theme","light");} catch(error){console.log("Error saving theme to local storage; "+error);}
  }
}

function setPlayers(playerNum)
{
  const cardInfo = document.getElementById("cardInfo");
  cardInfo.innerHTML = "Choose difficulty";

  const playerAm = document.getElementById("playerChoice")
  playerAm.style.display="none"

  const difficultyAm = document.getElementById("difficultyChoice")
  difficultyAm.style.display = 'block'

  console.log("setting player number to "+String(playerNum))
  playerNumber=playerNum;
}




function setDifficulty(difficultyNum)
{
  var diffMat = []
  console.log("setting difficulty number to "+String(difficultyNum))
  if(difficultyNum==1){diffMat=[27,26,22,20];}
  if(difficultyNum==2){diffMat=[24,21,18,16];}
  if(difficultyNum==3){diffMat=[22,19,16,14];}
  if(difficultyNum==4){diffMat=[20,17,14,12];}

  var rounds=diffMat[playerNumber-3];
  console.log("setting round number to "+String(rounds))

  deckNumber = (rounds+8) * playerNumber/2;
  console.log("setting deck number to "+String(deckNumber))
  deck = [];

  for(var k=0;k<2;k++)
  {
    halfdeck = [];

    shuffle(uniqueCards);
    j=0;
    while(halfdeck.length < deckNumber)
    {
      for(var i=0;i<commonCards.length;i++)
      {
        halfdeck.push(commonCards[i]);
      }
      halfdeck.push(uniqueCards[j++])
      halfdeck.push(commonCards[Math.floor(Math.random()*commonCards.length)]);
      halfdeck.push(commonCards[Math.floor(Math.random()*commonCards.length)]);
    }
    shuffle(halfdeck)
    console.log("halfdeck:")
    console.log(halfdeck)

    for(var i=0;i<halfdeck.length;i++) { deck.push(halfdeck[i]); }
  }
  for(var i=0;i<countDownCards.length;i++) { deck.push(countDownCards[i]); }
  console.log("deck:");
  console.log(deck);
  const difficultyAm = document.getElementById("difficultyChoice")
  difficultyAm.style.display = 'none'
  const drawButton = document.getElementById("drawCard")
  drawButton.style.display = 'block'
    const cardInfo = document.getElementById("cardInfo");
  cardInfo.innerHTML = "Draw your first card";
  console.log(deck[cardIndex-1])
  const deckInfo = document.getElementById("deckInfo");
  deckInfo.innerHTML = "Deck size:"+String(deck.length-cardIndex)
}

function drawCard()
{
  if(cardIndex>0){oldCard = deck[cardIndex-1];} else {oldCard="";}
  newCard = deck[cardIndex++];
  addText="";

  if(newCard==oldCard){redraws++; addText="<br>(again: "+String(redraws)+")"} else {redraws=0;}
  const cardInfo = document.getElementById("cardInfo");
  cardInfo.innerHTML = newCard + addText;
  console.log(cardIndex)
  console.log(deck[cardIndex-1])
  const deckInfo = document.getElementById("deckInfo");
  deckInfo.innerHTML = "Deck size:"+String(deck.length-cardIndex)+" cards drawn:"+cardIndex;
}