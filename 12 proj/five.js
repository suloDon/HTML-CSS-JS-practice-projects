const imageSlide = document.querySelector('.sub_main');

const left_button = document.querySelector('.x');
const right_button = document.querySelector('.y');

let images = 1
let timer;

right_button.addEventListener("click", ()=>{
    images++;
    clearTimeout(timer)
    update();  
})

left_button.addEventListener('click', ()=>{
    images--;
    clearTimeout(timer)
    update();
    
})

const total_images = document.querySelectorAll("img");

update()
function update(){
    if (images > total_images.length){
        images = 1
    }else if (images < 1){
        images = total_images.length
    }
    imageSlide.style.transform = `translateX(-${(images-1) * 500}px)`

    timer = setTimeout(()=>{
        images++
        update()
    }, 4000)
}



const mainWork = document.querySelector('.toogle');
const bdy = document.querySelector('body')

let toogle = true
const moveMent = document.querySelector('.point')
moveMent.addEventListener('click',()=>{
    if(toogle){
        mainWork.classList.add('move_right');
        bdy.classList.add('xyz');
        mainWork.classList.remove('move_left');
        moveMent.classList.add('lmo');
        toogle = false
    }else{
        bdy.classList.remove('xyz')
        mainWork.classList.replace('move_right','move_left');
        moveMent.classList.remove('lmo')
        toogle = true
    }
   


})