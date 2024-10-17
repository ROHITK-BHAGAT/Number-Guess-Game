(function(){
const userInput=document.querySelector('.input-User');
let form=document.querySelector('form');
let submit=document.querySelector('#submit');
let startGame=document.querySelector('#start');
let hint=document.querySelector('#hint');
let guessNumber=document.querySelector('#GuessNo');

let guessNumberArray=[];


let randomNo=Math.round(Math.random()*100);


form.addEventListener('submit',(e)=>{
    e.preventDefault()
   let userInputValue=parseInt(userInput.value);

    if(randomNo < userInputValue){
        hint.innerHTML="Too high!"
    }else if(randomNo > userInputValue){
        hint.innerHTML="Too low!"
    }else{
        hint.innerHTML="Congrats🥳!!";
        startGame.removeAttribute('disabled');
        submit.setAttribute('disabled',true);

    }
    guessNumberArray.push(userInputValue);
    guessNumber.innerText='Your guesses: ' + guessNumberArray.join(' , ');
    userInput.value='';
   
})

startGame.addEventListener('click',()=>{
    guessNumber.innerText='';
    hint.innerText='';
    startGame.setAttribute('disabled',true);
    submit.removeAttribute('disabled');
    randomNo=Math.round(Math.random()*100);

})
})()



