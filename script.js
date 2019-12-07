const action = document.getElementById("action");
const street = document.getElementById("street");
const hero = document.getElementById("hero");
const vOne = document.getElementById("vOne");
const vTwo = document.getElementById("vTwo");
const vThree = document.getElementById("vThree");
const vFour = document.getElementById("vFour");
const vFive = document.getElementById("vFive");
const raise = document.getElementById("raise");
const call = document.getElementById("call");
const check = document.getElementById("check");
const fold = document.getElementById("fold");

const game = {
    players: {
        hero: {
          position: ["BB","SB","BTN","CO","MP","UTG"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        },
        vOne: {
          position: ["SB", "BTN", "CO", "MP", "UTG", "BB"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        },
        vTwo: {
          position: ["BTN", "CO", "MP", "UTG", "BB", "SB"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        },
        vThree: {
          position: ["CO", "MP", "UTG", "BB", "SB", "BTN"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        },
        vFour: {
          position: ["MP", "UTG", "BB", "SB", "BTN", "CO"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        },
        vFive: {
          position: ["UTG", "BB", "SB", "BTN", "CO", "MP"],
          hasRaised: false,
          hasCall: false,
          hasCheck: false,
          hasFold:false
        }
      },
  actionPosition: 0,
  playerPosition: 0,
  currentStreet: 0,
  preFlopPosition: ["UTG", "MP", "CO", "BTN", "SB", "BB"],
  postFlopPosition: ["SB", "BB", "UTG", "MP", "CO", "BTN"],
  streets: ["PreFlop", "Flop", "Turn", "River"]
};

const render = () => {
  if (game.street > 0) {
    action.innerHTML = `Action: ${game.postFlopPosition[game.actionPosition]}`;
  } else {
    action.innerHTML = `Action: ${game.preFlopPosition[game.actionPosition]}`;
  }
  street.innerHTML = `Street: ${game.streets[game.currentStreet]}`;
  hero.innerHTML = `Hero: ${game.players.hero.position[game.playerPosition]}`;
  vOne.innerHTML = `Villain 1: ${game.players.vOne.position[game.playerPosition]}`;
  vTwo.innerHTML = `Villain 2: ${game.players.vTwo.position[game.playerPosition]}`;
  vThree.innerHTML = `Villain 3: ${game.players.vThree.position[game.playerPosition]}`;
  vFour.innerHTML = `Villain 4: ${game.players.vFour.position[game.playerPosition]}`;
  vFive.innerHTML = `Villain 5: ${game.players.vFive.position[game.playerPosition]}`;
};

const finish = () => {
    const lastPlayer = game.actionPosition === 5;
    const lastStreet = game.currentStreet === 3;
    const lastPlayerPosition = game.playerPosition === 5;

    if (lastPlayer && lastStreet && lastPlayerPosition) {
    game.actionPosition = 0;
    game.currentStreet = 0;
    game.playerPosition = 0;
  } else if (lastPlayer && lastStreet) {
    game.actionPosition = 0;
    game.currentStreet = 0;
    game.playerPosition++;
  } else if (lastPlayer) {
    game.actionPosition = 0;
    game.currentStreet++;
  }
  else {
    game.actionPosition++;

  };

  render();
};

raise.addEventListener("click", finish);
call.addEventListener("click", finish);
check.addEventListener("click", finish);
fold.addEventListener("click", finish);

render();
