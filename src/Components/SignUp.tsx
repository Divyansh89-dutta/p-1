import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./SignUp.css";

function SignUp() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");


  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const submitButton = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous error messages
  
    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("username", username);
    formData.append("password", password);
    
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }
  
    if (role === "Agent") {
      formData.append("fullName", fullName);
      formData.append("dateOfBirth", dateOfBirth);
      formData.append("gender", gender);
      formData.append("experience", experience);
      formData.append("specialization", specialization);
      formData.append("address", address);
      formData.append("about", about);
    }
  
    try {
      const response = await axios.post("http://localhost:5001/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
  
      if (response.status === 201) {
        console.log("Account created successfully.");
        window.location.href = "/success-page"; // Redirect on successful account creation
      } else {
        console.error("Unexpected response status:", response.status);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 || status === 409) {
            setErrorMessage(data.message || "User already exists");
          } else {
            setErrorMessage(data.message || "An unexpected error occurred. Please try again.");
          }
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage("No response from server. Please try again later.");
        } else {
          // Something happened in setting up the request
          setErrorMessage("Error in setting up the request.");
        }
      } else {
        // Non-Axios error
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      console.error("Signup error:", error);
    }
  };
  
  return (
    <div className="signup">
      <img src="./src/assets/LoginImg.svg" className="login-img" alt="Login" />
      <div className="regi-left">
        <img src="./src/assets/Nav-Logo.svg" alt="Logo" className="form-logo" />
        <h2>Create Account</h2>
        <p>Join Us Now: Create Your Free Account</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <form onSubmit={submitButton}>
          <select required onChange={handleRoleChange} value={role}>
            <option value="">Select Role</option>
            <option value="Agent">Agent</option>
            <option value="Agency">Agency</option>
            <option value="Owner">Owner</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Manager">Manager</option>
            <option value="External Agent">External Agent</option>
          </select>
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            placeholder="Mobile Number"
            type="text"
            pattern="[0-9]+"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

      {role === "Agent" && (
        <div className="agent-form">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className="form-div">
            <input
              type="date"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <input
            required
            placeholder="Experience in Years"
            type="text"
            pattern="[0-9]+"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <select
            required
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="" disabled>Areas of Specialization</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Land</option>
            <option>Rental Properties</option>
            <option>Real Estate Services</option>
          </select>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <textarea
            required
            placeholder="About Yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <label>Profile Picture</label>
          <input
            required
            type="file"
            onChange={handleFileChange}
          />
        </div>
      )}

          <div className="accept-tc">
            <input type="checkbox" required />
            <label>I Agree with your Terms & Service</label>
          </div>
          <button type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
