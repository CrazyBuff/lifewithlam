import "./contact.css";


export default function Contact() {

    return (
        <>
        <div className="contact-body">
            <div className="contact-title">GET IN TOUCH</div>
            <div className="contact-body-inner-container">
                <div className="contact-content">
                    <form action="/action_page.php">
                        <input className="contact-name-input" type="text" id="name" name="name" placeholder="Name"></input>
                        <input className="contact-name-input" type="text" id="email" name="email" placeholder="Email"></input>
                        <input className="contact-name-input" type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" pattern="[0-9]{10}" required></input> 
                        <small>Format: 0412-345-678</small>
                        <textarea className="contact-name-textarea" id="message" name="message" placeholder="Message" ></textarea>
                        <input className="contact-submit-btn" type="submit" value="Send →"></input>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

}