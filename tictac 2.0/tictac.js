var k = 0;
var j, i, w, count;
var x = document.getElementsByClassName("deactivate_link");
var y = document.getElementsByClassName("img_changer");

// declaring a 2d array in java script
var arr = new Array(3);
for (i = 0; i < 3; i++)arr[i] = new Array(3);

//initializing every element to 0
for (i = 1; i <= 3; i++)
    for (j = 1; j <= 3; j++)
        arr[i][j] = 0;

function f(a, b) {
    k++;
    if (k % 2 == 0) {
        document.getElementById("player_count_changer").innerHTML = "Player 1 Turn";
         y[3 * (a - 1) + (b - 1)].src = "circle.png";
        arr[(a - 1)][b - 1] = 2;
    }
    if (k % 2 == 1) {
        document.getElementById("player_count_changer").innerHTML = "Player 2 Turn";
        y[3 * (a - 1) + (b - 1)].src = "cross.png";
        arr[(a - 1)][b - 1] = 1;
    }

    x[3 * (a - 1) + (b - 1)].removeAttribute("href");

    if (k >= 5) { // for game to be over there should be atleast 5 attempts
        for (w = 1; w <= 2; w++) {

            for (i = 0; i < 3; i++) {

                for (j = 0, count = 0; j < 3; j++) {
                    if (arr[i][j] == w) count++;
                    if (count == 3) win(w);
                }
                for (j = 0, count = 0; j < 3; j++) {
                    if (arr[j][i] == w) count++;
                    if (count == 3) win(w);
                }
            }

            for (i = 0, count = 0; i < 3; i++) {
                if (arr[i][i] == w) count++;
                if (count == 3) win(w);
            }
            for (i = 0, count = 0; i < 3; i++) {
                if (arr[i][2 - i] == w) count++;
                if (count == 3) win(w);
            }
        }
    }

}

function win(a) {

    for (i = 0; i < 9; i++) {
        x[i].removeAttribute("href");
    }

    if (a == 1) document.getElementById("heading").innerHTML = "Player 1 Won! (X)";
    if (a == 2) document.getElementById("heading").innerHTML = "Player 2 Won! (O)";
    document.getElementById("player_count_changer").innerHTML = "";

}