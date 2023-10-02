import Header from "./header"


export default function MainContact(){
    return(

        <div className="MainContact-container">
            <Header/>
            <div  className="contact-title">
            <h1>Get In <span>Touch</span></h1>
            </div>
            <div className="mainform">
                <form action="https://localhost:5000/mainform" method="post">
                    <p>Hey, my name is <input type="text" placeholder="Type here" name="name"></input> my E-Mail is <input type="email" placeholder="Your E-Mail is here" name="email"></input> and my query is <input type="textarea" placeholder="Type your message" name="message"></input> .</p>
                    <button class="learn-more" style={{marginTop:"30px"}} type="submit">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Send To Me</span>
                    </button>
                </form>
            </div>
        </div>
    )
}