import { BsBell } from "react-icons/bs";
import './DocsView.css';

function DocsView() {
  return (
    <div className="docsview">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Documents Submission</h1>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>
      <div className="docdetails">
        <p>Name: Aniket Pathak</p>
        <p>Property: Capital Residence, Shanagar Pallapatti</p>
        <p>Contact: +91 63690 56117</p>
      </div>

      <div className="docbuttons">
        <div>
            <button>Download Property Documents</button>
            <button>Download Aadhaar Card</button>
        </div>
        <div>
            <button>Download Updated EC</button>
            <button>Download Marketing Form</button>
        </div>
        <div>
            <button>Download Membership Form</button>
            <button>Download Property Info Sheet</button>
        </div>
      </div>
    </div>
  );
}

export default DocsView;
