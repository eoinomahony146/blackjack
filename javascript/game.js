var suits = ["S", "H", "D", "C"];
var facevalues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDeck() {
    deck = new Array();
    for (var i = 0; i < facevalues.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var weight = parseInt(facevalues[i]);
            if (facevalues[i] == "J" || facevalues[i] == "Q" || facevalues[i] == "K")
                weight = 10;
            if (facevalues[i] == "A")
                weight = 11 || 1;
            var card = { Value: facevalues[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}

function shuffle(timesShufflfed) {
    for(var i = 0; i < timesShufflfed; i++) {
        var rndNo = getRandomInt(1,52);
        var card = deck[i]
        deck[i] = card[rndNo];
        deck[rndNo] = card;
    }
}


playersList = new Array();

function players(numOfPlayers) {
    var player1 =  document.getElementById('user1').value;
    var player2 =  document.getElementById('user2').value;
    var player3 =  document.getElementById('user3').value;
    var player4 =  document.getElementById('user4').value;
    playersList = {User1: player1, User2: player2, User3: player3, User4: player4}
    console.log(playersList);

}


createDeck();
console.log(deck);
shuffle(getRandomInt(1, 52))
console.log(deck);
