import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MidContent() {
  const imgRef = useRef(null);

  useEffect(() => {
    const imageElement = imgRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageElement,
        scrub: 1,
      },
    });

    tl.to(imageElement, {
      scale: 3,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="mid">
      <h1>“</h1>
      <h1 id="mid-heading">
        I like to do Programming, Designing and Development
      </h1>
      <p>
        Python: Proficient in Python programming language and its various
        libraries and frameworks for web development and data manipulation.
        <br />
        <br />
        Full Stack Web Development: Experienced in building dynamic and
        responsive web applications using front-end technologies like HTML, CSS,
        and JavaScript, and back-end technologies like Node.js, Express, and
        MongoDB.
        <br />
        <br />
        Basics of Machine Learning: Familiar with machine learning concepts,
        algorithms, and tools such as scikit-learn and TensorFlow. Able to
        develop simple machine learning models for predictive analysis and data
        classification tasks.
        <br />
        <br />
        Design: Knowledge of design principles and tools like Adobe Photoshop
        and Figma. Able to create visually appealing and user-friendly
        interfaces.
        <br />
        <br />
        Bachelor of Technology (B.Tech) in Information Technology from PSIT,
        2025 Batch. As a dedicated learner, I constantly strive to expand my
        knowledge and stay updated with the latest advancements in the field of
        technology. I'm passionate about leveraging my skills in Python,
        full-stack web development, machine learning basics, and design to
        create innovative and impactful solutions.
      </p>
      <div className="mid-background" ref={imgRef}></div>
    </div>
  );
}

export default MidContent;
