import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { gsap } from 'gsap/all';
import { TextPlugin } from 'gsap/dist/TextPlugin';


gsap.registerPlugin(TextPlugin);
const LazyImage = lazy(() => import('./Lazy-images'));

function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    gsap.from(titleElement, {
      duration: 1,
      text: ".",
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(titleElement, {
          duration: 2,
          text: 'Hello, I Am',
          ease: 'power1.inOut',
        });
      },
    });
  }, []);

  useEffect(() => {
    gsap.set('.changing-text h1', { y: '100%' });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to('.changing-text h1', {
      duration: 1,
      ease: 'power2.inOut',
      y: '0%',
      stagger: 0.5,
    })
      .to('.changing-text h1', {
        duration: 1,
        ease: 'power2.inOut',
        y: '-100%',
        stagger: 0.5,
      })
      .to('.changing-text h1', {
        duration: 1,
        ease: 'power2.inOut',
        y: '-210%',
        stagger: 0.5,
      })
      .to('.changing-text h1', {
        duration: 0.1,
        delay: 1,
      });
  }, []);

  useEffect(() => {
    gsap.set(".skill-table div", { scale: 0, opacity: 0 });

    gsap.to(".skill-table div", {
      duration: 0.8,
      delay: 2,
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    });
  }, []);
  return (
    <div className='hero-sec'>
      <div className='hero-grid'>
        <div className='hero-content'>
          <h1 ref={titleRef} className='hero-title'>{null}</h1>
          <div className='changing-text'>
            <h1>Suraj Sachan</h1>
            <h1>A Web Developer</h1>
            <h1> A Programmer</h1>
          </div>
        </div>
        <div className="hero-para">
          <p>My portfolio showcases my passion for creating intuitive user interfaces and delivering high-quality code for exceptional user experiences.</p>
          <div className='skill-table'>
            <div className='cpp'>
              <h3 color='white'>C++</h3>
            </div>
            <div className='python'>
              <h3>Python</h3>
            </div>
            <div className='node'>
              <h3>Node.js</h3>
            </div>
            <div className='js'>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className='hero-image'>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <LazyImage />
          </Suspense> */}
          {/* <img
          className='react-logo'
          alt=''
          src='logo.png'
          
        /> */}
        <img src="bwlogo-testing.png" alt="ProfilePicture" class="react-logo"></img>
           
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
