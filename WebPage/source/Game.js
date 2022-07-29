var TEMP;
var score_1, score_2;
var x, y;
var Player1 = '';
var Player2 = '';


function setname() {

    while (Player1 == '' || Player2 == '') {
        Player1 = prompt("Enter player 1 name:", "Player  1");
        Player2 = prompt("Enter player 2 name:", "Player  2");
    }
    if (Player1 == null) { Player1 = 'Player  1'; }
    if (Player2 == null) { Player2 = 'Player  2'; }

    document.getElementById("N1").innerHTML = Player1;
    document.getElementById("N2").innerHTML = Player2;

}

function buttonclick(playerID) {

    if (playerID.id == 'P1') {
        x = 1;
        y = 2;
    }
    else {
        x = 2;
        y = 1;
    }

    TEMP = eval(document.getElementById("PS-" + x).innerHTML);

    buttonlock(x, y);

    score_1 = roll();
    document.querySelector(".dice1").setAttribute("src", "images/dice/dice_" + score_1 + ".png");

    score_2 = roll();
    document.querySelector(".dice2").setAttribute("src", "images/dice/dice_" + score_2 + ".png");

    if (score_1 == score_2 && score_1 != 1) {
        
        if((TEMP+score_1+score_2)>100) {
            document.getElementById("indicator").innerHTML = "<span>Sorry! </span>" + document.getElementById("N" + x).innerHTML + ". You cannot exceed 100";
        }
        else {
            TEMP = TEMP + score_1 + score_2;

            document.getElementById("indicator").innerHTML = document.getElementById("N" + x).innerHTML +
                " collected <span>Bonus chance</span> and " + (score_1 + score_2) + " points!";
        }

    }

    else if (score_1 == 1 && score_2 == 1) {
        TEMP = 0;

        document.getElementById("indicator").innerHTML = "<span>Oops!</span> " + document.getElementById("N" + x).innerHTML +
            " retreats to 0 points!";

        buttonlock(y, x);

    }

    else {
        if((TEMP+score_1+score_2)>100) {
            document.getElementById("indicator").innerHTML = "<span>Sorry! </span>" + document.getElementById("N" + x).innerHTML + ". You cannot exceed 100";
        }
    
        else {
            TEMP = TEMP + score_1 + score_2;

            document.getElementById("indicator").innerHTML = document.getElementById("N" + x).innerHTML +
                " collected " + (score_1 + score_2) + " points!";
        }
        buttonlock(y, x);

    }


    document.getElementById("PS-" + x).innerHTML = TEMP;

    if (TEMP == 100) {
        gameover();
    }

}

function buttonlock(i, j) {
    document.querySelector("#P" + i).style.opacity = 1;
    document.querySelector("#P" + j).style.opacity = 0.2;
    document.getElementById("P" + i).disabled = false;
    document.getElementById("P" + j).disabled = true;
}

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

function gameover() {

    document.getElementById("indicator").innerHTML = document.getElementById("N" + x).innerHTML +
        " won the game with " + TEMP + " points!";
    document.querySelector(".Score-" + x).innerHTML = '<figure><img src="images/cup/cup.jpg" alt="Champion"></figure>';


    document.querySelector(".playbutton-1").innerHTML = '<button type="button" class="roll" id="P1" onClick="replay()">Replay</button>';
    document.querySelector(".playbutton-2").innerHTML = '<button type="submit" class="roll" id="P2" onClick="newgame()">New Game</button>';

}

function replay() {

    document.querySelector(".Score-1").innerHTML = '<p>Score: <samp id="PS-1">0</samp></p>';
    document.querySelector(".Score-2").innerHTML = '<p>Score: <samp id="PS-2">0</samp></p>';
    document.querySelector(".playbutton-1").innerHTML = '<button type="button" class="roll" id="P1" onClick="buttonclick(this)">Roll</button>';
    document.querySelector(".playbutton-2").innerHTML = '<button type="button" class="roll" id="P2" onClick="buttonclick(this)">Roll</button>';

    document.getElementById("indicator").innerHTML = "Previous Winner: " + document.getElementById("N" + x).innerHTML;
}

function newgame() {
    location.reload();
}
