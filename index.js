let logo = document.querySelector(".logo")
let menu = document.querySelector(".menu")
let rTc = document.querySelector(".rtc")
let sharqi = document.querySelector(".Shariq")
let computer = document.querySelector(".computer")
let cur = document.querySelector(".curser")
let box = document.querySelectorAll(".box")
console.log('====================================');
console.log(box);
console.log('====================================');
// let e1 = document.querySelector(".e1")
// let e2 = document.querySelector(".e2")
// let e3 = document.querySelector(".e3")
// let e4 = document.querySelector(".e4")
// let e5 = document.querySelector(".e5")
// let e6 = document.querySelector(".last")

let allElements = document.querySelectorAll(".elem")



allElements.forEach((e) => {
    e.addEventListener("mousemove",()=>{
        cur.innerHTML = "View <br> Details"
        cur.style.width = "80px"
        cur.style.height = "80px"
    })
    e.addEventListener("mouseleave", ()=>{
        cur.innerHTML = ""
        cur.style.width = "18px"
        cur.style.height = "18px"
    })


    // gsap.from(e,{
    //     y:100,
    //     duration: 1,
    //     yoyo: true
    // })

})

let elment = document.querySelectorAll(".elem h1")


// gsap.from(".elem h1", {
//     y: 200,
//     duration: 1,
//     delay: 1,
//     // scrollTrigger: {
//     //     trigger: ".elem h1",
//     //     scroller: "body"
//     // }
// })

// e1.addEventListener("mousemove", (e) => {
//     cur.innerHTML = "View Details"
//     cur.style.width = "80px"
//     cur.style.height = "80px"
// })


gsap.from(".logo",{
    y:-100,
    duration:0.5,
    delay: 0.3
})

gsap.from(".menu",{
    y:-100,
    duration:0.5,
    delay: 0.7
})



window.addEventListener("DOMContentLoaded", () => {
    gsap.from(rTc,{
        y:150,
        duration: 0.4,
        delay: 0.9
    })

    gsap.from(sharqi,{
        y:156,
        duration: 0.4,
        delay: 1.1
    })

    gsap.from(computer,{
        y:156,
        duration: 0.4,
        delay: 1.3
    })

    gsap.from(".hero-sub-text h1", {
        y:100,
        delay:1,
        duration:0.5,
        stagger: 0.1
    })

    gsap.from(".hero-footer h3, .icons",{
        y:100,
        stagger: 0.3,
        delay: 1.5
    })
})


menu.addEventListener("click", () => {
    document.querySelector(".menubar").style.display = "block"
    document.querySelector(".menu").style.display = "none"
    gsap.from(".menubar ul li a", {
        opacity:0,
        duration: 0.1,
        delay: 0,
        stagger: 0.5,
    })
})

window.addEventListener("mousemove", (e) => {
    gsap.to(cur, {
        x: e.clientX,
        y: e.clientY
    })
})

// gsap.from(".courses .elem h1 a",{
//     y: 100
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY
    if(scrollValue >= 261){
        elment.forEach(e => {
            e.classList.add("action")
        })
    }
})