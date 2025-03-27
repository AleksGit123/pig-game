"use strict"

let newGame = document.querySelector(".new_game_button");
let player1 = document.querySelector(".s1");
let player2 = document.querySelector(".s2");
let current1 = document.querySelector(".c1");
let current2 = document.querySelector(".c2");
let dice = document.querySelector(".dice");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let leftP = document.querySelector(".left_s");
let rightP = document.querySelector(".right_s");
let currentScore = 0;
let score1 = 0;
let score2 = 0;



dice.style.display = "none";


roll.addEventListener("click", () => {
   
    let randomNum = Math.floor(Math.random() * 6) + 1; // Generate random number (1-6)
    // current score store

    currentScore += randomNum;
   

    // dice appear
    dice.style.display = "block";
    dice.src = `images/dice-${randomNum}.png`; // Change the image source
    
    // score increasing

    if(leftP.classList.contains("active")){
        current1.innerHTML = currentScore;
    }
    else{
     
        current2.innerHTML = currentScore;
    }

       // if dice equals 1
    // if(randomNum === 1){
    //     gameOver();
    // }
 

   
console.log(currentScore);
});


hold.addEventListener("click",()=>{
    if(leftP.classList.contains("active")){
        score1 += currentScore;
        player1.innerHTML = score1;
        current1.innerHTML = 0;
        leftP.classList.remove("active");
        rightP.classList.add("active");
    }      
    else{
        score2 += currentScore
        player2.innerHTML = score2;
        current2.innerHTML = 0;
        leftP.classList.add("active");
        rightP.classList.remove("active");
    }
    currentScore = 0;

    if(parseInt(player1.innerHTML) >= 100){
        leftP.style.backgroundColor = "#FFD700";
        restart();
    }
    else if(parseInt(player2.innerHTML) >= 100){
        rightP.style.backgroundColor = "#FFD700";
        restart();
    }
        
})

let gameOver = () => {
     // player changing
        if(leftP.classList.contains("active")){
            score1 = 0;
            player1.innerHTML = "0";
            current1.innerHTML = 0;
            leftP.classList.remove("active");
            rightP.classList.add("active");

        }
        else{
            score2 = 0;
            player2.innerHTML = "0";
            current2.innerHTML = 0;
            leftP.classList.add("active");
            rightP.classList.remove("active");
        }    
}


let restart = () => {
    roll.disabled = true;
    hold.disabled = true;
}
