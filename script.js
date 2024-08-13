let logo = document.querySelector(".container .logo")
let active = document.querySelector(".container .gallery")

logo.addEventListener("click",()=>{
    active.classList.toggle("active")
})