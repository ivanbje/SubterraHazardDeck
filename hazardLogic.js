commonCards = [
'<h2>Stumble</h2>The terrain is uneven and dangerous. If you exerted yourself; lose additional heart',
'<h2>Trap</h2>You step on a hidden pressure plate. Activate all adjacent arrow and boulder traps, and spike traps on your tile',
'<h2>Guardian Rises</h2>The volcano senses your presence and awakens a guardian. Spawn a guardian on the nearest guardian tile',
'<h2>Guardians Prowl</h2>The guardians flare with volcanic energy and increased speed. All guardians activate once',
'<h2>Volcanic Activity</h2>Volcanic and seismic activity forces the lava to bubble from cracks in the tunnel. Everyone occupying a lava tile loses a heart (or magma explosion thingy)',
'<h2>Volcanic Rumble</h2>The mountain shakes. Roll the rubble die'
]

uniqueCards = [
'<h2>NoisyRecovery</h2>The terrain is uneven and dangerous but a protruding boulder could provide stability. If you exerted yourself this turn: The boulder falls but you remain upright, all enemies focus their attacks on you',
'<h2>Berries</h2>You recognize these berries and know they are safe to eat, gain 1 heart',
'<h2>Mushrooms</h2>You find mushrooms but you do not if they are poisonous. You may roll d6 for the following effects<br>1: lose 3 hearts<br>  2: lose 1 heart<br>  3-6: gain 1 heart',
'<h2>Earthquake</h2>Everyone on or adjacent to a rubble tile lose a heart<br>Roll the rubble die',
'<h2>Guardians Anger</h2>All guardians activate once<br>If the artifact has been removed, all guardians activate again. If there are no guardians spawn one guardian on the guardian tile closest to the entrance.',
'<h2>Trap Reconfiguration</h2>Gears shift and turn transforming the traps around you. Take two of the closest trap tiles(of different type) and switch their places. If you can not place them without closing off a section, nothing happens.',
'<h2>Rotation Trap</h2>The walls and floors of the room start vibrating and then rotating. Rotate the tile you are standing on clockwise. If this causes a section to be closed off, repeat until it doesn’t.',
'<h2>MagicalForces</h2>Magical energy swirls around you and you find yourself in a different place. Swap position with the previous player.',
'<h2>Negative Pressure</h2>A strong suction pulls you toward a lava pit. Move yourself and all explorers on your tile 1 tile towards the closest lava pit. If you landed, if you landed on a lava pit you take 1 damage.',
'<h2>Calm mountain</h2>Nothing happens',
'<h2>Exploading Guardian</h2>A guardian explodes sending shrapnel in all directions. Choose a guardian nearest to any explorer. That explorer is destroyed. All explorers on that tile take 2 damage and explorers on adjacent connected tiles take 1 damage']

sugList = ['Choose number of players']
playerNumber = 0;
cardIndex=0;

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

  deckNumber = (rounds+4) * playerNumber;
  console.log("setting deck number to "+String(deckNumber))
  deck = [];

  shuffle(uniqueCards);
  j=0;
  while(deck.length < deckNumber)
  {
    for(var i=0;i<commonCards.length;i++)
    {
      deck.push(commonCards[i],commonCards[i]);
    }
    deck.push(uniqueCards[j++])
  }
  shuffle(deck)
  console.log("deck:");
  console.log(deck);
  const difficultyAm = document.getElementById("difficultyChoice")
  difficultyAm.style.display = 'none'
  const drawButton = document.getElementById("drawCard")
  drawButton.style.display = 'block'
    const cardInfo = document.getElementById("cardInfo");
  cardInfo.innerHTML = "Draw your first card";
}

function drawCard()
{
  const cardInfo = document.getElementById("cardInfo");
  cardInfo.innerHTML = deck[cardIndex++];
  console.log(cardIndex)
  console.log(deck[cardIndex-1])
}