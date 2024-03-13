gsap.registerPlugin(ScrollTrigger);

// new kursor({
//     type: 2,    
// })

const lenis = new Lenis({
    duration: 1.5,
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), //_____lenis Standart ?
    easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), //________________easeOutCirc !!
    // easing: (t) => 1 - Math.pow(1 - t, 5), //________________easeOutQuint ?
    // easing: (t) => 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2), //easeOutBack !
    // easing: (t) => 1 - Math.pow(1 - t, 3), //________________easeOutCubick ?
    // easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), //________________easeOutExpo !

});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// const section_1 = document.getElementById('vertical');
// const col_left = document.querySelector('.col_left');
// const timeln = gsap.timeline({
//     // paused: true
// });

// timeln.fromTo(col_left, {
//         y: 0,
//         opacity: 1,
//     },{
//         y: '140vh',
//         opacity: .3,
//         scale: .7,
//         x: '-35vw',
//         // duration: 1,
//         ease: 'none'
//     }, 0);

// const scroll_1 = ScrollTrigger.create({
//     animation: timeln,
//     trigger: section_1,
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true,
//     // pin: true
// })


// const section_2 = document.getElementById('horizontal');
// let box_items = gsap.utils.toArray('.horizontal__item');

// gsap.to(box_items, {
//     xPercent: -100 * (box_items.length - 1),
//     // ease: 'sine.out',
//     scrollTrigger: {
//         trigger: section_2,
//         pin: true,
//         scrub: 3,
//         snap: 1 / (box_items.length - 1),
//         end: "+=" + section_2.offsetWidth
//     }
// });




// _______________________________________First section____________________________________
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW


// _______________________________________Figure text___________________________________
const tl_text = gsap.timeline();
tl_text.to('.t_1', { duration: .3, text: "{script>?/...", repeat: -1, ease: "none", repeatDelay: 2 })
tl_text.to('.t_2', { duration: .3, text: "[@ $data", repeat: -1, ease: "none", repeatDelay: 2 })
tl_text.to('.t_3', { duration: .3, text: "http//artisan/dev", repeat: -1, ease: "none", repeatDelay: 2 })
tl_text.to('.t_4', { duration: .3, text: "{...}", repeat: -1, ease: "none", repeatDelay: 2 })
tl_text.to('.t_5', { duration: .3, text: "x: -10", repeat: -1, ease: "none", repeatDelay: 2 })
tl_text.to('.fig_text', { duration: .1, text: "", repeat: -1, ease: "none", repeatDelay: 2 })
// _______________________________________First section____________________________________
const arrow_tl = gsap.timeline({repeat: -1, repeatDelay: 2, })
arrow_tl.to('.arrow', {y: 50, duration:1, ease: 'bounce.out'})

const tl_1 = gsap.timeline();
tl_1.to('#hero_1_1', { y: -15, opacity: 0, duration: 1, })
tl_1.to('#hero_1_2', { y: -15, opacity: 0, duration: 1, }, .2)
tl_1.to('.hero_2', { y: -70, scale: .7, duration: 4 }, .1)
tl_1.to('.logo_text', { y: 5, opacity: 1, duration: 2 }, 1.5)
tl_1.to('#figure', {x: -500, y: -10, opacity: 0, scale:.3, duration: 4}, 2)
tl_1.to('.figure_text', { opacity: 0, duration: 1}, 2)
tl_1.to('#hero_point', { y: 70, x: -20, rotation: -60, duration: .3 }, 1.5)
tl_1.to('#hero_point', { y: 0, x: -50, ease: "bounce.out", rotation: 30, duration: .3 }, 1.9)
tl_1.to('#hero_point', { x: -100, scale: 3, rotation: 180, duration: 1.4 }, 2.2)
tl_1.to('#hero_point', { y: 40, x: -150, scale: 15, rotation: 360, duration: .7 }, 4)
tl_1.to('#hero_point', { scale: 75, rotation: 540, duration: .5 }, 4.7)
tl_1.to('.arrow', { y: -30, duration: 1 }, 3)
tl_1.to('.arrow', { y: -6, duration: 1 }, 4)
tl_1.to('.arrow-scroll', { opacity: 0, duration: 1 }, 4)
// tl_1.to('.arrow-line', {y: -200, scaleY:1.5,  duration: 2 }, 3)
tl_1.to('.hero_2_letter', {
    x: -10, y: -80,
    rotateX: "-35deg", rotateY: "-45deg", rotateZ: "-10deg",
    duration: 2,
    marginLeft: '-2vw',
    opacity: 0,
    stagger: {
        // grid: [7, 15],
        from: "end",
        amount: 1
    },
}, 2)

ScrollTrigger.create({
    animation: tl_1,
    trigger: "#first",
    toggleActions: "restart reverse restart reverse",
    start: "top top",
    end: "164% top",
    // markers: true,
    scrub: 1,
    pin: true
})

