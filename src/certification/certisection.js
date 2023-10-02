import {React, useEffect} from 'react';
import { gsap } from 'gsap';

export default function Certisection(){
        useEffect(()=>{
            gsap.fromTo(".section-title h1", 
            {
                y:50
            },{
                y:-5,
                duration:1,
                scrollTrigger:{
                    trigger:".section-title h1",
                    markers:false,
                    start:"top 95%",
                    end:"top 70%",
                    toggleActions:"play none none reverse"
                }
            })
            gsap.fromTo(".psitcontent p",{
                x:500,
                opacity:0.5
            },{
                duration:2,
                opacity:1,
                x:0,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:".psitcontent p",
                    markers:false,
                    start:"top 80%",
                    end:"top 50%",
                    toggleActions:"play none none reverse"
                }

            })
            gsap.fromTo(".psitcard",{
                opacity:0
            },{
                duration:2,
                opacity:1,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:".psitcard",
                    markers:false,
                    start:"top 80%",
                    end:"top 50%",
                    toggleActions:"play none none reverse"
                }

            })
            gsap.fromTo(".fsdcontentchild",{
                x:-600,
                opacity:0.5
            },{
                duration:2,
                opacity:1,
                x:0,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:".psitcontent p",
                    markers:false,
                    start:"top 20%",
                    end:"top 70%",
                    toggleActions:"play none none reverse"
                }

            })
            gsap.fromTo(".certificatefsd",{
                opacity:0
            },{
                duration:2,
                opacity:1,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:".psitcontent p",
                    markers:false,
                    start:"top 20%",
                    end:"top 70%",
                    toggleActions:"play none none reverse"
                }

            })
            gsap.fromTo("#ML",{
                opacity:0
            },{
                duration:2,
                opacity:1,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:"#ML",
                    markers:false,
                    start:"top 90%",
                    end:"top 50%",
                    toggleActions:"play none none reverse"
                }

            })
            gsap.fromTo(".MLcontentchild",{
                x:600,
                opacity:0.5
            },{
                duration:2,
                opacity:1,
                x:0,
                ease: 'power1.inOut',
                scrollTrigger:{
                    trigger:".MLcontentchild",
                    markers:false,
                    start:"top 90%",
                    end:"top 70%",
                    toggleActions:"play none none reverse"
                }

            })
        },[])
    return(
        <div className='certi-container'>
            <div className='section-title'>
                <h1><span>Education +</span> Certificates</h1>
            </div>
            <div className='showcase'>
                <hr/>
                <div className='circle1'></div>
                <div className='arrow1'>.</div>
                <div className='psitcard'>
                    <h1>Pranveer Institute of Technology</h1>
                    <h2>B.Tech(2025)</h2>
                    <h3>Information Technology</h3>

                </div>
                <div className='psitcontent'>
                    <p>I am currently pursuing my B.Tech in IT at PSIT. Throughout my academic journey, I have gained a solid foundation in python programming, web development, and machine learning, which have equipped me with the knowledge and skills necessary to succeed in software engineering.</p>
                </div>
                <div className="certificatefsd" id="fsd">
                    <img src="FullStackWebDevlopmentCertificate.jpg" alt="fsdimg"></img> 
                </div>
                <div  className="circle1" id='circle2'></div>
                <div  className="arrow1" id='arrow2'>.</div>
                <div className='fsdcontent'>
                    <h2 className='fsdcontentchild'>FullStackWebDevlopment(Udemy)</h2>
                    <h3 className='fsdcontentchild'>Instructer:<span> Dr.Angela Yu</span></h3>
                    <h5 className='fsdcontentchild'>Date: <span>June 2023</span></h5>  
                </div>
                <div className="certificatefsd" id="ML">
                    <img src="MLcertificate.png" alt="MLimg"></img> 
                </div>
                <div  className="circle1" id='circle3'></div>
                <div  className="arrow1" id='arrow3'>.</div>
                <div className='fsdcontent' id='MLcontent'>
                    <h2 className='MLcontentchild'>Machine Learning(Internshala)</h2>
                    <h3 className='MLcontentchild'>Instructer:<span> Kunal Jain</span></h3>
                    <h5 className='MLcontentchild'>Date: <span>November 2022</span></h5>  
                </div>
            </div>
        </div>
    )
}