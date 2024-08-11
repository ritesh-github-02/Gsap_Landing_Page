function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-30,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
},"-=0.3")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7")

tl.from(".section1bottom img",{
    opacity:0,
    y:-30,
    stagger:0.15,
    duration:0.6
})
}

function page2animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            end:"top 0%",
            start:"top 50%",
            scrub:2,
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")


    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}

page1animation()
page2animation()
