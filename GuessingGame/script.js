let totalAttemps=5;
let attempts=0;
let totalWons=0;
let totalLosts=0; 


const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const remainingAttempts=cardBody.querySelector(".remainingAttempts");

const lostWonMessage=document.createElement("p");


form.addEventListener("submit",function(event){
    event.preventDefault();
    //checkResult(guessingNumber.value);

    attempts++; 
    if(attempts==5){
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }
    if(attempts<6){
       let guessNumber=Number(guessingNumber.value);
       checkResult(guessNumber);
       remainingAttempts.innerHTML=`Remaining attempt:${totalAttemps-attempts}`;

    }
    guessingNumber.value=" ";
});


function checkResult(guessingNumber){
    const randomNumber=getRandomNumber(7);
    if(guessingNumber==randomNumber){
       resultText.innerHTML=`Yes,You have won`;
       totalWons++;
    }else{
        resultText.innerHTML=`Opps ! Sorry, You have lost, Random Number was:
        ${randomNumber}`;
        totalLosts++;
    }
    lostWonMessage.innerHTML=`Won:${totalWons},Lost${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){
   return Math.floor(Math.random()*limit)+1;
}


