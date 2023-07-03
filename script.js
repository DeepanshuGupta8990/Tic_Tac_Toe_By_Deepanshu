console.log("Welcome to TicTacToe")
let music1 = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
let steps = 0;
let X_Score = 0;
let Zero_Score = 0;
let stopage = 0;
let stopage2 = 0;
//Function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

//Function to check win
const checkWin = () => {
    let boxtexts = Array.from(document.getElementsByClassName("boxtext"));
    let wins = [
        [0, 1, 2, 14, 18, 0, 70],
        [3, 4, 5, 14, 50, 0, 70],
        [6, 7, 8, 14, 85, 0, 70],
        [0, 3, 6, -18.5, 50, 90, 70],
        [1, 4, 7, 15, 50, 90, 70],
        [2, 5, 8, 47, 50, 90, 70],
        [0, 4, 8, 5, 50, 45, 90],
        [2, 4, 6, 5, 50, 135, 90],
    ]
    wins.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "") && stopage2 == 0) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true;
            document.getElementById("img1").style.width = "200px";
            document.querySelector(".line").style.left = `${e[3]}%`
            document.querySelector(".line").style.top = `${e[4]}%`
            document.querySelector(".line").style.width = `${e[6]}%`
            document.querySelector(".line").style.transform = `rotate(${e[5]}deg)`
            stopage2++;
            setTimeout(() => {
                rest();
                steps = 0;
                stopage = 0;
                stopage2 = 0;
            }, 3000)
            if (boxtexts[e[0]].innerText == "X" && stopage == 0) {
                X_Score++;
                document.getElementById("xs").innerHTML = `X-score : ${X_Score}`;
                stopage++;
            }
            else if(boxtexts[e[0]].innerText == "0" && stopage == 0 ) {
                Zero_Score++;
                document.getElementById("zs").innerHTML = `0-score : ${Zero_Score}`;
                stopage++;
            }

        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn();
            audioturn.play();
            music1.play();
            checkWin();
            steps += 1;


            if (!isgameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

            if (steps == 9 && isgameover == true) {
                console.log("Inside" + steps)
                steps = 0;
            }
            else if (steps == 9) {
                rest();
                steps = 0;
            }
            isgameover = false;
        }

    })

})

//Add on click listener to reset
reset.addEventListener('click', () => {
    let boxtext = Array.from(document.getElementsByClassName('boxtext'));
    boxtext.forEach((element) => {
        element.innerHTML = ''
        turn = "X"
        steps = 0;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.getElementById("img1").style.width = "0px";
    
        document.querySelector(".line").style.width = "0vw"
    })
})

const rest = () => {
    let boxtext = Array.from(document.getElementsByClassName('boxtext'));
    boxtext.forEach((element) => {
        element.innerHTML = ''
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
        setTimeout(() => {
            document.getElementById("img1").style.width = "0px";
        }, 3000);
        document.querySelector(".line").style.width = "0vw"
    })
}
