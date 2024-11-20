import ServiceSelect from "./ServiceSelect";
import "./Services.css";

function Services() {
  return (
    <>
      <div className="serpage">
        <div className="ServicesPage">
          <img src="./src/assets/abtimg.svg"></img>
          <div className="service-right">
            <h4>OUR SERVICES</h4>
            <h1>Elevate Your Experience: Explore Our Services</h1>
            <p>
              Discover a tailored suite of real estate solutions designed to
              exceed your expectations. From expert consultations to seamless
              transactions, we're here to elevate every aspect of your property
              journey.
            </p>
          </div>
        </div>
      </div>
      <ServiceSelect />
    </>
  );
}

export default Services;