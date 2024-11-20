import React from "react";
import "./ContactPage.css"; // Import the CSS file

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="form-container">
          <h3>Get In Touch</h3>
          <h1>Connect with Us – Your Realty Journey Begins Here!</h1>
          <p>
            Reach out today for expert real estate guidance. Buying, selling, or
            curious? We’re here to help!
          </p>
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Eg: Mohamed"
                name="firstName"
                required
              />
              <input
                type="text"
                placeholder="Eg: Mafaz"
                name="lastName"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Eg: contact@thespecialists.co.in"
              name="email"
              required
            />
            <textarea
              placeholder="Eg: I'd like to buy a new home in Pallappatti"
              name="message"
              required
            ></textarea>
            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I Agree to the{" "}
                <a href="#">Terms of Conditions & Privacy Policy</a>
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="info-container">
          <img src="./src/assets/ContactImg.svg" alt="Contact Us" />
          <div className="contact-info">
            <div className="contact-detail">
              <img src="./src/assets/emailc.svg"></img>
              <div>
                <h6>Email</h6>
                <p>contact@thespecialists.co.in</p>
              </div>
            </div>
            <div className="contact-detail">
              <img src="./src/assets/phonec.svg"></img>
              <div>
                <h6>Phone</h6>
                <p>+91 94888 87095</p>
              </div>
            </div>
            <div className="contact-detail">
              <img src="./src/assets/addressc.svg"></img>
              <div>
                <h6>Address</h6>
                <p>The Specialists, 76 Dindigul Road, Pallapatti - 639207</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
