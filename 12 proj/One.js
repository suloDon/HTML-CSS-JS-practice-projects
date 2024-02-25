

let time = document.getElementById("time");

let hour = 0;
let min = 0;
let sec = 0;
setInterval('timeF()', 1000);
timeF();
function timeF(){
    let eTime = new Date();
    hour = eTime.getHours();
    hour = update(hour);
    min = eTime.getMinutes();
    min = update(min);
    sec = eTime.getSeconds();
    sec = update(sec);
    let amOrPm = hour >= 12 ? 'pm':'am';
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}:${min}:${sec}:${amOrPm}`;
}

function update(up){
    return (("1"+up).length) > 2 ? up: "0"+up;
}


// Now multiply quiz

let questions = document.getElementById('qtion');

let random = Math.floor((Math.random()*10)+1);
let random2 = Math.floor((Math.random()*10)+1);


questions.innerHTML = `What is ${random} multiply by ${random2} ?`;
let correct_answe = random*random2;

let score = JSON.parse(localStorage.getItem('score')) || {
    correct:0,
    right:0,
    wrong:0,
};

let scorex = document.getElementById('Score');

let submit = document.getElementById('button');
submit.addEventListener("click", ()=>{
    let answer = document.getElementById('ans');
    answer = Number(answer.value);
    if (correct_answe === answer){
        score.correct += 1;
        score.right += 1;
        updat();
       
    }else{
        score.correct += 1;
        score.wrong += 1;
        updat();
    }
});

function updat(){
    localStorage.setItem('score',JSON.stringify(score));
}

scorex.innerHTML= `Total Question: ${score.correct}
Correct Ans:${score.right}
Wrong Ans:${score.wrong}`;

// rock paper scissor 

let topShow = document.getElementById('sho');
let lastShow = document.getElementById('res');

let resul = '';
let scor = JSON.parse(localStorage.getItem('scor'))|| {
    win: 0,
    lost: 0,
    draw: 0
}
document.getElementById('rock').addEventListener('click', function(){
    resultt('rock');
});
document.getElementById('paper').addEventListener('click', function(){
    resultt('paper');
});
document.getElementById('scissors').addEventListener('click', function(){
    resultt('scissors');
});
document.getElementById('rset').addEventListener('click', ()=>{
    scor.win = 0;
    scor.lost = 0;
    scor.draw =  0;
    localStorage.removeItem('scor');
    lastShow.innerHTML = `Win:${scor.win} Lost:${scor.lost} Draw:${scor.draw}`;

});



function compMove(){
    let computer = Math.floor(Math.random()*3);
    if (computer === 0){
        computer = 'rock';
    } else if (computer === 1){
        computer = 'paper';
    }else{
        computer = 'scissor';
    } return computer ;
}


function resultt(but){
    let comput = compMove();
    if(but ==='rock'){
        if (comput === 'rock'){
            resul = 'Draw';
        } else if (comput == 'paper'){
            resul = 'lose';
        } else if (comput == 'scissor'){
            resul = 'win';
        } else{
            alert("mistake");
        }
    }else if (but ==='paper'){
        if (comput == 'rock'){
            resul = 'win';
        } else if (comput == 'paper'){
            resul = 'Draw';
        } else if (comput == 'scissor'){
            resul = 'lose';
        }else{
            alert("mistake");
        }
    }else if (but ==='scissors'){
        if (comput = 'rock'){
            resul = 'lose';
        } else if (comput = 'paper'){
            resul = 'win';
        } else if (comput = 'scissor'){
            resul = 'Draw';
        }else{
            alert("mistake");
        }
    }
    if (resul == 'lose'){
        scor.lost += 1
        upd();
    }else if(resul == 'Draw'){
        scor.draw += 1;
        upd();
    }else if(resul == 'win'){
        scor.win += 1;
        upd();
    }
    topShow.innerHTML = `Computer: ${comput} You: ${but}`;
    lastShow.innerHTML = `Result:Win:${scor.win} Lost:${scor.lost} Draw:${scor.draw}`;
    
};

function upd(){
    localStorage.setItem('scor', JSON.stringify(scor));
}

// mouse hover fun

const butn = document.querySelector('.rs');

butn.addEventListener("mouseover", (event)=>{
    let x = (event.pageX - butn.offSetLeft);
    let y = (event.pageY - butn.offSetLeft);

    butn.style.setProperty('--xPos', x + "px");
    butn.style.setProperty('--yPose', y + "px");
})