// _______________________________________Second section___________________________________
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

//_________________________________________parallax
// const tl_2_arive = gsap.timeline();
// tl_2_arive.fromTo('.design',
//     { y: 70,  opacity: 1 },
//     { y: -50,  opacity: 1, duration: .1, }, 0)

// ScrollTrigger.create({
//     animation: tl_2_arive,
//     trigger: "#second",
//     toggleActions: "restart reverse restart reverse",
//     start: "-50% top",
//     end: "70% top",
//     markers: true,
//     scrub: 1,
//     // pin: true
// })
// _________________________________________H4 && img appearance____________________________
const tl_2_h4_appear = gsap.timeline();
tl_2_h4_appear.from('.design_2', { rotateX: 80, opacity: 0, scale: .1, y: 50, duration: 1, })
tl_2_h4_appear.from('.design_1', { rotateX: 80, opacity: 0, scale: .1, y: 50, duration: 1, }, .5)
tl_2_h4_appear.from('.cat-img-box', { opacity: 0, scale: .1, y: 150, duration: 1, }, .5)
// tl_2_h4.to('.design_2', { x: -16, duration: 10, }, 0)
// tl_2_h4.to('.img_parallax',{ y: 30, scale: 1.1,  duration: 10, },0)
ScrollTrigger.create({
    animation: tl_2_h4_appear,
    trigger: ".design",
    toggleActions: "restart none none reverse",
    start: "top 80%",
    // end: "90% top",
    // markers: true,
    // scrub: 1,
    // pin: true
})

// _________________________________________H4 shift_______________________________________
const tl_2_h4 = gsap.timeline();
tl_2_h4.to('.design_1', { x: 18, duration: 10, })
tl_2_h4.to('.design_2', { x: -20, duration: 10, }, 0)
// tl_2_h4.to('.img_parallax',{ y: 30, scale: 1.1,  duration: 10, },0)
ScrollTrigger.create({
    animation: tl_2_h4,
    trigger: ".design",
    toggleActions: "restart reverse restart reverse",
    start: "top 30%",
    end: "150% top",
    // markers: true,
    scrub: 1,
    pin: true
})

// ________________________________________text disapear_____________________________________
const tl_2_h4_text = gsap.timeline();
tl_2_h4_text.to('.second-text-block', { opacity: 0, duration: 1 })
// tl_2_h4_text.to('.design', { opacity: 0, y: -200, duration: .5})
ScrollTrigger.create({
    animation: tl_2_h4_text,
    trigger: ".second-text-block",
    toggleActions: "restart none none reverse",
    start: "top 15%",
    // end: "150% top",
    // markers: true,
    // scrub: 1,
    pin: true
})

// _______________________________________Third section___________________________________
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
const tl_2_h4_serv = gsap.timeline();
tl_2_h4_serv.from('.serv-1', { y: -150, x: -20, duration: .1 })
tl_2_h4_serv.from('.serv-2', { y: -140, x: -20, duration: .1, opacity: 0, scale: .8 }, 0)
tl_2_h4_serv.from('.serv-3', { y: -130, x: -20, duration: .1, opacity: 0, }, 0)
tl_2_h4_serv.from('.serv-descr', { y: -30, x: -20, duration: .05, opacity: 0, }, 0)
tl_2_h4_serv.from('.serv-li', {
    x: 550, y: 480,
    rotateX: "-35deg", rotateY: "-4deg", rotateZ: "-10deg",
    duration: .1,
    color: '#777777',
    scale: .6,
    opacity: 0,
    stagger: {
        // grid: [7, 15],
        from: "random",
        amount: .05
    },
}, 0)
// tl_2_h4_serv.from('.and', { y: 30, x: 50, duration: .05, opacity: 0, }, .1)
// tl_2_h4_serv.to('.and', { y: 30, x: -10, duration: .05, scale: 1.6, }, .2)
tl_2_h4_serv.to('.serv-descr', { y: -30, x: -20, duration: .05, opacity: 0, }, .1)

ScrollTrigger.create({
    animation: tl_2_h4_serv,
    trigger: ".serv-pin",
    toggleActions: "restart none none reverse",
    start: "top 10%",
    end: "60% top",
    // markers: true,
    scrub: 1,
    pin: true,
    // snap: .6
});

// _______________________________________Fourth section___________________________________
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
const text_1 = document.querySelector('.text-paint');
text_1.innerHTML = text_1.textContent.replace(/\S/g, '<span>$&</span>');
console.log(text_1.innerHTML);
const tl_4_rollet = gsap.timeline();

