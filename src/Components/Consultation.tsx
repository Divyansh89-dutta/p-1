import { useState } from "react";
import "./Consultation.css";

function Consultation() {
  const [mobile, setMobile] = useState(""); // To store the mobile number input

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    if (!mobile) {
      alert("Please enter a valid mobile number!");
      return;
    }

    try {
      // Sending a POST request using fetch to submit the number
      const response = await fetch("/submit-number", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });

      const result = await response.json();

      // Show an alert based on the server's response
      if (response.ok) {
        alert(`Mobile number ${mobile} has been successfully submitted!`);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting mobile number:", error);
      alert("There was a problem submitting the mobile number.");
    }
  };

  return (
    <div className="consultation">
      <h1>Dream home awaits with expert guidance</h1>
      <p>
        Enter your mobile number, and we'll reach out to provide a personalized
        consultation tailored to your real estate needs. Get the insights and
        support you need by simply sharing your contact details.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Mobile Number"
          type="number"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)} // Update the mobile state
        />

        <button type="submit">GET CONSULTATION</button>
      </form>
    </div>
  );
}

export default Consultation;
