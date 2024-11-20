import './AboutElement.css'

function AboutElement() {
  return (
    <div className="about">
      <div className="aboutimg">
        <img src="./src/assets/AboutImg.svg"></img>
      </div>
      <div className="AboutContent">
        <div className='abouttext'>
        <h6>ABOUT US</h6>
        <h1>Meet Our Experts Behind Your Dream Home</h1>
        <p>
          At The Specialist - Real Estate, our seasoned team is devoted to
          finding your ideal home. With market expertise and personalized
          service, we'll guide you to your dream. Trust us to make it happen.
        </p>
        </div>
        <div className="hi1">
          <div className="sp1">
            <img src="./src/assets/sp1.svg"></img>
            <p>25+ Years of Expertise</p>
          </div>
          <div className="sp2">
            <img src="./src/assets/sp2.svg"></img>
            <p>100+ Agents</p>
          </div>
        </div>
        <div className="hi2">
          <div className="sp3">
            <img src="./src/assets/sp3.svg"></img>
            <p>50K+ Properties Sold</p>
          </div>
          <div className="sp4">
            <img src="./src/assets/sp4.svg"></img>
            <p>100K+ Clients</p>
          </div>
        </div>
        <div className="aboutbuttons">
            <button className="readmore">Read More</button>
            <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default AboutElement;
