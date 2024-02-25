const bom = document.querySelector(".req");
let help = true;
bom.addEventListener('click', () =>{
    if (help){
        bom.classList.add("req_js");
        bom.innerHTML = "Requested";
        help = false;
    }else{
        bom.classList.remove("req_js");
        help = 'true';
        bom.innerHTML = "Request now";
    }   
});

const adCart = document.querySelector(".add");
let x = true;
adCart.addEventListener("click", () =>{
    if(x){
        adCart.classList.add("add_js");
        adCart.innerHTML = "Added to cart";
        x = false;
    }else{
        adCart.classList.remove("add_js");
        adCart.innerHTML = "Add to cart";
        x = true;
    }
    
});

const sch = document.querySelector(".schedule");
let y = true;
sch.addEventListener("click", ()=>{
    if(y){
        sch.classList.add("shy");
        sch.innerHTML = "Scheduled";
        y = false;
    } else {
        sch.classList.remove("shy");
        sch.innerHTML = "Schedule for later";
        y = true;
    }
});

let haha = document.querySelector(".usrValue");
let botn = document.getElementById("calc");
const text = document.querySelector(".text");
botn.addEventListener("click", ()=>{
    result = Number(haha.value);
    if (result <= 0){
        text.classList.add("lost");
        text.innerHTML = "Write number greater than 0";
    }else{
        text.innerHTML = `${result}`;
        text.classList.remove("lost");
    }
})


const btn = document.querySelector('.fk');
const return_ = document.querySelector('.hell');
const array = [];

btn.addEventListener('click',()=>{
        addTodo();
});

fx();

function fx(){
    let home = '';

    for (let i = 0; i<array.length; i++){
        const ghar = array[i];
        const {name , date_} = ghar;
        const HTML = `
        <div>${name}</div>
        <div>${date_}</div> 
         <button onclick = "
         array.splice(${i},1);
         fx();
         ">Delete</button>
        `
        home += HTML;
        console.log(HTML)
      
    }
    return_.innerHTML = home;

    

}

function addTodo(){
    const inValu = document.querySelector(".xX");
    const name = inValu.value;
    const due = document.querySelector(".nono");
    const dom = due.value;
    array.push({
        name: name, 
        date_: dom})
        console.log(array);
    inValu.value = '';
    due.value = "clear";
    fx();
}

/////////////////////////////////////////////////////////



const touch = document.querySelector('.Baby');

const xs = document.querySelector('.clu');

touch.addEventListener("click", ()=>{
    hoho();
})

army = [];
vh();

function vh(){
    
    let vhh = "";
    for (let i= 0; i < army.length; i++){
        const x = army[i];
        const HTMLS = `<p>${x} 
        <button onclick = "
        army.splice(${i} , 1)
        vh();
        ">
        Del</button></p>`;
        vhh += HTMLS;
        console.log(vhh);   
    }
    xs.innerHTML = vhh;
}


function hoho(){
    const writeMe = document.querySelector(".blue");
    const helpMe = writeMe.value;
    army.push(helpMe);
    writeMe.value = ""; 
    vh();
}


////////////////////////////////////////////////////////////////////////////

// Character counter now its his turn ?????????

let character = document.querySelector("#texA");
const txf = document.getElementById("tc");
const remai = document.getElementById("fk");
character.addEventListener('keyup', ()=>{
    totalCharacter()
    remaining()
})


function totalCharacter(){
    let xy = character.value.length;
    txf.innerHTML = `Total Character: ${xy}`;
   
}

function remaining(){
    let yz = (character.value.length - 100);

    remai.innerHTML = `Remaining Character: ${yz}`;
}