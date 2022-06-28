const minnum = document.querySelector('.minnumber'),
        maxnum = document.querySelector('.maxnumber'),
        getinput = document.querySelector('#gnumber'),
        getbtn = document.querySelector('.btn'),
        message1 = document.querySelector('.message1'),
        message2 = document.querySelector('.message2'),
        getgame = document.querySelector('#game');


let min =1,
    max = 10,
    gameleft = 3,
    winningnum = randomnum(min,max);

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener('click',function(){
    // console.log(getinput.value);

    let guess = parseInt(getinput.value);

    if(guess <min ||guess > max || isNaN(guess)){
        // message2.textContent = `Please enter number between ${min} to ${max}.`;
        setmessage2(`Please enter number between ${min} to ${max}.`,'black');
    }
    

    if(guess == winningnum){
        // getinput.disabled = true;

        // getinput.style.borderColor='green';

        // message1.textContent = `${winningnum} is correct. You Won`;

        // message1.style.color = 'green';

        // setmessage1(`${winningnum} is correct. You Won`,'green');

        // getbtn.innerText = "Play again";
        gameover(true,`${winningnum} is correct. You Won`);
    }else{
        gameleft--;
        if(gameleft === 0){
            // getinput.disabled = true;
            // getinput.style.borderColor = 'red';
            // message2.textContent = `Game Over, You lose. The correct number is ${winningnum}`;
            // message2.style.color = 'red';

            // setmessage1(`Game Over, You lose. The correct number is ${winningnum}`,'red');
            // getbtn.innerText = "Play again";

            gameover(false,`Game Over, You lose. The correct number is ${winningnum}`);
        }else{
            // getinput.style.borderColor ="red";
            getinput.value = '';
            // message1.innerText = `${guess} is not correct, ${gameleft} guess left`;

            setmessage1(`${guess} is not correct, ${gameleft} guess left`,'blue');

        }
    }
});

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setmessage2(msg,color){
    message2.innerHTML = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.innerHTML = '';
    },2000);
}

function gameover(won,msg){
    let color;

    won ==true ? color='green' : color='red';

    getinput.disabled = true;

    getinput.style.borderColor = color;

    setmessage1(msg,color);
    getbtn.textContent="Play Again";

    // getbtn.className = "btn playagain";
    getbtn.classList.add('playagain');

}

getgame.addEventListener('mouseup',(e)=>{
    // console.log(e.target);
    if(e.target.className == 'btn playagain'){
        // console.log('i am playagain');
        window.location.reload();
    }
})

function randomnum(min,max){
    let getrandomnum=Math.floor(Math.random()*(max-min)+1);
    return getrandomnum;
}
