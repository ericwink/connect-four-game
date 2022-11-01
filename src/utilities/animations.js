import { gsap } from 'gsap'

// gsap animations
function animate(location) {
    gsap.fromTo(`.testpiece_${location}`,
        { y: -500 },
        {
            y: 0,
            duration: 1,
            ease: 'bounce'
        })
}

function flashWin() {
    gsap.from('.win', {
        opacity: 0,
        duration: 1,
        yoyo: true,
        repeat: -1
    })
}

function flashTop() {
    let tl = gsap.timeline()
    tl.fromTo('.top', {
        opacity: 0,
        backgroundColor: 'none'
    },
        {
            opacity: 60,
            backgroundColor: 'pink',
            duration: 0.5,
            yoyo: true,
            repeat: 3
        })
    tl.to('.top', { opacity: 100, backgroundColor: 'none' })
}

export { animate, flashWin, flashTop }