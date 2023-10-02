function Social(){
    const fb={
        "--i":"#00cbff",
        "--j":"#d7eef4",
    }
    const insta={
        "--i":"#F100CF",
        "--j":"#F27908"
    }
    const link={
        "--i":"#0073B1",
        "--j":"white"
    }
    const git={
        "--i":"#0C2433",
        "--j":"white"
    }
    const tele={
        "--i":"#00A5E1",
        "--j":"black"
    }
    return (
        <div className="social">
            <div>

            <h3>Follow Me On:</h3>
            </div>
            <ul>
                <a href="https://www.facebook.com/suraj.sachan.58?mibextid=ZbWKwL">
                    <li id="facebook" style={fb}>
                    <span className="social-icon"><i class="fa-brands fa-facebook-f"></i></span>
                    <span className="social-title">FACEBOOK</span>
                </li>
                    </a>
                    <a href="https://instagram.com/suraj._.sachan?igshid=ZGUzMzM3NWJiOQ==">

                <li id="insta" style={insta}>
                    <span className="social-icon"><i class="fa-brands fa-instagram"></i></span>
                    <span className="social-title">INSTAGRAM</span>
                </li>
                    </a>
                <li id="linkedin" style={link}>
                    <span className="social-icon"><i class="fa-brands fa-linkedin-in"></i></span>
                    <span className="social-title">LINKEDIN</span>
                </li>
                <li id="github" style={git}>
                    <span className="social-icon"><i class="fa-brands fa-github"></i></span>
                    <span className="social-title">GITHUB</span>
                </li>
                <li id="telegram" style={tele}>
                    <span className="social-icon"><i class="fa-brands fa-telegram"></i></span>
                    <span className="social-title">TELEGRAM</span>
                </li>
            </ul>

        </div>
    );
}
export default Social;