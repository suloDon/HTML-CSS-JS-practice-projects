// const numb = Math.floor(Math.random()*10+1);
// let guesses = 0;

// document.getElementById("submit_but").onclick = function(){
//     let rest = document.getElementById("guess").value;
//     guesses += 1;

//     if (rest == numb){
//         alert(`You choosed correct in ${guesses}guesses`);
//     }else if(numb > rest){
//         alert("small");
//     }
//     else{
//         alert('large');
//     }
// }

// document.getElementById("but").onclick = function(){
//     let temp;
//     if(document.getElementById("cel").checked){
//         temp = document.getElementById("teemp").value;
//         temp = Number(temp);
//         temp = toCelcius(temp);
//         document.getElementById("y").innerHTML = temp;
//     }
//     else if(document.getElementById("jel").checked){
//         temp = document.getElementById("teemp").value;
//         temp = Number(temp);
//         alert(toIn(temp),"fff");
//     }
//     else{
//         alert("Do some thing bitch");
//     }
// }
// function toCelcius(temp){
//     return (temp - 1);
// }
// function toIn(temp){
//     return temp * 9 + 32;
// }

// let n = 0;
// document.getElementById("number").innerHTML = n;

// document.getElementById("in_but").onclick = function(){
//     n += 1;
//     document.getElementById("number").innerHTML = n;
// }

// document.getElementById("de-but").onclick = function(){
//     n -= 1;
//     document.getElementById("number").innerHTML = n;
// }

// const hello = function(userName){
//     console.log(`hello ${userName}`)
// }


// let help = [1,2,5,3,4];

// let g = help.sort((x,y) => y - x);
// console.log(g);


// document.getElementById("add").onclick = function(){
//         x = document.getElementById("x").value;
//         x = Number(x);
//         y = document.getElementById("y").value;
//         y = Number(y);
//         result = add(x,y);
//         document.getElementById("result").innerHTML = result;
// }

// document.getElementById("add").onclick = function(){
//     let x = Number(document.getElementById("x").value);
//     let y = Number(document.getElementById("y").value);
//     result = add(x,y);
//     document.getElementById("result").innerHTML = result;
// }

// document.getElementById("substract").onclick = function(){
//     let x = Number(document.getElementById("x").value);
//     let y = Number(document.getElementById("y").value);
//     result = subtract(x,y);
//     document.getElementById("result").innerHTML = result;
// }


// document.getElementById("multiply").onclick = function(){
//     let x = Number(document.getElementById("x").value);
//     let y = Number(document.getElementById("y").value);
//     result = multiply(x,y);
//     document.getElementById("result").innerHTML = result;
// }


// document.getElementById("divide").onclick = function(){
//     let x = Number(document.getElementById("x").value);
//     let y = Number(document.getElementById("y").value);
//     result = divide(x,y);
//     document.getElementById("result").innerHTML = result;
// }
// function add(x,y){
//     return x + y;
// }

// function subtract(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// function divide(x,y){
//     return x / y;
// }

const tm = document.getElementById("tim");
update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    tm.innerHTML= time(date);
    function time(date){
        let min = date.getMinutes();
        min = addO(min);
        let hour = date.getHours();
        hour = addO(hour);
        let sec = date.getSeconds();
        sec = addO(sec);
        let amOrPm = (hour <= 12) ? "am": "pm";
        hour = hour%12 || 12 ;

        return `${hour}:${min}:${sec}${amOrPm}`;
    }
    function addO(time){
       time = time.toString();
       return time.length <2 ? "0"+time: time ;
    }
}


// Rock pape Scissors
let result = ''
let results = JSON.parse(localStorage.getItem('results')) 
|| {
    win: 0,
    lose:0,
    draw: 0
}

document.getElementById("reset").onclick = function(){
    results.win = 0;
    results.draw = 0;
    results.lose = 0;
    localStorage.removeItem('results');
    alert(`Reset Sucessfully
    win:${results.win} Lose:${results.lose} draw:${results.draw}`)
}

document.getElementById("rock").onclick = function() {
    playGame("rock");
}

document.getElementById("paper").onclick = function() {
    playGame("paper");
}

document.getElementById("scissor").onclick = function() {
   playGame("scissor");
}

function computerChoose(){
    let computer = Math.floor(Math.random()*3)
    if(computer == 1){
        computer = "rock";
    } else if (computer == 2){
        computer = "paper";
    } else {
        computer = "scissor"
    }return computer;
}

function playGame(playerMove){
    let computer  = computerChoose();
    if(playerMove === "rock"){
        if(computer == "rock"){
            result = 'Draw';
        } else if (computer == "paper"){
            result = 'You lose';
        } else if(computer == "scissor"){
            result = 'You won';
        } else{
            result = "Wrong baby";
        }
    }else if (playerMove === "paper"){
        if(computer == "rock"){
            result = 'You won';
        } else if (computer == "paper"){
            result = 'Draw';
        } else if(computer == "scissor"){
            result =  'You lose';
        } else{
            result = "Wrong baby";
        }
    }else if (playerMove = "scissor"){
        if(computer == "rock"){
            result = 'You lose';
        } else if (computer == "paper"){
            result = 'You won';
        } else if(computer == "scissor"){
            result =  'Draw';
        } else{
            result = "Wrong baby";
        }
    }
    if (result === 'Draw'){
        results.draw += 1;
    }else if (result === 'You won'){
        results.win += 1
    }else if (result === 'You lose'){
        results.lose += 1;
    }
    localStorage.setItem('results', JSON.stringify(results));

    alert(`computer choosed ${computer},and You choosed ${playerMove}\n${result}
    win:${results.win} Lose:${results.lose} draw:${results.draw}`);
}





// Timer process hear ok brother enjoy it frnd...
const timer = document.getElementById("time");
const start = document.getElementById("strt");
const pause = document.getElementById("pause");
const clear = document.getElementById("clearr");

let startTime = 0;
let currentTime = 0;
let elapesedTime = 0;
let paused = true;
let intervalID;
let hour = 0;
let minute = 0;
let second = 0;

start.addEventListener("click", () => {
    if (paused){
        paused = false;
        startTime = Date.now() - elapesedTime;
        intervalID = setInterval(updateTime, 75);
    }
});
pause.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapesedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});
clear.addEventListener("click", () => {
    clearInterval(intervalID);
    startTime = 0;
    currentTime = 0;
    elapesedTime = 0;
    paused = true;
    intervalID;
    hour = 0;
    minute = 0;
    second = 0;
    timer.textContent = "00:00:00";
});

function updateTime(){
    elapesedTime = Date.now() - startTime;

    hour = Math.floor((elapesedTime / (1000*60*60)) % 60);
    hour = nextup(hour);
    second = Math.floor((elapesedTime / 1000) % 60);
    second = nextup(second);
    minute = Math.floor((elapesedTime / (1000 * 60) ) % 60);
    minute = nextup(minute);

    timer.textContent = `${hour}:${minute}:${second}`;

    function nextup(units){
    return (("0")+units).length > 2 ? units:"0"+units; 
    }
}

const haha = {
    help:'me',
    cool:'meeee'
}



// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(true){
//             resolve("Its finally over bro. Move on")
//         }else{
//             reject("You are shit wtf are you even trying to do bro")
//         }
//     }, 2000)
// }).then((result)=>{
//     console.log(result)
// })
// .catch((erroe)=>{
//     console.log(reject)
// })
// .finally(()=>{
//     console.log("It's ok you are a grown up man")
// })






