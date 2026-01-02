const roll1btn = document.getElementById('roll1');
const roll2btn = document.getElementById("roll2");
const result1span = document.getElementById("result1");
const result2span = document.getElementById("result2");
const winnerH3 = document.getElementById("winner");


let player1Roll = null;
let player2Roll = null;

roll1btn.disabled = false ;
roll2btn.disabled = false ;


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame(){
    player1Roll = null;
    player2Roll =  null;
    result1span.textContent = "-";
    result2span.textContent = "-";

    winnerH3.textContent ="";

    roll1btn.disabled = false ;
    roll2btn.disabled = false ;
}

function decideWinnerAndreset() {
    if(player1Roll >player2Roll ){
        winnerH3.textContent = "player 1 wins!";
    }else if(player2Roll > player1Roll ){
        winnerH3.textContent = " player 2 wins!";
    }else {
        winnerH3.textContent = "it's a tie!";
    }


    roll1btn.disabled = true;
    roll2btn.disabled = true ;

    setTimeout(resetGame , 3000);
}


function handleRoll1(playerNumber ) {
    const roll = getRandomNumber(1,6);


    if(playerNumber === 1){
        player1Roll = roll;
        result1span.textContent = roll;
        roll1btn.disabled = true;
        roll2btn.disabled = false;
    }else {
        player2Roll = roll;
        result2span.textContent = roll;
        roll2btn.disabled = true ;
        roll1btn.disabled = false;
    }




    winnerH3.textContent = ""
    
    if(player1Roll !== null && player2Roll !== null){
        decideWinnerAndreset();
    }


    





}

roll1btn.addEventListener("click" , () => handleRoll1(1));
roll2btn.addEventListener("click" , () => handleRoll1(2));