import "./Footer.css";
function Footer() {
  return (
    <div className="foothi">
      <div className="footer">
        <div className="foot1">
          <img
            src="./src/assets/Nav-Logo.svg"
            className="footimg"
            alt="Logo"
          ></img>
          <div className="address">
            <img src="./src/assets/location.svg" alt="Location"></img>
            <p>The Specialists, Dindigul Road, Pallapatti. 639 207</p>
          </div>
          <div className="phone">
            <img src="./src/assets/phone.svg" alt="Phone"></img>
            <p>+91 94888 87095</p>
          </div>
          <div className="soc-icons">
            <div>
              <img src="./src/assets/facebook.svg" alt="Facebook"></img>
            </div>
            <div>
              <img src="./src/assets/insta.svg" alt="Instagram"></img>
            </div>
            <div>
              <img src="./src/assets/linkedin.svg" alt="LinkedIn"></img>
            </div>
            <div>
              <img src="./src/assets/twitter.svg" alt="Twitter"></img>
            </div>
            <div>
              <img src="./src/assets/youtube.svg" alt="YouTube"></img>
            </div>
          </div>
        </div>
        <div className="foot2">
          <h6>About</h6>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="foot3">
          <h6>Services</h6>
          <ul>
            <li>
              <a href="#buyer-lead">Buyer Lead</a>
            </li>
            <li>
              <a href="#seller-lead">Seller Lead</a>
            </li>
            <li>
              <a href="#rental-lead">Rental Lead</a>
            </li>
            <li>
              <a href="#home-maintenance">Home Maintenance</a>
            </li>
            <li>
              <a href="#expert-consultation">Expert Consultation</a>
            </li>
          </ul>
        </div>
        <div className="foot4">
          <h6>The Specialists</h6>
          <ul>
            <li>
              <a href="/services.html">Services</a>
            </li>
            <li>
              <a href="#google-reviews">Google Reviews</a>
            </li>
            <li>
              <a href="#properties">Properties</a>
            </li>
            <li>
              <a href="#create-listing">Create Listing</a>
            </li>
            <li>
              <a href="#become-agent">Become an Agent</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
