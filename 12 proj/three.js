const change = document.querySelector(".top");
const para = document.querySelector(".para");

window.addEventListener("scroll", () =>{
    if(window.scrollY > para.offsetTop - change.offsetHeight ){
        change.classList.add("active");
    }
    else{
        change.classList.remove("active");
    }
})