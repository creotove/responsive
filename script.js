let hamburger = document.querySelector(".hamburger")
let navLinks = document.querySelector(".links")
let bars = document.querySelectorAll(".bars")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
    bars.forEach(e=>{
        e.classList.toggle("active")
    })
})
let link = document.querySelectorAll(".link")
link.forEach(e =>{
    e.addEventListener("click",()=>{
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
        bars.forEach(e=>{
            e.classList.remove("active")
        })


    })
})
// let link = document.querySelectorAll("link")
// link.forEach(e => e.addEventListener("click",()=>{
// })