// tl_4_rollet.to('.rollet', {opacity: .8, yPercent:-25, scale:.5, rotationX: -20, duration: 1, borderRadius: 20} )
tl_4_rollet.to('.rollet', {
    opacity: .5, scaleX: .01, rotate: 270, yPercent: 40, scaleY: .4, borderRadius: 30, duration: 10,
    stagger: {
        from: "end",
        amount: 4
    },
})
tl_4_rollet.to('.rol-1', { y: -350, duration: 25, opacity: 0, delay: 2, },30)
tl_4_rollet.to('.rol-2', { duration: 5, opacity: 0, }, 12)
// tl_4_rollet.to('.rol-2', {  opacity:0, duration: 2, delay: 2, },25)
tl_4_rollet.to('.text-paint', {  y: -200, duration: 25, delay: 2, },30)
tl_4_rollet.from('.site-ul', { y: -50, opacity: 0, duration: 15,  },15)
tl_4_rollet.to('.site-ul', { y: -350, opacity: 0, duration: 25, delay: 2, },30)

tl_4_rollet.to('.text-paint span', {
    stagger: 1,
    opacity: 1, 
    // duration:4       
},5)
tl_4_rollet.to('.text-paint span', {
    stagger: 1,
    // scale: 1.05,
    y: -15,
    x:-10
    // duration:4       
},6)

// tl_4_rollet.fromTo('.img-card',
//     { yPercent: 120, }, { yPercent: -105, duration: 9 }, 3 )
tl_4_rollet.from('.img-card', { x: 320, opacity: 0, duration: 12 }, 4 )
tl_4_rollet.from('.money', { x: -320, opacity: 0, duration: 20 }, 15 )
tl_4_rollet.to('.img-card', { y: -330, x:-30, duration: 25, delay: 2, }, 30)
tl_4_rollet.to('.img-card .video-site', {x: -20, y: -265, duration: 25, delay: 2, }, 30)
tl_4_rollet.to('.money', { y: -330, opacity: 0, duration: 25, delay: 2, }, 30)
// tl_4_rollet.to('.img-card', { x: -120,duration: 9 }, 15 )

ScrollTrigger.create({
    animation: tl_4_rollet,
    trigger: ".fourth-pin",
    toggleActions: "restart none none reverse",
    start: "top top",
    end: "100% top",
    // markers: true,
    scrub: 1,
    pin: true,
});

//  _______________________________________Mouse hover videoanimation_____
let clip = document.querySelectorAll('.video-site');

clip.forEach((i) => {
    i.addEventListener('mouseover', () => i.children[0].play());
    i.addEventListener('mouseout', () => i.children[0].pause());
})

// _______________________________________Fifth section___________________________________
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

const tl_5 = gsap.timeline();

tl_5.to('.frame-1', {xPercent: -100, duration: 2, ease: 'none'})
tl_5.to('.frame-2', { xPercent: -100, duration: 2, ease: 'none' }, 0)
tl_5.to('.frame-3', { xPercent: -100, duration: 2, ease: 'none' }, 0)
tl_5.to('.frame-2', { xPercent: -200, duration: 2, ease: 'none' }, )
tl_5.to('.frame-3', { xPercent: -200, duration: 2, ease: 'none' }, 2)

tl_5.to('.pd-1', { xPercent: -20, duration: 1, ease: 'none' }, 0)
tl_5.to('.pd-1', { xPercent: -120, duration: 1, ease: 'none' }, 1)
tl_5.to('.pt-2', { yPercent: 70, xPercent: 50, duration: 1, ease: 'none' }, 1.5)
tl_5.from('.pd-2', { yPercent: 70, xPercent: -50, opacity:0, duration: 1, ease: 'none' }, 1.2)
tl_5.from('.pd-3', { yPercent: 50, xPercent: -50, opacity:0, duration: 1, ease: 'none' }, 3)

tl_5.to('#figure', { opacity: 1, scale: 1, duration: 2, }, 0)
tl_5.to('#figure', {  yPercent: 2000, duration: 3, }, 1)
tl_5.to('#figure', {  yPercent: 2000, duration: 1, }, 3)

tl_5.to('.how-1', { y: -150, x: 320, duration: 1 },0)
tl_5.from('.how-2', { y: 40, x: 20, duration: .5, opacity: 0, scale: .8 }, 0)
tl_5.from('.how-3', { y: 30, x: 20, duration: .5, opacity: 0, }, 0)

ScrollTrigger.create({
    animation: tl_5,
    trigger: ".fifth-pin",
    toggleActions: "restart none none reverse",
    start: "top top",
    end: "75% top",
    // markers: true,
    scrub: 1,
    pin: true,
});

// const image = document.getElementsByClassName('img_parallax');
// new simpleParallax(image, {
//     orientation: 'left',
// });
// gsap.to('#hero_1_1', {
//     scrollTrigger: {
//         trigger: '#first',
//         markers: true,
//         start: "top top",
//         end: "20% top",
//         pin: true,
//         scrub: 2,
//     },
//     opacity: .2,
//     duration: 2
// })


