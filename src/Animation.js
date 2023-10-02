import { gsap, Expo } from "gsap";

export default function Animate(){
    var tl = gsap.timeline({
    repeat:-1
})
tl
.to(".changing-text h1", {

    ease:Expo.easeInOut,
    stagger:2,
    top:0
},'flag')

.to(".changing-text h1", {
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'flag')
}