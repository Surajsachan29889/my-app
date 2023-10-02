"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Animate;
var _gsap = require("gsap");
function Animate() {
  var tl = _gsap.gsap.timeline({
    repeat: -1
  });
  tl.to(".changing-text h1", {
    ease: _gsap.Expo.easeInOut,
    stagger: 2,
    top: 0
  }, 'flag').to(".changing-text h1", {
    delay: 2,
    ease: _gsap.Expo.easeInOut,
    stagger: 2,
    top: "-100%"
  }, 'flag');
}