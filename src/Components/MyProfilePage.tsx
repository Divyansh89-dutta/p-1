import { FaPenToSquare } from "react-icons/fa6";
import "./MyProfilePage.css";
import Awards from "./Awards";

function MyProfilePage() {
  return (
    <>
    <h1 className="pagetitle">My Profile</h1>
    <div className="myprofilepage">
      
      <div className="myprofilecard">
        <img src="./src/assets/User 1.jpeg"></img>
        <h5>Aniket Pathak</h5>
        <p className="designation">Real Estate Agent</p>
        <button>Share Profile</button>
        <div className="contacts">
          <div className="email">
            <img src="./src/assets/email-circle.svg"></img>
            <p>aniketkumarpathak@gmail.com</p>
          </div>
          <div className="email">
            <img src="./src/assets/phone-circle.svg"></img>
            <p>+91 94888 87095</p>
          </div>
        </div>

        <div className="penicon">
          <FaPenToSquare />
        </div>
      </div>
      <div className="rightsection">
        <div className="awards">
          <Awards />
        </div>

        <div className="aboutme">
          <div className="title">
            <h4>About Aniket Pathak</h4>
            <FaPenToSquare className="penicon"/>
          </div>
          <p>
            With over a decade of experience in the real estate industry, Melvin
            is a dedicated and knowledgeable realtor who prides himself on
            delivering exceptional service to his clients. Specializing in
            residential properties across the city, Melvin's deep understanding
            of the market and keen negotiation skills have earned him a
            reputation for securing the best deals for buyers and sellers alike.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyProfilePage;
