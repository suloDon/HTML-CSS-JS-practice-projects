const mainContainer = document.querySelector('.container')

const click = document.querySelector('.help');
const back = document.querySelector('.back_but');

const popUp = document.querySelector('.pop');
click.addEventListener('click', () =>{
        mainContainer.classList.add('activeX');
        popUp.classList.remove('active')

})

back.addEventListener('click', ()=>{
    mainContainer.classList.remove('activeX');
    popUp.classList.add('active')
})
