function Footer(){
    const bold={
        fontWeight: "bold",
    }
    return (
        <div className="footer">
            <div className="webtech">
                <h1>Be Creative,</h1>
                <h1>Be Solutive</h1>
                <br/>
                <p>
                Welcome to my website! I'm thrilled to present this website that I've built using React, Gsap, and enhanced with a stunning background created with Particle.js.
                <br/>
                 It showcases my skills, creativity, and passion for web development. Feel free to reach out to me if you have any questions or would like to discuss potential collaborations.
               </p>
            </div>
            <div className="foot-brand">
                <img src="main-logo.png" alt="logo"/>
                
            </div>
            <div className="foot-nav">
                <ul>
                    <li style={bold}>Navigation</li>
                    <a href=" "><li>Home</li></a>
                    <a href=" "><li>Contact</li></a>
                    <a href=" "><li>Certifications</li></a>
                    <a href=" "><li>Projects</li></a>
                </ul>
                <ul>
                    <li style={bold}>Refrences</li>
                    <li>Udemy</li>
                    <li>Youtube</li>
                    <li>Stackoverflow</li>
                    <li>ChatGPT</li>
                </ul>
                <ul>
                    <li style={bold}>Social Media</li>
                    <a href="https://instagram.com/suraj._.sachan?igshid=ZGUzMzM3NWJiOQ=="><li>Instagram</li></a>
                    <a href="https://www.facebook.com/suraj.sachan.58?mibextid=ZbWKwL"><li>Facebook</li></a>
                    <a href=" "><li>Linkedin</li></a>
                    <a href=" "><li>Github</li></a>
                    <a href=" "><li>Telegram</li></a>
                </ul>
            </div>
            

        </div>
    );
}
export default Footer;